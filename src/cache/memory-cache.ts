export class MemoryCache {

  private store =
    new Map<string, any>();

  set(
    key: string,
    value: any
  ): void {
    this.store.set(key, value);
  }

  get(
    key: string
  ): any {
    return this.store.get(key);
  }

  has(
    key: string
  ): boolean {
    return this.store.has(key);
  }

  delete(
    key: string
  ): void {
    this.store.delete(key);
  }

  clear(): void {
    this.store.clear();
  }
}