export class Helpers {

  static sleep(
    ms: number
  ): Promise<void> {

    return new Promise(
      resolve =>
        setTimeout(
          resolve,
          ms
        )
    );
  }

  static randomNumber(
    min: number,
    max: number
  ): number {

    return (
      Math.floor(
        Math.random() *
          (max - min + 1)
      ) + min
    );
  }

  static formatDate(
    date: Date
  ): string {

    return date.toISOString();
  }
}