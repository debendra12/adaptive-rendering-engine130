export class SSGCache {

  private cache = new Map<string, string>();

  set(
    key: string,
    value: string
  ): void {
    this.cache.set(key, value);
  }

  get(
    key: string
  ): string | undefined {
    return this.cache.get(key);
  }

  has(
    key: string
  ): boolean {
    return this.cache.has(key);
  }

  clear(): void {
    this.cache.clear();
  }
}