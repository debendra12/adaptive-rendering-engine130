export class Timing {

  private startTime = 0;

  start(): void {
    this.startTime = performance.now();
  }

  stop(): number {
    return (
      performance.now() -
      this.startTime
    );
  }
}