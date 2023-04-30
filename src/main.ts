import "./style.css";

import { AnimationClip, AnimationMixer, AnimationAction } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import scene from "./feature/Scene";
import renderer from "./feature/Renderer";
import camera, { controls } from "./feature/Camera";
import { anbientLight, directionalLight } from "./feature/Light";
import loopMachine from "./feature/LoopMachine";
import { createBroundFloor } from "./feature/shapes/GroundFloor";
import { initResize } from "./utils/Resize";
import { CharacterControls } from "./utils/CharacterControls";

function main() {
  initResize();

  scene.add(anbientLight);
  scene.add(directionalLight);

  const floor = createBroundFloor();
  scene.add(floor);

  let characterControls: CharacterControls;
  new GLTFLoader().load("../assets/models/Soldier.glb", (gltf) => {
    const model = gltf.scene;
    model.traverse((object: any) => {
      if (object.isMesh) object.castShadow = true;
    });
    scene.add(model);

    // アニメーション情報を取得し、animationsMapに格納
    const gltfAnimations: AnimationClip[] = gltf.animations;
    const mixer = new AnimationMixer(model);
    const animationsMap: Map<string, AnimationAction> = new Map();
    gltfAnimations
      .filter((animation) => animation.name != "TPose")
      .forEach((animationClip: AnimationClip) => {
        animationsMap.set(animationClip.name, mixer.clipAction(animationClip));
      });
    characterControls = new CharacterControls(
      model,
      mixer,
      animationsMap,
      controls,
      camera,
      "Idle"
    );
  });

  const keysPressed = {};
  document.addEventListener("keydown", (event) => {
    if (event.shiftKey && characterControls) {
      characterControls.switchRunToggle();
    } else {
      (keysPressed as any)[event.key.toLocaleLowerCase()] = true;
    }
  });
  document.addEventListener("keyup", (event) => {
    (keysPressed as any)[event.key.toLocaleLowerCase()] = false;
  });

  loopMachine.add((clock) => {
    let mixerUpdateDelta = clock.getDelta();
    if (characterControls) {
      characterControls.update(mixerUpdateDelta, keysPressed);
    }
    controls.update();
    renderer.render(scene, camera);
  });

  loopMachine.start();
}

main();
