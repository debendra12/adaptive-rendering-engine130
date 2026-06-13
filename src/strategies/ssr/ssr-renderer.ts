import {
  IRenderer,
  RequestContext,
  RenderResult,
  RenderingStrategy
} from "../../core/types";

export class SSRRenderer implements IRenderer {

  async render(
    context: RequestContext
  ): Promise<RenderResult> {

    const html = `
      <html>
      <body>
        <h1>Server Side Rendering</h1>
        <p>Rendered at request time</p>
      </body>
      </html>
    `;

    return {
      strategy: RenderingStrategy.SSR,
      html,
      renderTime: 0
    };
  }
}