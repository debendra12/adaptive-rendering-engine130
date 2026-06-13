import {
  IRenderer,
  RequestContext,
  RenderResult,
  RenderingStrategy
} from "../../core/types";

export class CSRHandler implements IRenderer {

  async render(
    context: RequestContext
  ): Promise<RenderResult> {

    const html = `
      <html>
      <body>
        <div id="app"></div>

        <script>
          document.getElementById("app")
          .innerHTML =
          "<h1>Client Side Rendering</h1>";
        </script>
      </body>
      </html>
    `;

    return {
      strategy: RenderingStrategy.CSR,
      html,
      renderTime: 0
    };
  }
}