import { sentenceList } from "./sentenceList";

export const generateParagraph = (level: 'easy' | 'medium' | 'hard') => {
    const sentences = sentenceList[level];
    let paragraph = '';
     
    const shuffledSentences = shuffleArray(sentences.slice());   
    for (let i = 0; i < shuffledSentences.length; i++) { 
        paragraph += `${shuffledSentences[i]} `;
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



