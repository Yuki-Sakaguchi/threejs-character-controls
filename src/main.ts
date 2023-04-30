import "./style.css";

import scene from "./feature/Scene";
import renderer from "./feature/Renderer";
import camera from "./feature/Camera";
import { initGui } from "./feature/Gui";
import cube from "./feature/shapes/Cube";

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

function resize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function main() {
  window.addEventListener("resize", resize);

  initGui();
  scene.add(cube);

  resize();
  animate();
}

main();
