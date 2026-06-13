export interface MetricRecord {
  name: string;
  value: number;
  timestamp: number;
}

export class MetricsCollector {

  private metrics:
    MetricRecord[] = [];

  collect(
    name: string,
    value: number
  ): void {

    this.metrics.push({
      name,
      value,
      timestamp: Date.now()
    });
  }

  getMetrics(): MetricRecord[] {
    return this.metrics;
  }

  reset(): void {
    this.metrics = [];
  }
}