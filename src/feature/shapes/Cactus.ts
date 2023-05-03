import { BoxGeometry, Group, Mesh, MeshPhongMaterial, Scene } from "three";
import * as RAPIER from "@dimforge/rapier3d";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const modelPath = "./assets/models/white_cactus.glb?url";

type Params = { x: number; y: number; z: number };

type Props = {
  scene: Scene;
  world: RAPIER.World;
  scale?: { x?: number; y?: number; z?: number };
  transition?: { x?: number; y?: number; z?: number };
};

/**
 * 物理演算を適応したサボテンを生成
 * @param
 * @returns
 */
export function createCactus({ scene, world, scale, transition }: Props) {
  // 値がない時の初期化、値をマージしているのでx,y,zのどれかだけの追加もできる
  const s: Params = { x: 1, y: 1, z: 1, ...scale };
  const t: Params = { x: 0.0, y: 0.0, z: 0.0, ...transition };

  return new Promise<{
    rigid: RAPIER.RigidBody;
    mesh: Group;
  }>((resolve) => {
    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      const model = gltf.scene;

      model.scale.set(
        s.x * model.scale.x,
        s.y * model.scale.y,
        s.z * model.scale.z
      );

      // 影を追加
      model.traverse((object: any) => {
        if (object.isMesh) object.castShadow = true;
      });

      // シーンに追加
      scene.add(model);

      // 物理演算用のオブジェクト生成
      const bodyDesc = RAPIER.RigidBodyDesc.fixed();
      if (transition) bodyDesc.setTranslation(t.x, t.y, t.z);
      const rigidBody = world.createRigidBody(bodyDesc);
      const colliderType = RAPIER.ColliderDesc.cuboid(
        model.scale.x / 2,
        model.scale.y / 2,
        model.scale.z / 2
      );
      world.createCollider(colliderType, rigidBody);

      resolve({
        rigid: rigidBody,
        mesh: model,
      });
    });
  });
}
