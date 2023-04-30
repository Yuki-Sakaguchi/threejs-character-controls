import "./style.css";

import scene from "./feature/Scene";
import renderer from "./feature/Renderer";
import camera, { orbitControls } from "./feature/Camera";
import { anbientLight, directionalLight } from "./feature/Light";
import { createBroundFloor } from "./feature/shapes/GroundFloor";
import { Player } from "./feature/shapes/Player";

import loopMachine from "./utils/LoopMachine";
import { initResize } from "./utils/Resize";

function main() {
  initResize();

  // ライトを追加
  scene.add(anbientLight);
  scene.add(directionalLight);

  // 床を生成
  const floor = createBroundFloor();
  scene.add(floor);

  // プレイヤーを生成
  const player = new Player(scene, camera, orbitControls);

  // キー入力を監視
  const keysPressed = {};
  document.addEventListener("keydown", (event) => {
    if (event.shiftKey && player.isReady) {
      player?.controls?.switchRunToggle();
    } else {
      (keysPressed as any)[event.key.toLocaleLowerCase()] = true;
    }
  });
  document.addEventListener("keyup", (event) => {
    (keysPressed as any)[event.key.toLocaleLowerCase()] = false;
  });

  // アニメーション
  loopMachine.add((clock) => {
    // キャラクターの更新
    if (player.isReady) {
      let mixerUpdateDelta = clock.getDelta();
      player?.controls?.update(mixerUpdateDelta, keysPressed);
    }

    // カメラ更新
    orbitControls.update();

    // 描画
    renderer.render(scene, camera);
  });

  loopMachine.start();
}

main();
