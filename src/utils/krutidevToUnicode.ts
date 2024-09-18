// utils/krutidevToUnicode.ts
export const convertKrutidevToUnicode = (krutidevInput: string): string => {
    // Simplified example of Krutidev to Unicode mapping
    
    const mapping = {
      'd': 'क', // Krutidev 'd' to Unicode 'क'
      'k': 'ा', // Krutidev 'k' to Unicode 'ा'
      // Add more mappings as per the full Krutidev to Unicode table
    };
  
    let unicodeOutput = '';
    for (const char of krutidevInput) {
      unicodeOutput += mapping[char] || char; // Map Krutidev to Unicode or retain the original character
    }
  
    return unicodeOutput;
  };
  