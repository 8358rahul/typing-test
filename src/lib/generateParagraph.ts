import { sentenceList } from "./sentenceList";

// export const generateParagraph = (level: 'easy' | 'medium' | 'hard') => {
//     const sentences = sentenceList[level];
//     let paragraph = ''; 
    
//     const shuffledSentences = shuffleArray(sentences.slice());  
//     for (let i = 0; i < shuffledSentences.length; i++) {     
//         const sentence = shuffledSentences[i].charAt(0).toUpperCase() + shuffledSentences[i].slice(1);
//         paragraph += sentence + ' '; 
//     } 
     
//     return paragraph.trim();
// }; 
 
// // Helper function to shuffle an array
// const shuffleArray = (array: string[]) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// };


// export const generateLine = (paragraph: string) => {
//     const line = paragraph.split(' ') 
//     let lines = []
//     let words = []
//     let count = 0 
    

//     for (let i = 0; i < line.length; i++) {
//         if (count == 6) {
//             // also add one space after each line
//             lines.push(words.join(' ') + ' ')
//             words = []
//             count = 0 
//         }
//         words.push(line[i])
//         count++
//     }
//     return lines // return array of lines
// };
 

export const generateParagraph = (level: 'easy' | 'medium' | 'hard') => {
    const sentences = sentenceList[level];
    let paragraph = '';

    const shuffledSentences = shuffleArray(sentences.slice());
    
    // Generate a paragraph using shuffled sentences
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

// Updated generateLine function
export const generateLine = (paragraph: string) => {
    const words = paragraph.split(' ');
    let lines: string[] = [];
    let currentLineWords: string[] = [];
    let count = 0;

    // Iterate over the words to form lines
    for (let i = 0; i < words.length; i++) {
        currentLineWords.push(words[i]);
        count++;

        // Push current line when we reach 6 words
        if (count === 6) {
            lines.push(currentLineWords.join(' ') + ' ');
            currentLineWords = []; // Reset for the next line
            count = 0;
        }
    }

    // Add remaining words as the last line if they don't fill up to 6
    if (currentLineWords.length > 0) {
        lines.push(currentLineWords.join(' ') + ' ');
    }

    return lines; // Return array of lines
};

