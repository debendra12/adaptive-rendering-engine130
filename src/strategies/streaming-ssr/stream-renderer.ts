import {
  IRenderer,
  RequestContext,
  RenderResult,
  RenderingStrategy
} from "../../core/types";

export class StreamRenderer implements IRenderer {

  async render(
    context: RequestContext
  ): Promise<RenderResult> {

    const html = `
      <html>
      <body>
        <h1>Streaming SSR</h1>
        <div>Chunk 1 Loaded...</div>
        <div>Chunk 2 Loaded...</div>
      </body>
      </html>
    `;

    return {
      strategy: RenderingStrategy.STREAMING_SSR,
      html,
      renderTime: 0
    };
  }
}