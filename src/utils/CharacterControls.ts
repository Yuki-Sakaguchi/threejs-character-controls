import {
  AnimationAction,
  AnimationMixer,
  Camera,
  Group,
  Quaternion,
  Vector3,
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { W, A, D, S, DIRECTIONS } from "./KeyCode";

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

  // constants
  fadeDuration: number = 0.2;
  runVelocity = 5;
  walkVelocity = 2;

  constructor(
    model: Group,
    mixer: AnimationMixer,
    animationsMap: Map<string, AnimationAction>,
    orbitControl: OrbitControls,
    camera: Camera,
    currentAction: string
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

    if (this.currentAction === "Run" || this.currentAction === "Walk") {
      // 進行方向に合わせてキャラクターの向きを変える
      const angleYCameraDirection = Math.atan2(
        this.camera.position.x - this.model.position.x,
        this.camera.position.z - this.model.position.z
      );
      const directionOffset = this.directionOffset(keyspressed);
      this.rotateQuartenion.setFromAxisAngle(
        this.rotateAngle,
        angleYCameraDirection + directionOffset
      );
      this.model.quaternion.rotateTowards(this.rotateQuartenion, 0.2);

      this.camera.getWorldDirection(this.walkDirection);
      this.walkDirection.y = 0;
      this.walkDirection.normalize();
      this.walkDirection.applyAxisAngle(this.rotateAngle, directionOffset);

      // 移動する量を計算
      const velocity =
        this.currentAction === "Run" ? this.runVelocity : this.walkVelocity;

      // キャラクターの位置を移動させる
      const moveX = this.walkDirection.x * velocity * delta;
      const moveZ = this.walkDirection.z * velocity * delta;
      this.model.position.x += moveX;
      this.model.position.z += moveZ;

      // カメラの向きを変える
      this.updateCameraTarget(moveX, moveZ);
    } else {
      // カメラの向きを変える
      this.updateCameraTarget(0, 0);
    }
  }

  private updateCameraTarget(moveX: number, moveZ: number) {
    this.camera.position.x += moveX;
    this.camera.position.z += moveZ;

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
