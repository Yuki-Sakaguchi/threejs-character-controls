import "./style.css";

import scene from "./feature/Scene";
import renderer from "./feature/Renderer";
import camera from "./feature/Camera";
import { initGui } from "./feature/Gui";
import cube from "./feature/shapes/Cube";
import loopMachine from "./feature/LoopMachine";

import { initResize } from "./utils/Resize";

function main() {
  initResize();
  initGui();

  scene.add(cube);

  loopMachine.add(() => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  });

  loopMachine.start();
}

main();
