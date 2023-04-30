import { GUI } from "dat.gui";
import cube from "./shapes/Cube";

export const params = {
  color: 0x00ff00,
  scale: 1.0,
};

const gui = new GUI();

export function initGui() {
  gui
    .addColor(params, "color")
    .onChange(() => cube.material.color.set(params.color));

  gui.add(params, "scale", 1.0, 4.0).onChange(() => {
    cube.scale.set(params.scale, params.scale, params.scale);
  });
}

export default gui;
