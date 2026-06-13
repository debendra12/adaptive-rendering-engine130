export class NetworkThrottler {

  private latency = 0;

  constructor(
    latency = 100
  ) {
    this.latency = latency;
  }

  async simulate(): Promise<void> {

    await new Promise(resolve =>
      setTimeout(
        resolve,
        this.latency
      )
    );
  }

  setLatency(
    latency: number
  ): void {
    this.latency = latency;
  }
}