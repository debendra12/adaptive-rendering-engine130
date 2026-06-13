import {
  IRenderer,
  RequestContext,
  RenderResult,
  RenderingStrategy
} from "../../core/types";

export class ISRRenderer implements IRenderer {

  async render(
    context: RequestContext
  ): Promise<RenderResult> {

    const html = `
      <html>
      <body>
        <h1>Incremental Static Regeneration</h1>
        <p>Regenerated when required</p>
      </body>
      </html>
    `;

    return {
      strategy: RenderingStrategy.ISR,
      html,
      renderTime: 0
    };
  }
}