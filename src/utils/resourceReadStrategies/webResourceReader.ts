import axios from 'axios';
import { ResourceReaderStrategy } from './resourceReaderStrategy';

export class WebResourceReader implements ResourceReaderStrategy {
  async readResource(url: string): Promise<string> {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
        throw new Error(`Error reading resource from URL: ${(e as Error).message}`);
    }
  }
}
