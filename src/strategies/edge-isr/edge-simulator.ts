import {
  IRenderer,
  RequestContext,
  RenderResult,
  RenderingStrategy
} from "../../core/types";

export class EdgeSimulator implements IRenderer {

  async render(
    context: RequestContext
  ): Promise<RenderResult> {

    const html = `
      <html>
      <body>
        <h1>Edge ISR Rendering</h1>
        <p>Served from nearest edge node</p>
      </body>
      </html>
    `;

    return {
      strategy: RenderingStrategy.EDGE_ISR,
      html,
      renderTime: 0
    };
  }
}