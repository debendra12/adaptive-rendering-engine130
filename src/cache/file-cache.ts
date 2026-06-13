import fs from "fs";
import path from "path";

export class FileCache {
  private cacheDirectory: string;

  constructor(
    cacheDirectory = "./cache-storage"
  ) {
    this.cacheDirectory = cacheDirectory;

    if (!fs.existsSync(cacheDirectory)) {
      fs.mkdirSync(cacheDirectory, {
        recursive: true
      });
    }
  }

  save(
    key: string,
    content: string
  ): void {
    const filePath = path.join(
      this.cacheDirectory,
      `${key}.html`
    );

    fs.writeFileSync(filePath, content);
  }

  load(
    key: string
  ): string | null {
    const filePath = path.join(
      this.cacheDirectory,
      `${key}.html`
    );

    if (!fs.existsSync(filePath)) {
      return null;
    }

    return fs.readFileSync(
      filePath,
      "utf-8"
    );
  }

  delete(key: string): void {
    const filePath = path.join(
      this.cacheDirectory,
      `${key}.html`
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
}