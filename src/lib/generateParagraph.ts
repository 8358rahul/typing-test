import { sentenceList } from "./sentenceList";

export const generateParagraph = (level: 'easy' | 'medium' | 'hard') => {
    const sentences = sentenceList[level];
    let paragraph = ''; 
    
    const shuffledSentences = shuffleArray(sentences.slice());  
    for (let i = 0; i < shuffledSentences.length; i++) {     
        const sentence = shuffledSentences[i].charAt(0).toUpperCase() + shuffledSentences[i].slice(1);
        paragraph += sentence + ' '; 
    } 
     
    return paragraph.trim();
}; 
 
// Helper function to shuffle an array
const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};


export const generateLine = (paragraph: string) => {
    const line = paragraph.split(' ') 
    let lines = []
    let words = []
    let count = 0 
    

    for (let i = 0; i < line.length; i++) {
        if (count == 6) {
            // also add one space after each line
            lines.push(words.join(' ') + ' ')
            words = []
            count = 0 
        }
        words.push(line[i])
        count++
    }
    return lines // return array of lines
};
 


