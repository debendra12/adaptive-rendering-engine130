import { RequestContext } from "./types";

export class ContextAnalyzer {
  analyze(request: any): RequestContext {
    return {
      pageType: request.pageType || "static",
      networkSpeed: request.networkSpeed || 50,
      deviceScore: request.deviceScore || 70,
      contentVolatility: request.contentVolatility || 20,
      cacheAvailable: request.cacheAvailable ?? true
    };
  }

  isSlowNetwork(speed: number): boolean {
    return speed < 20;
  }

  isLowEndDevice(score: number): boolean {
    return score < 40;
  }

  isHighlyDynamic(volatility: number): boolean {
    return volatility > 80;
  }

  generateSummary(context: RequestContext): string {
    return `
Page Type: ${context.pageType}
Network Speed: ${context.networkSpeed}
Device Score: ${context.deviceScore}
Content Volatility: ${context.contentVolatility}
Cache Available: ${context.cacheAvailable}
`;
  }
}