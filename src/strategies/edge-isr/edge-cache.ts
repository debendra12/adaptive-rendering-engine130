export class EdgeCache {

  private cache =
    new Map<string, string>();

  get(
    key: string
  ): string | undefined {

    return this.cache.get(key);
  }

  set(
    key: string,
    value: string
  ): void {

    this.cache.set(
      key,
      value
    );
  }

  invalidate(
    key: string
  ): void {

    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }
}