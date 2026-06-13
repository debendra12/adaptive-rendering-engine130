import { Router } from "express";

export class AppRouter {

  private router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {

    this.router.get("/", (_, res) => {
      res.send({
        project:
          "Adaptive Rendering Engine",
        status: "Running"
      });
    });

    this.router.get(
      "/health",
      (_, res) => {
        res.send({
          status: "healthy"
        });
      }
    );

    this.router.get(
      "/metrics",
      (_, res) => {
        res.send({
          metrics:
            "Metrics endpoint"
        });
      }
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}