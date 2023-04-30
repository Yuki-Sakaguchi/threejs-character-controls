import {
  AnimationClip,
  AnimationMixer,
  AnimationAction,
  Group,
  Scene,
  Camera,
} from "three";
import * as RAPIER from "@dimforge/rapier3d";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import {
  CharacterControls,
  CONTROLLER_BODY_RADIUS,
} from "../../utils/CharacterControls";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const playerModelPath = "./assets/models/Soldier.glb?url";

/**
 * プレイヤークラス
 *
 * @remarks
 * プレイヤーのモデルの読み込みとプレイヤーを操作する controls の準備ができたら isReady が true になる
 */
export class Player {
  scene: Scene;
  world: RAPIER.World;
  camera: Camera;
  orbitControls: OrbitControls;

  // state
  isReady: Boolean = false;
  model: Group | null;
  controls: CharacterControls | null;

  constructor(
    scene: Scene,
    world: RAPIER.World,
    camera: Camera,
    orbitControls: OrbitControls
  ) {
    this.scene = scene;
    this.world = world;
    this.camera = camera;
    this.orbitControls = orbitControls;

    this.model = null;
    this.controls = null;

    this.init();
  }

  init() {
    const loader = new GLTFLoader();
    loader.load(playerModelPath, (gltf) => {
      const model = gltf.scene;

      // 影を追加
      model.traverse((object: any) => {
        if (object.isMesh) object.castShadow = true;
      });

      // シーンに追加
      this.scene.add(model);
      this.model = model;

      // モデルに含まれるアニメーション情報を取得し、animationsMapに格納
      const gltfAnimations: AnimationClip[] = gltf.animations;
      const mixer = new AnimationMixer(model);
      const animationsMap: Map<string, AnimationAction> = new Map();
      gltfAnimations
        .filter((animation) => animation.name != "TPose")
        .forEach((animationClip: AnimationClip) => {
          animationsMap.set(
            animationClip.name,
            mixer.clipAction(animationClip)
          );
        });

      // 物理演算
      const bodyDesc =
        RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(-1, 3, 1);
      const rigidBody = this.world.createRigidBody(bodyDesc);
      const dynamicCollider = RAPIER.ColliderDesc.ball(CONTROLLER_BODY_RADIUS);
      this.world.createCollider(dynamicCollider, rigidBody);

      // 線を書き出したい
      // new RAPIER.DebugRenderBuffers();

      // キャラクターのコントローラーを生成
      this.controls = new CharacterControls(
        model,
        mixer,
        animationsMap,
        this.orbitControls,
        this.camera,
        "Idle",
        this.world,
        new RAPIER.Ray({ x: 0, y: 0, z: 0 }, { x: 0, y: -1, z: 0 }),
        rigidBody
      );

      // 準備完了
      this.isReady = true;
    });
  }
}
