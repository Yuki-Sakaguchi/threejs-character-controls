import "./style.css";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import scene from "./feature/Scene";
import renderer from "./feature/Renderer";
import camera from "./feature/Camera";
import { anbientLight, directionalLight } from "./feature/Light";
import gui from "./feature/Gui";
import loopMachine from "./feature/LoopMachine";

import { createCube } from "./feature/shapes/Cube";
import { createBroundFloor } from "./feature/shapes/GroundFloor";

import { initResize } from "./utils/Resize";

function main() {
  initResize();

  scene.add(anbientLight);
  scene.add(directionalLight);

  const floor = createBroundFloor();
  scene.add(floor);

  new GLTFLoader().load("../assets/models/Soldier.glb", (gltf) => {
    const model = gltf.scene;
    model.traverse((object: any) => {
      if (object.isMesh) object.castShadow = true;
    });
    scene.add(model);
  });

  const keysPressed = {};
  document.addEventListener("keydown", (event) => {
    if (event.shiftKey) {
      // toggle
    } else {
      (keysPressed as any)[event.key.toLocaleLowerCase()] = true;
    }
  });
  document.addEventListener("keyup", (event) => {
    (keysPressed as any)[event.key.toLocaleLowerCase()] = false;
  });

  loopMachine.add(() => {
    renderer.render(scene, camera);
  });

  loopMachine.start();
}

main();
