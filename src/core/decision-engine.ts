import {
  RenderingStrategy,
  RequestContext
} from "./types";

export class DecisionEngine {

  public decide(
    context: RequestContext
  ): RenderingStrategy {

    // H1
    if (
      context.contentVolatility < 20 &&
      context.cacheAvailable
    ) {
      return RenderingStrategy.SSG;
    }

    // H2
    if (
      context.contentVolatility > 80
    ) {
      return RenderingStrategy.SSR;
    }

    // H3
    if (
      context.networkSpeed < 20 &&
      context.contentVolatility > 50
    ) {
      return RenderingStrategy.STREAMING_SSR;
    }

    // H4
    if (
      context.contentVolatility >= 20 &&
      context.contentVolatility <= 80
    ) {
      return RenderingStrategy.ISR;
    }

    // Low-end device fallback
    if (
      context.deviceScore < 30
    ) {
      return RenderingStrategy.CSR;
    }

    return RenderingStrategy.EDGE_ISR;
  }

  explainDecision(
    context: RequestContext
  ): string {

    const strategy = this.decide(context);

    switch (strategy) {
      case RenderingStrategy.SSG:
        return "Static content with cache available.";

      case RenderingStrategy.SSR:
        return "Highly dynamic content.";

      case RenderingStrategy.STREAMING_SSR:
        return "Slow network with dynamic content.";

      case RenderingStrategy.ISR:
        return "Moderately dynamic content.";

      case RenderingStrategy.CSR:
        return "Low-end device optimization.";

      case RenderingStrategy.EDGE_ISR:
        return "Default edge rendering.";

      default:
        return "Unknown decision.";
    }
  }
}