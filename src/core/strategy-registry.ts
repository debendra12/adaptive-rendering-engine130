import {
  RenderingStrategy,
  IRenderer
} from "./types";

export class StrategyRegistry {

  private strategies:
    Map<RenderingStrategy, IRenderer>;

  constructor() {
    this.strategies = new Map();
  }

  register(
    strategy: RenderingStrategy,
    renderer: IRenderer
  ): void {
    this.strategies.set(
      strategy,
      renderer
    );
  }

  get(
    strategy: RenderingStrategy
  ): IRenderer {

    const renderer =
      this.strategies.get(strategy);

    if (!renderer) {
      throw new Error(
        `Renderer not found: ${strategy}`
      );
    }

    return renderer;
  }

  has(
    strategy: RenderingStrategy
  ): boolean {
    return this.strategies.has(strategy);
  }

  list(): RenderingStrategy[] {
    return Array.from(
      this.strategies.keys()
    );
  }
}