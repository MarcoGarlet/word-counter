import { Request, Response } from 'express';
import { ResourceReaderStrategy } from '../utils/resourceReadStrategies/resourceReaderStrategy';
import { LocalResourceReader } from '../utils/resourceReadStrategies/localResourceReader';
import { WebResourceReader } from '../utils/resourceReadStrategies/webResourceReader';
import { AnalyzerText } from '../utils/textAnalyzer';

function isValidUrl(input: string): boolean {
    try {
        new URL(input);
        return true;
    } catch (_) {
        return false;
    }
}

class ResourceController {
  async analyzeResource(req: Request, res: Response) {
    const { path } = req.body;

    try {
      let strategy: ResourceReaderStrategy;
      
      if (isValidUrl(path)) {
        strategy = new WebResourceReader();
      } else {
        strategy = new LocalResourceReader();
      }

      const text = await strategy.readResource(path);
      const analyzerText = AnalyzerText.analyzeText(text);
      const analysis = {
        totalWords: analyzerText.textToWords().length,
        letterCount: analyzerText.countLettersInText(),
        spaceCount: analyzerText.countLetterInText(' '),
        repeatedWords: analyzerText.repeatedWords(10),
      };

      res.json(analysis);
    } catch (e) {
        res.status(500).json({ error: (e as Error).message });
    }
  }
}

const resourceController = new ResourceController();
export default resourceController;
