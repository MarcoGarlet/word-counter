import { promises as fs } from 'fs';
import { ResourceReaderStrategy } from './resourceReaderStrategy';

export class LocalResourceReader implements ResourceReaderStrategy {
  async readResource(path: string): Promise<string> {
    try {
      const data = await fs.readFile(path, 'utf-8');
      return data;
    } catch (e) {
        throw new Error(`Error reading local resource: ${(e as Error).message}`);
    }
  }
}
