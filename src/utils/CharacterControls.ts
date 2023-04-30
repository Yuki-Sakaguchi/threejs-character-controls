import {
  AnimationAction,
  AnimationMixer,
  Camera,
  Group,
  Quaternion,
  Vector3,
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { DIRECTIONS } from "./KeyCode";

export class CharacterControls {
  model: Group;
  mixer: AnimationMixer;
  animationsMap: Map<string, AnimationAction> = new Map();
  orbitControl: OrbitControls;
  camera: Camera;

  // state
  toggleRun: boolean = true;
  currentAction: string;

  // temporary data
  walkDirection = new Vector3();
  rotateAngle = new Vector3(0, 1, 0);
  rotateQuartenion: Quaternion = new Quaternion();
  cameraTarget = new Vector3();

  // constants
  fadeDuration: number = 0.2;
  runVelocity = 5;
  walkVelocity = 2;

  constructor(
    model: Group,
    mixer: AnimationMixer,
    animationsMap: Map<string, AnimationAction>,
    orbitControl: OrbitControls,
    camera: Camera,
    currentAction: string
  ) {
    this.model = model;
    this.mixer = mixer;
    this.animationsMap = animationsMap;
    this.orbitControl = orbitControl;
    this.camera = camera;
    this.currentAction = currentAction;
    this.animationsMap.forEach((value, key) => {
      if (key === currentAction) {
        value.play();
      }
    });
  }

  switchRunToggle() {
    this.toggleRun = !this.toggleRun;
  }

  update(delta: number, keypressed: any) {
    const directionPressed = DIRECTIONS.some((key) => keypressed[key] === true);
    let play = "";
    if (directionPressed && this.toggleRun) {
      play = "Run";
    } else if (directionPressed) {
      play = "Walk";
    } else {
      play = "Idle";
    }

    if (this.currentAction !== play) {
      const toPlay = this.animationsMap.get(play);
      const current = this.animationsMap.get(this.currentAction);

      current?.fadeOut(this.fadeDuration);
      toPlay?.reset().fadeIn(this.fadeDuration).play();

      this.currentAction = play;
    }

    this.mixer.update(delta);
  }
}
