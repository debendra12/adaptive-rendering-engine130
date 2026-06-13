export class SuspenseHandler {

  private pendingComponents: string[] = [];

  add(component: string): void {
    this.pendingComponents.push(component);
  }

  resolve(): string[] {
    return this.pendingComponents;
  }

  clear(): void {
    this.pendingComponents = [];
  }
}