import { AmbientLight, DirectionalLight } from "three";

export const anbientLight = new AmbientLight(0xffffff, 0.7);

export const directionalLight = new DirectionalLight(0xffffff, 1);
directionalLight.position.set(-60, 100, -10);
directionalLight.castShadow = true;
directionalLight.shadow.camera.top = 50;
directionalLight.shadow.camera.bottom = -50;
directionalLight.shadow.camera.left = -50;
directionalLight.shadow.camera.right = 50;
directionalLight.shadow.camera.near = 0.1;
directionalLight.shadow.camera.far = 200;
directionalLight.shadow.mapSize.width = 4096;
directionalLight.shadow.mapSize.height = 4096;
