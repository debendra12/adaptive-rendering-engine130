import {
  IRenderer,
  RequestContext,
  RenderResult,
  RenderingStrategy
} from "../../core/types";

export class SSGRenderer implements IRenderer {

  async render(
    context: RequestContext
  ): Promise<RenderResult> {

    const html = `
      <html>
      <body>
        <h1>Static Site Generation</h1>
        <p>Pre-rendered content</p>
      </body>
      </html>
    `;

    return {
      strategy: RenderingStrategy.SSG,
      html,
      renderTime: 0
    };
  }
}