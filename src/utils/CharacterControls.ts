import { AnimationAction, AnimationMixer, Camera, Group } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export class CharacterControls {
  model: Group;
  mixer: AnimationMixer;
  animationsMap: Map<string, AnimationAction> = new Map();
  orbitControl: OrbitControls;
  camera: Camera;
  toggleRun: boolean = true;
  currentAction: string;

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
    this.mixer.update(delta);
  }
}
