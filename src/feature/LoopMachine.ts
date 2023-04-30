import { Clock } from "three";

type Callback = (clock: Clock) => void;

/**
 * 関数を実行し続けるループマシン
 */
export class LoopMachine {
  isRun: boolean = false;
  callbacks: Callback[] = [];
  clock: Clock = new Clock();

  add(callback: Callback) {
    const index = this.callbacks.indexOf(callback);
    if (index > -1) return;
    this.callbacks.push(callback);
  }

  remove(callback: Callback) {
    const index = this.callbacks.indexOf(callback);
    if (index > -1) this.callbacks.splice(index, 1);
  }

  run() {
    if (!this.isRun) return;
    this.callbacks.forEach((callback: Callback) => callback(this.clock));
    window.requestAnimationFrame(this.run.bind(this));
  }

  start() {
    if (this.isRun) return;
    this.isRun = true;
    this.run();
  }

  stop() {
    this.isRun = false;
  }
}

const loopMachine = new LoopMachine();

export default loopMachine;
