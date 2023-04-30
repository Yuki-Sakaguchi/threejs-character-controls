import "./style.css";

import { Group, Mesh, Quaternion } from "three";
import * as RAPIER from "@dimforge/rapier3d";

import scene from "./feature/Scene";
import renderer from "./feature/Renderer";
import camera, { orbitControls } from "./feature/Camera";
import { anbientLight, directionalLight } from "./feature/Light";
import { createBroundFloor } from "./feature/shapes/GroundFloor";
import { createCube } from "./feature/shapes/Cube";
import { createCactus } from "./feature/shapes/Cactus";
import { Player } from "./feature/shapes/Player";

import loopMachine from "./utils/LoopMachine";
import { initResize } from "./utils/Resize";

// 物理演算の処理を読み込みが終わったらメイン処理を実行する
import("@dimforge/rapier3d").then(main);

/**
 * メイン処理
 */
async function main() {
  // ワールドの物理演算の設定
  const gravity = { x: 0.0, y: -9.81, z: 0.0 };
  const world = new RAPIER.World(gravity);

  // 物理演算とメッシュをペアにして保存する箱を生成
  const bodys: { rigid: RAPIER.RigidBody; mesh: Mesh | Group }[] = [];

  initResize();

  // ライトを追加
  scene.add(anbientLight);
  scene.add(directionalLight);

  // 床を生成
  const scale = { x: 70.0, y: 2.0, z: 70.0 };
  createBroundFloor({ scene, world, scale });

  // 箱を生成
  const cube = createCube({ scene, world, transition: { x: 5, y: 8 } });
  bodys.push(cube);

  const cactus = await createCactus({
    scene,
    world,
    scale: { x: 5, y: 5, z: 5 },
    transition: { x: -4, y: 2, z: -5 },
  });
  bodys.push(cactus);

  // プレイヤーを生成
  const player = new Player(scene, world, camera, orbitControls);

  // アニメーション
  loopMachine.add((clock) => {
    // キャラクターの更新
    if (player.isReady) {
      let mixerUpdateDelta = clock.getDelta();
      player?.controls?.update(mixerUpdateDelta, keysPressed);
    }

    world.step();

    // 物理演算とメッシュを同期
    bodys.forEach((body) => {
      let position = body.rigid.translation();
      let rotation = body.rigid.rotation();

      body.mesh.position.x = position.x;
      body.mesh.position.y = position.y;
      body.mesh.position.z = position.z;

      body.mesh.setRotationFromQuaternion(
        new Quaternion(rotation.x, rotation.y, rotation.z, rotation.w)
      );
    });

    // カメラ更新
    orbitControls.update();

    // 描画
    renderer.render(scene, camera);
  });

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

  loopMachine.start();
}
