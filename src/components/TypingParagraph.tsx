import React, { useEffect, useRef, useState } from 'react'

interface TypingParagraphProps {
    paragraph: string;
    inputValue: string;
    currentCharIndex: number;
    inputRef: React.RefObject<HTMLInputElement>;
}
 
function TypingParagraph(props: TypingParagraphProps) {
    const { paragraph, inputValue, currentCharIndex, inputRef } = props; 
 
   
 
    return (
        <div 
        className="
        
             rounded-lg p-3 
              bg-gradient-to-br from-gray-50 to-gray-100 font-mono shadow-inner  
              max-h-96"
            onClick={() => inputRef.current?.focus()}
            style={{
                userSelect: 'none', 
                outline: 'none',  
                scrollbarWidth: 'none',
                msOverflowStyle: 'none', 
                overflowY:   'auto' ,   
            }}

        >
            {paragraph.split('').map((char, index) => {
                let style = 'text-gray-600 py-2 px-1';
                if (index < currentCharIndex) {
                    style = inputValue[index] === char
                        ? 'bg-green-200 text-green-800 rounded px-1'
                        : 'bg-red-200 text-red-800 rounded font-semibold line-through px-1';
                } else if (index === currentCharIndex) {
                    style = 'text-blue-500 font-bold px-1 underline';
                } 
 
                return (
                    <span
                        key={index}
                        className={`${style} inline-block text-3xl w-5 `}
                        style={{ userSelect: 'none', borderBottomWidth: '1px', }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                );
            })}
        </div>
    );
}

export default TypingParagraph