export class RevalidationManager {

  private lastUpdate: number;

  constructor() {
    this.lastUpdate = Date.now();
  }

  shouldRevalidate(
    intervalSeconds: number
  ): boolean {

    const now = Date.now();

    return (
      now - this.lastUpdate >
      intervalSeconds * 1000
    );
  }

  markUpdated(): void {
    this.lastUpdate = Date.now();
  }
}