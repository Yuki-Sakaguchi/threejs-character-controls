import renderer from "../feature/Renderer";
import camera from "../feature/Camera";

export function resize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

export function initResize() {
  window.addEventListener("resize", resize);
  resize();
}
