// import { generateLine } from "@/lib/generateParagraph";
// import { useEffect, useState } from "react";

// interface TypingParagraphProps {
//     paragraph: string;
//     inputValue: string;
//     currentCharIndex: number;
//     inputRef: React.RefObject<HTMLInputElement>;
//     onLineCharCountChange?: () => void;
//     currentLineIndex?: number;
// }

// function TypingParagraph(props: TypingParagraphProps) {
//     const { paragraph, inputValue, currentCharIndex, inputRef, onLineCharCountChange } = props;
//     const [lines, setLines] = useState<string[]>([""]) 

//     useEffect(() => {
//         const res = generateLine(paragraph)
//         setLines(res) 
//     }, [paragraph])

//     useEffect(() => {
//         const currentline = lines[0]?.length || 0;  
//         if (currentline != 0) {
//             if (inputValue.length === currentline) {
//                 setLines(lines)
//                 onLineCharCountChange?.()  
//                 lines.shift() 
//             }
//         }

//     }, [lines, inputValue])

//     return (
//         <div
//             className="rounded-lg p-3 
//               bg-gradient-to-br from-gray-50 to-gray-100 font-mono shadow-inner  
//               max-h-96 overflow-hidden "
//             onClick={() => inputRef.current?.focus()} 
//         >
//             {
//                 lines.map((line, i) => {
//                     return (
//                         <div
//                             className="
//                             flex flex-row justify-center items-center ">
//                             {line.split('').map((char, index) => {
//                                 let style = 'text-gray-600 py-2 px-1  justify';
//                                 if (i === 0) {
//                                     if (index < currentCharIndex) {
//                                         style = inputValue[index] === char
//                                             ? 'bg-green-200 text-green-800 rounded px-1'
//                                             : 'bg-red-200 text-red-800 rounded font-semibold line-through px-1';
//                                     } else if (index === currentCharIndex) {
//                                         style = 'text-blue-500 font-bold px-1 underline';
//                                     }

//                                 }


//                                 return (
//                                     <span
//                                         key={index}
//                                         className={`${style} inline-block text-3xl w-5 `}
//                                         style={{ userSelect: 'none', borderBottomWidth: '1px', }}
//                                     >
//                                         {char === ' ' ? '\u00A0' : char}
//                                     </span>
//                                 );
//                             })}
//                         </div>
//                     )

//                 })
//             }  
//         </div>
//     );
// }

// export default TypingParagraph


import { generateLine } from "@/lib/generateParagraph";
import { useEffect, useState } from "react";

interface TypingParagraphProps {
    paragraph: string;
    inputValue: string;
    currentCharIndex: number;
    inputRef: React.RefObject<HTMLInputElement>;
    onLineCharCountChange?: () => void;
}

function TypingParagraph({ paragraph, inputValue, currentCharIndex, inputRef, onLineCharCountChange }: TypingParagraphProps) {
    const [lines, setLines] = useState<string[]>([""]);

    useEffect(() => {
        const res = generateLine(paragraph);
        setLines(res);
    }, [paragraph]);

    useEffect(() => {
        const currentlineLength = lines[0]?.length || 0;
        if (currentlineLength !== 0 && inputValue.length === currentlineLength) {
            onLineCharCountChange?.();
            setLines((prevLines) => prevLines.slice(1));
        }
    }, [lines, inputValue]);

    return (
        <div
            className="rounded-lg p-3 bg-gradient-to-br from-gray-50 to-gray-100 font-mono shadow-inner max-h-96 overflow-hidden" onClick={() => inputRef.current?.focus()}>
            {lines.map((line, i) => (
                <div key={i} className="flex flex-row justify-center items-center">
                    {line.split("").map((char, index) => {
                        let style = "text-gray-600 py-2 px-1 justify";
                        if (i === 0) {
                            if (index < currentCharIndex) {
                                style = inputValue[index] === char ? "bg-green-200 text-green-800 rounded px-1" : "bg-red-200 text-red-800 rounded font-semibold line-through px-1";
                            } else if (index === currentCharIndex) {
                                style = "text-blue-500 font-bold px-1 underline border-b";
                            }
                        }
                        return (
                            <span key={index}
                                className={`${style}inline-block text-2xl w-5 select-none  `} 
                            >
                                {char} 
                            </span>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default TypingParagraph;
