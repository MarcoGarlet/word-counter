interface AnalysisResult {
    text: string;
    setText(text: string): void;
    textToWords(): Array<string>;
    countLettersInText(): number;
    countLetterInText(letter:string): number;
    repeatedWords(minFrequency: number): { word: string; count: number }[]
  }
  
export class AnalyzerText implements AnalysisResult {
    text: string;

    private constructor(text: string){
      this.text = text
    }
    setText (text:string): void{
      this.text = text;
    }
    textToWords (): Array<string>{
      return this.text.match(/\b\w+\b/g) || [];
    } 
    countLettersInText (): number {
      return this.text.replace(/[^a-zA-Z]/g, '').length;
    }
    countLetterInText (letter: string): number {
      return this.text.split(letter).length -1;
    }

    repeatedWords(minFrequency:number): { word: string; count: number }[]{
      const words = this.textToWords();
      const wordFrequency: { [key: string]: number } = {};
  
      words.forEach(word => {
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
      });

      const repeatedWords = Object.keys(wordFrequency).filter(
        word => wordFrequency[word] > minFrequency
      ).map(word => ({ word, count: wordFrequency[word] }));

      return repeatedWords;
    }

    public static analyzeText(text:string): AnalyzerText{
      return new AnalyzerText(text);
    }

  };
  