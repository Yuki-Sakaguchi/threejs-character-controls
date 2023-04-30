import {
  AnimationClip,
  AnimationMixer,
  AnimationAction,
  Group,
  Scene,
  Camera,
} from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { CharacterControls } from "../../utils/CharacterControls";
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
  camera: Camera;
  orbitControls: OrbitControls;

  // state
  isReady: Boolean = false;
  model: Group | null;
  controls: CharacterControls | null;

  constructor(scene: Scene, camera: Camera, orbitControls: OrbitControls) {
    this.scene = scene;
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

      // キャラクターのコントローラーを生成
      this.controls = new CharacterControls(
        model,
        mixer,
        animationsMap,
        this.orbitControls,
        this.camera,
        "Idle"
      );

      // 準備完了
      this.isReady = true;
    });
  }
}
