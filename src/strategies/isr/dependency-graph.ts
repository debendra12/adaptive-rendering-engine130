export class DependencyGraph {

  private graph =
    new Map<string, string[]>();

  addDependency(
    page: string,
    dependency: string
  ): void {

    const deps =
      this.graph.get(page) || [];

    deps.push(dependency);

    this.graph.set(page, deps);
  }

  getDependencies(
    page: string
  ): string[] {

    return this.graph.get(page) || [];
  }
}