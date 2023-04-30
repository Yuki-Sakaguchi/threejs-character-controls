import {
  AnimationAction,
  AnimationMixer,
  Camera,
  Group,
  Quaternion,
  Vector3,
} from "three";
import * as RAPIER from "@dimforge/rapier3d";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { W, A, D, S, DIRECTIONS } from "./KeyCode";

export const CONTROLLER_BODY_RADIUS = 0.28;

export class CharacterControls {
  model: Group;
  mixer: AnimationMixer;
  animationsMap: Map<string, AnimationAction> = new Map();
  orbitControl: OrbitControls;
  camera: Camera;

  // state
  toggleRun: boolean = true;
  currentAction: string;

  // temporary data
  walkDirection = new Vector3();
  rotateAngle = new Vector3(0, 1, 0);
  rotateQuartenion: Quaternion = new Quaternion();
  cameraTarget = new Vector3();
  storedFall = 0;

  // constants
  fadeDuration: number = 0.2;
  runVelocity = 5;
  walkVelocity = 2;

  world: RAPIER.World;
  ray: RAPIER.Ray;
  rigidBody: RAPIER.RigidBody;

  constructor(
    model: Group,
    mixer: AnimationMixer,
    animationsMap: Map<string, AnimationAction>,
    orbitControl: OrbitControls,
    camera: Camera,
    currentAction: string,
    world: RAPIER.World,
    ray: RAPIER.Ray,
    rigidBody: RAPIER.RigidBody
  ) {
    this.model = model;
    this.mixer = mixer;
    this.animationsMap = animationsMap;
    this.orbitControl = orbitControl;
    this.camera = camera;
    this.currentAction = currentAction;
    this.animationsMap.forEach((value, key) => {
      if (key === currentAction) {
        value.play();
      }
    });
    this.world = world;
    this.ray = ray;
    this.rigidBody = rigidBody;
  }

  lerp(x: number, y: number, a: number) {
    return x * (1 - a) + y * a;
  }

  switchRunToggle() {
    this.toggleRun = !this.toggleRun;
  }

  update(delta: number, keyspressed: any) {
    // 押されているキーに合わせたアニメーションを選択
    const directionPressed = DIRECTIONS.some(
      (key) => keyspressed[key] === true
    );
    let play = "";
    if (directionPressed && this.toggleRun) {
      play = "Run";
    } else if (directionPressed) {
      play = "Walk";
    } else {
      play = "Idle";
    }

    // いまのアニメーションと異なる場合は今のアニメーションと次のアニメーションをフェードで切り替える
    if (this.currentAction !== play) {
      const toPlay = this.animationsMap.get(play);
      const current = this.animationsMap.get(this.currentAction);
      current?.fadeOut(this.fadeDuration);
      toPlay?.reset().fadeIn(this.fadeDuration).play();
      this.currentAction = play;
    }

    // アニメーションを更新
    this.mixer.update(delta);

    this.walkDirection.x = this.walkDirection.y = this.walkDirection.z = 0;

    let velocity = 0;

    if (this.currentAction === "Run" || this.currentAction === "Walk") {
      // 進行方向に合わせてキャラクターの向きを変える
      const angleYCameraDirection = Math.atan2(
        this.camera.position.x - this.model.position.x,
        this.camera.position.z - this.model.position.z
      );

      // オフセットを取得
      const directionOffset = this.directionOffset(keyspressed);

      // モデルを回転
      this.rotateQuartenion.setFromAxisAngle(
        this.rotateAngle,
        angleYCameraDirection + directionOffset
      );
      this.model.quaternion.rotateTowards(this.rotateQuartenion, 0.2);

      // 方向を計算
      this.camera.getWorldDirection(this.walkDirection);
      this.walkDirection.y = 0;
      this.walkDirection.normalize();
      this.walkDirection.applyAxisAngle(this.rotateAngle, directionOffset);

      // 移動する量を計算
      velocity =
        this.currentAction === "Run" ? this.runVelocity : this.walkVelocity;
    }

    const translation = this.rigidBody.translation();
    if (translation.y < -1) {
      this.rigidBody.setNextKinematicTranslation({ x: 0, y: 10, z: 0 });
    } else {
      // カメラとモデルを更新
      const cameraPositionOffset = this.camera.position.sub(
        this.model.position
      );
      this.model.position.x = translation.x;
      this.model.position.y = translation.y;
      this.model.position.z = translation.z;
      this.updateCameraTarget(cameraPositionOffset);

      this.walkDirection.y += this.lerp(this.storedFall, -9.81 * delta, 0.1);
      this.storedFall = this.walkDirection.y;
      this.ray.origin.x = translation.x;
      this.ray.origin.y = translation.y;
      this.ray.origin.z = translation.z;

      const hit = this.world.castRay(this.ray, 0.5, false);
      if (hit) {
        const point = this.ray.pointAt(hit.toi);
        const diff = translation.y - (point.y + CONTROLLER_BODY_RADIUS);
        if (diff < 0.0) {
          this.storedFall = 0;
          this.walkDirection.y = this.lerp(0, Math.abs(diff), 0.5);
        }
      }

      this.walkDirection.x = this.walkDirection.x * velocity * delta;
      this.walkDirection.z = this.walkDirection.z * velocity * delta;

      this.rigidBody.setNextKinematicTranslation({
        x: translation.x + this.walkDirection.x,
        y: translation.y + this.walkDirection.y,
        z: translation.z + this.walkDirection.z,
      });
    }
  }

  private updateCameraTarget(offset: Vector3) {
    // カメラを移動
    const rigidTranslation = this.rigidBody.translation();
    this.camera.position.x = rigidTranslation.x + offset.x;
    this.camera.position.y = rigidTranslation.y + offset.y;
    this.camera.position.z = rigidTranslation.z + offset.z;

    // カメラの対象を移動
    this.cameraTarget.x = this.model.position.x;
    this.cameraTarget.y = this.model.position.y + 1;
    this.cameraTarget.z = this.model.position.z;
    this.orbitControl.target = this.cameraTarget;
  }

  /**
   * 押されたキーに合わせた向きの角度を返す
   * @param keysPressed
   * @returns
   */
  private directionOffset(keysPressed: any) {
    let directionOffset = 0; // w

    if (keysPressed[W]) {
      if (keysPressed[A]) {
        directionOffset = Math.PI / 4; // w+a
      } else if (keysPressed[D]) {
        directionOffset = -Math.PI / 4; // w+d
      }
    } else if (keysPressed[S]) {
      if (keysPressed[A]) {
        directionOffset = Math.PI / 4 + Math.PI / 2; // s+a
      } else if (keysPressed[D]) {
        directionOffset = -Math.PI / 4 - Math.PI / 2; // s+d
      } else {
        directionOffset = Math.PI; // s
      }
    } else if (keysPressed[A]) {
      directionOffset = Math.PI / 2; // a
    } else if (keysPressed[D]) {
      directionOffset = -Math.PI / 2; // d
    }

    return directionOffset;
  }
}
