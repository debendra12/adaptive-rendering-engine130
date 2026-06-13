export enum RenderingStrategy {
  SSG = "SSG",
  SSR = "SSR",
  STREAMING_SSR = "STREAMING_SSR",
  ISR = "ISR",
  CSR = "CSR",
  EDGE_ISR = "EDGE_ISR"
}

export interface RequestContext {
  pageType: string;
  networkSpeed: number;
  deviceScore: number;
  contentVolatility: number;
  cacheAvailable: boolean;
}

export interface RenderResult {
  strategy: RenderingStrategy;
  html: string;
  renderTime: number;
}

export interface IRenderer {
  render(context: RequestContext): Promise<RenderResult>;
}

export interface DecisionRule {
  id: string;
  description: string;
  evaluate(context: RequestContext): boolean;
  strategy: RenderingStrategy;
}