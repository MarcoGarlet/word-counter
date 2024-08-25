import { AnalyzerText } from '../src/utils/textAnalyzer';

describe('analyzeText', () => {
    it('should correctly count the total number of words in a text', () => {
        const emptyText = '';
        const tenWordsText = [...Array(10).keys()].map(()=>"word").reduce((word,acc=' ')=>acc+' '+word);
        const analyzerText = AnalyzerText.analyzeText(emptyText);
        expect(analyzerText.textToWords().length).toBe(0);
        analyzerText.setText(tenWordsText);
        expect(analyzerText.textToWords().length).toBe(10);
    });

    it('should correctly count the total number of letters in a text', () => {
        const emptyText = '';
        const tenWordsText = [...Array(10).keys()].map(()=>"word").reduce((word,acc=' ')=>acc+' '+word);
        const analyzerText = AnalyzerText.analyzeText(emptyText);
        expect(analyzerText.textToWords.length).toBe(0);
        analyzerText.setText(tenWordsText);
        expect(analyzerText.countLettersInText()).toBe("word".length*10)
    });

    it('should correctly count a specified character in a text', () => {
        const emptyText = '';
        const tenWordsText = [...Array(10).keys()].map(()=>"word").reduce((word,acc=' ')=>acc+' '+word);
        const space = ' '; 
        const analyzerText = AnalyzerText.analyzeText(emptyText);
        expect(analyzerText.countLetterInText(space)).toBe(0);
        analyzerText.setText(tenWordsText);
        expect(analyzerText.countLetterInText(space)).toBe(9)
    });

    it('should correctly return all words with more than 10 occurrences in a text', () => {
        const minFrequency = 10;
        const helloWorld = "hello world";
        const elevenHello = [...Array(11).keys()].map(()=>"hello").reduce((word,acc=' ')=>acc+' '+word)+" world";

        const analyzerText = AnalyzerText.analyzeText(helloWorld);

        expect(analyzerText.repeatedWords(minFrequency)).toEqual([]);
        analyzerText.setText(elevenHello);
        expect(analyzerText.repeatedWords(minFrequency)).toEqual([{ word: 'hello', count: 11 }]);
    });
});
