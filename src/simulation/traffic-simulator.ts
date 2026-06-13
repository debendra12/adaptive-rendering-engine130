export interface TrafficResult {
  requestId: number;
  responseTime: number;
}

export class TrafficSimulator {

  async simulateRequests(
    count: number
  ): Promise<TrafficResult[]> {

    const results:
      TrafficResult[] = [];

    for (
      let i = 1;
      i <= count;
      i++
    ) {

      const responseTime =
        Math.floor(
          Math.random() * 500
        ) + 50;

      results.push({
        requestId: i,
        responseTime
      });
    }

    return results;
  }

  averageResponseTime(
    results: TrafficResult[]
  ): number {

    const total =
      results.reduce(
        (sum, item) =>
          sum + item.responseTime,
        0
      );

    return total / results.length;
  }
}