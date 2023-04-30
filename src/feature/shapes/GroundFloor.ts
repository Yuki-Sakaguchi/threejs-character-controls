import {
  MeshStandardMaterial,
  PlaneGeometry,
  TextureLoader,
  Texture,
  RepeatWrapping,
  // MeshPhongMaterial,
  Mesh,
} from "three";

function wrapAndRepeatTexture(map: Texture) {
  map.wrapS = map.wrapT = RepeatWrapping;
  map.repeat.x = map.repeat.y = 10;
}

export function createBroundFloor() {
  const textureLoader = new TextureLoader();

  // const placeholder = textureLoader.load(
  //   "./assets/textures/placeholder/placeholder.png"
  // );
  const sandBaseColor = textureLoader.load(
    "./assets/textures/sand/Sand 002_COLOR.jpg"
  );
  const sandNormalMap = textureLoader.load(
    "./assets/textures/sand/Sand 002_NRM.jpg"
  );
  const sandHeightMap = textureLoader.load(
    "./assets/textures/sand/Sand 002_DISP.jpg"
  );
  const sandAmbientOcclusion = textureLoader.load(
    "./assets/textures/sand/Sand 002_OCC.jpg"
  );

  const width = 80;
  const height = 80;

  const geometry = new PlaneGeometry(width, height, 512, 512);
  const material = new MeshStandardMaterial({
    map: sandBaseColor,
    normalMap: sandNormalMap,
    displacementMap: sandHeightMap,
    displacementScale: 0.1,
    aoMap: sandAmbientOcclusion,
  });

  wrapAndRepeatTexture(material.map!);
  wrapAndRepeatTexture(material.normalMap!);
  wrapAndRepeatTexture(material.displacementMap!);
  wrapAndRepeatTexture(material.aoMap!);

  // const material = MeshPhongMaterial({ map: placeholder});

  const floor = new Mesh(geometry, material);
  floor.receiveShadow = true;
  floor.rotation.x = -Math.PI / 2;

  return floor;
}
