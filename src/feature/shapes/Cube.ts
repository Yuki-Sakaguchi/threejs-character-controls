import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";

export function createCube(color: string | number) {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color });
  return new Mesh(geometry, material);
}
