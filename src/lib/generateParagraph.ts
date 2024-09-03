import { sentenceList } from "./sentenceList";

export const generateParagraph = (level: 'easy' | 'medium' | 'hard') => {
    const sentences = sentenceList[level];
    let paragraph = '';
     
    const shuffledSentences = shuffleArray(sentences.slice());   
    for (let i = 0; i < shuffledSentences.length; i++) {  
        // i want to start every sentence with a capital letter
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



