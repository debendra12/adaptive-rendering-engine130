export interface CacheEntry<T> {
  value: T;
  timestamp: number;
}

export class CacheManager<T> {
  private cache = new Map<string, CacheEntry<T>>();

  set(key: string, value: T): void {
    this.cache.set(key, {
      value,
      timestamp: Date.now()
    });
  }

  get(key: string): T | null {
    const item = this.cache.get(key);

    if (!item) {
      return null;
    }

    return item.value;
  }

  remove(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }
}