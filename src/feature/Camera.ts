import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import renderer from "./Renderer";

const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

export const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

export default camera;
