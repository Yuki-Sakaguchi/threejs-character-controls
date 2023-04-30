import {
  MeshStandardMaterial,
  PlaneGeometry,
  TextureLoader,
  Texture,
  RepeatWrapping,
  Mesh,
  Scene,
} from "three";
import * as RAPIER from "@dimforge/rapier3d";

type Params = { x: number; y: number; z: number };

type Props = {
  scene: Scene;
  world: RAPIER.World;
  nsubdivs?: number;
  scale?: { x?: number; y?: number; z?: number };
  transition?: { x?: number; y?: number; z?: number };
};

function wrapAndRepeatTexture(map: Texture) {
  map.wrapS = map.wrapT = RepeatWrapping;
  map.repeat.x = map.repeat.y = 10;
}

/**
 * 物理演算を考慮した床を生成
 * @param
 * @returns
 */
export function createBroundFloor({
  scene,
  world,
  nsubdivs = 20,
  scale,
  transition,
}: Props) {
  // 値がない時の初期化、値をマージしているのでx,y,zのどれかだけの追加もできる
  const s: Params = { x: 0.5, y: 0.5, z: 0.5, ...scale };
  const t: Params = { x: 0.0, y: 0.0, z: 0.0, ...transition };

  const textureLoader = new TextureLoader();
  const geometry = new PlaneGeometry(s.x, s.z, nsubdivs, nsubdivs);
  const material = new MeshStandardMaterial({
    map: textureLoader.load("./assets/textures/sand/Sand 002_COLOR.jpg"),
    normalMap: textureLoader.load("./assets/textures/sand/Sand 002_NRM.jpg"),
    displacementMap: textureLoader.load(
      "./assets/textures/sand/Sand 002_DISP.jpg"
    ),
    displacementScale: 0.1,
    aoMap: textureLoader.load("./assets/textures/sand/Sand 002_OCC.jpg"),
  });

  wrapAndRepeatTexture(material.map!);
  wrapAndRepeatTexture(material.normalMap!);
  wrapAndRepeatTexture(material.displacementMap!);
  wrapAndRepeatTexture(material.aoMap!);

  // メッシュ作成
  const floor = new Mesh(geometry, material);
  floor.receiveShadow = true;
  floor.castShadow = true;
  floor.rotation.x = -Math.PI / 2;
  floor.position.x = t.x;
  floor.position.z = t.z;
  scene.add(floor);

  // 頂点をランダムで高さを変える
  const vertices = (floor as any).geometry.attributes.position.array;
  const dx = s.x / nsubdivs;
  const dy = s.z / nsubdivs;
  const columsRows = new Map();
  for (let i = 0; i < vertices.length; i += 3) {
    let row = Math.floor(Math.abs((vertices as any)[i] + s.x / 2) / dx);
    let column = Math.floor(Math.abs((vertices as any)[i + 1] - s.z / 2) / dy);
    const randomHeight = Math.random();
    (vertices as any)[i + 2] = s.y * randomHeight + t.y;
    if (!columsRows.get(column)) {
      columsRows.set(column, new Map());
    }
    columsRows.get(column).set(row, randomHeight);
  }
  floor.geometry.computeVertexNormals();

  let heights: number[] = [];
  for (let i = 0; i <= nsubdivs; ++i) {
    for (let j = 0; j <= nsubdivs; ++j) {
      heights.push(columsRows.get(j).get(i));
    }
  }

  // 物理演算用のオブジェクト生成
  let groundBodyDesc = RAPIER.RigidBodyDesc.fixed();
  if (transition) groundBodyDesc.setTranslation(t.x, t.y, t.z);
  let groundBody = world.createRigidBody(groundBodyDesc);
  let groundCollider = RAPIER.ColliderDesc.heightfield(
    nsubdivs,
    nsubdivs,
    new Float32Array(heights),
    new RAPIER.Vector3(s.x, s.y, s.z)
  );
  world.createCollider(groundCollider, groundBody);

  return { rigid: groundBody, mesh: floor };
}
