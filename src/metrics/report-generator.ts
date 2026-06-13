import {
  MetricRecord
} from "./metrics-collector";

export class ReportGenerator {

  generate(
    metrics: MetricRecord[]
  ): string {

    let report =
      "=== PERFORMANCE REPORT ===\n\n";

    metrics.forEach(metric => {
      report +=
        `${metric.name}: ${metric.value}\n`;
    });

    return report;
  }
}