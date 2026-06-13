export class CacheInvalidation {

  invalidateByKey(
    cache: Map<string, any>,
    key: string
  ): void {
    cache.delete(key);
  }

  invalidateAll(
    cache: Map<string, any>
  ): void {
    cache.clear();
  }

  invalidatePattern(
    cache: Map<string, any>,
    pattern: string
  ): void {

    cache.forEach((_, key) => {
      if (key.includes(pattern)) {
        cache.delete(key);
      }
    });
  }
}