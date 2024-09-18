import { useCallback, useEffect, useRef } from "react";
import GraphemeSplitter from "grapheme-splitter";



const splitter = new GraphemeSplitter();

interface TypingParagraphProps {
  lines: string[];
  inputValue: string;
  currentCharIndex: number;
  inputRef: React.RefObject<any>;
  currentLineIndex: number; 
  language: "english" | "hindi";
}

function TypingParagraph({ lines, inputValue, currentCharIndex, inputRef, currentLineIndex,language }: TypingParagraphProps) {

  const containerRef = useRef<HTMLDivElement>(null); // Ref for the container to handle scroll  
  // useCallback to handle smooth scrolling to the current line
  const scrollToCurrentLine = useCallback(() => {
    if (containerRef.current && lines[currentLineIndex]) {
      const lineElement = containerRef.current.children[
        currentLineIndex
      ] as HTMLElement;
      if (lineElement) {
        containerRef.current.scrollTo({
          top: lineElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [currentLineIndex, lines]);

  // Disable manual scrolling with mouse wheel or touch
  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const disableScroll = (e: Event) => e.preventDefault();

      // Prevent scrolling manually via mouse wheel
      container.addEventListener("wheel", disableScroll, { passive: false });

      // Prevent scrolling manually via touch gestures
      container.addEventListener("touchmove", disableScroll, { passive: false });

      // Cleanup event listeners
      return () => {
        container.removeEventListener("wheel", disableScroll);
        container.removeEventListener("touchmove", disableScroll);
      };
    }
  }, []);

  useEffect(() => {
    scrollToCurrentLine(); // Auto-scroll only when the user types
  }, [scrollToCurrentLine, inputValue]);

 

  return (
    <div
      ref={containerRef}
      className={`rounded-lg pt-2 bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner max-h-96 overflow-y-auto scrollbar-hide`}
      onClick={() => inputRef.current?.focus()}>
      {lines.map((line, i) => {

        const graphemes = language=='hindi' ? splitter.splitGraphemes(line) : line.split("");

        return (
          <div key={i} className="flex flex-row justify-center items-center">
            {graphemes.map((char, index) => {
             
             let style = "text-gray-600 py-2 px-1 justify";
             if (i === currentLineIndex) {
               if (language === 'hindi') {
                 // Handle Hindi typing more carefully with grapheme comparison
                 const typedGraphemes = splitter.splitGraphemes(inputValue);  

                 if (index < currentCharIndex &&  index < typedGraphemes.length) {
                   // Compare the entire grapheme
                   style = typedGraphemes[index] === char 
                     ? "bg-green-200 text-green-800 rounded px-1" 
                     : "bg-red-200 text-red-800 rounded line-through px-1";
                 } else if (index === currentCharIndex) {
                   style = "text-blue-500 underline animate-blink px-1";
                 }
               } else {
                 // Keep the English logic untouched
                 if (index < currentCharIndex) {
                   style = inputValue[index] === char 
                     ? "bg-green-200 text-green-800 rounded px-1" 
                     : "bg-red-200 text-red-800 rounded line-through px-1";
                 } else if (index === currentCharIndex) {
                   style = "text-blue-500 underline animate-blink px-1";
                 }
                }
              }

              return (
                <span key={index}
                  className={`${style} inline-block text-3xl select-none`}
                  style={{
                    userSelect: 'none',
                    borderBottomWidth: '1px',
                    scrollbarWidth: 'none',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </div>
        )

      })}
    </div>
  );
}

export default TypingParagraph;
