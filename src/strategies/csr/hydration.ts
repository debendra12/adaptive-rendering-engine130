export class HydrationManager {

  hydrate(
    componentId: string
  ): string {

    return `Hydrated ${componentId}`;
  }

  dehydrate(
    componentId: string
  ): string {

    return `Dehydrated ${componentId}`;
  }
}