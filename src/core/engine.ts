import { ContextAnalyzer } from "./context-analyzer";
import { DecisionEngine } from "./decision-engine";
import { StrategyRegistry } from "./strategy-registry";

import {
  RequestContext,
  RenderResult
} from "./types";

export class AdaptiveRenderingEngine {

  private analyzer: ContextAnalyzer;
  private decisionEngine: DecisionEngine;
  private registry: StrategyRegistry;

  constructor(
    registry: StrategyRegistry
  ) {
    this.analyzer =
      new ContextAnalyzer();

    this.decisionEngine =
      new DecisionEngine();

    this.registry =
      registry;
  }

  async render(
    request: any
  ): Promise<RenderResult> {

    const context: RequestContext =
      this.analyzer.analyze(request);

    const strategy =
      this.decisionEngine.decide(
        context
      );

    const renderer =
      this.registry.get(strategy);

    const start =
      Date.now();

    const result =
      await renderer.render(
        context
      );

    const end =
      Date.now();

    return {
      ...result,
      renderTime: end - start
    };
  }

  inspect(
    request: any
  ) {
    const context =
      this.analyzer.analyze(
        request
      );

    return {
      context,
      strategy:
        this.decisionEngine.decide(
          context
        ),
      explanation:
        this.decisionEngine.explainDecision(
          context
        )
    };
  }
}