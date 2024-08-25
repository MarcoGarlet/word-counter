export interface ResourceReaderStrategy {
    readResource(path: string): Promise<string>;
  }
  