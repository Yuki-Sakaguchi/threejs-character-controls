import { BoxGeometry, MeshPhongMaterial, Mesh, Scene } from "three";
import * as RAPIER from "@dimforge/rapier3d";

type Params = { x: number; y: number; z: number };

type Props = {
  scene: Scene;
  world: RAPIER.World;
  scale?: { x?: number; y?: number; z?: number };
  transition?: { x?: number; y?: number; z?: number };
};

/**
 * 物理演算を適応した箱を生成
 * @param
 * @returns
 */
export function createCube({ scene, world, scale, transition }: Props) {
  // 値がない時の初期化、値をマージしているのでx,y,zのどれかだけの追加もできる
  const s: Params = { x: 0.5, y: 0.5, z: 0.5, ...scale };
  const t: Params = { x: 0.0, y: 0.0, z: 0.0, ...transition };

  // メッシュ生成
  const mesh = new Mesh(
    new BoxGeometry(s.x * 2, s.y * 2, s.z * 2),
    new MeshPhongMaterial({ color: "red" })
  );
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  scene.add(mesh);

  // 物理演算用のオブジェクト生成
  const bodyType = RAPIER.RigidBodyDesc.dynamic();
  if (transition) bodyType.setTranslation(t.x, t.y, t.z);
  const rigidBody = world.createRigidBody(bodyType);
  const colliderType = RAPIER.ColliderDesc.cuboid(s.x, s.y, s.z);
  world.createCollider(colliderType, rigidBody);

  return { rigid: rigidBody, mesh };
}
