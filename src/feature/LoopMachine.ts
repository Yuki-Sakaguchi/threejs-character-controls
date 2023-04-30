/**
 * 関数を実行し続けるループマシン
 */
export class LoopMachine {
  isRun: boolean;
  callbacks: Function[];

  constructor() {
    this.isRun = false;
    this.callbacks = [];
  }

  add(callback: Function) {
    const index = this.callbacks.indexOf(callback);
    if (index > -1) return;
    this.callbacks.push(callback);
  }

  remove(callback: Function) {
    const index = this.callbacks.indexOf(callback);
    if (index > -1) this.callbacks.splice(index, 1);
  }

  run() {
    if (!this.isRun) return;
    this.callbacks.forEach((callback) => callback());
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
