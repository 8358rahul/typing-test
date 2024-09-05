// 'use client'
// import Navbar from "@/components/Navbar";
// import TypingParagraph from "@/components/TypingParagraph";
// import { generateParagraph } from "@/lib/generateParagraph";
// import { useRouter, useSearchParams } from "next/navigation";
// import React, { useState, useEffect, useRef, Suspense } from "react";



// const Wrapper = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams()
//   const time = Number(searchParams.get("selectedTime"));
//   const level = searchParams.get("selectedLevel") as "easy" | "medium" | "hard";
//   // Refs
//   const inputRef = useRef<HTMLInputElement>(null);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   // State variables
//   const [inputValue, setInputValue] = useState<string>("");
//   const [wordCount, setWordCount] = useState<string>("");
//   const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
//   const [isTestActive, setIsTestActive] = useState<boolean>(false);
//   const [showResult, setShowResult] = useState<boolean>(false);
//   const [wpm, setWpm] = useState<number>(0);
//   const [accuracy, setAccuracy] = useState<number>(100);
//   const [timer, setTimer] = useState<number>(time);
//   const [paragraph, setParagraph] = useState<string>("");
//   const [selectedLevel, setSelectedLevel] = useState<
//     "easy" | "medium" | "hard"
//   >(level);

//   // Generate a new paragraph based on the selected difficulty level
//   useEffect(() => {
//     const res = generateParagraph(selectedLevel);
//     setParagraph(res);
//     setSelectedLevel(level);
//     setIsTestActive(false);
//     setInputValue("");
//     setWordCount("");
//     setCurrentCharIndex(0);
//     clearInterval(intervalRef.current as NodeJS.Timeout);
//     setTimer(time);
//     setWpm(0);
//     setAccuracy(100);
//     setShowResult(false);
//     inputRef.current?.focus();
//   }, [selectedLevel, level, time]);

//   // Function to start the countdown timer
//   const startTimer = () => {
//     if (isTestActive) return;
//     setIsTestActive(true);
//     intervalRef.current = setInterval(() => {
//       setTimer((prevTime) => {
//         if (prevTime === 1) {
//           clearInterval(intervalRef.current as NodeJS.Timeout);
//           setIsTestActive(false);
//           setShowResult(true);
//           setInputValue("");
//           setWordCount("");
//           inputRef.current?.blur();
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);
//   };

//   // Handle user input changes
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!isTestActive) {
//       startTimer();
//     }
//     const value = e.target.value;
//     setInputValue(value);
//     setWordCount(prev => prev + value[value.length - 1]);
//     setCurrentCharIndex(value.length);

//   };
 

//   useEffect(() => {
//     // Calculate WPM based on correct words
//     const inputWords = wordCount.trim().split(/\s+/);
//     const paragraphWords = paragraph?.trim().split(/\s+/);

//     let correctWordCount = 0;
//     inputWords.forEach((word, index) => {
//       if (word === paragraphWords[index]) {
//         correctWordCount++;
//       }
//     });
//     const timeElapsedInMinutes = timer / time;
//     const wpm = Math.round(correctWordCount / timeElapsedInMinutes); 
//     setWpm(wpm);

//     // Calculate accuracy based on correct characters
//     const correctChars = paragraph
//       .slice(0, wordCount.length)
//       .split("")
//       .filter((char, index) => char === wordCount[index]).length;

//     const newAccuracy =
//       wordCount.length === 0
//         ? 100
//         : Math.round((correctChars / wordCount.length) * 100); 
//     setAccuracy(newAccuracy);
//   }, [wordCount]);



//   // Reset paragraph styling when the test ends

//   useEffect(() => {
//     if (!isTestActive && showResult) {
//       setInputValue("");
//       setWordCount("");
//       setCurrentCharIndex(0);
//     }
//   }, [isTestActive, showResult]);

//   const loadData = () => {
//     const res = generateParagraph(selectedLevel);
//     setParagraph(res);
//     setSelectedLevel(level);
//     setIsTestActive(false);
//     setInputValue("");
//     setWordCount("");
//     setCurrentCharIndex(0);
//     clearInterval(intervalRef.current as NodeJS.Timeout);
//     setTimer(time);
//     setWpm(0);
//     setAccuracy(100);
//     setShowResult(false);
//     inputRef.current?.focus();
//   };


//   return (
//     <main
//       className="px-60 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen"
//       onClick={() => inputRef.current?.focus()}
//     >
//       <Navbar timer={timer} time={time} onPress={loadData} />

//       {/* Background Image */}
//       <div
//         className="fixed top-5 left-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat opacity-30"
//         style={{ backgroundImage: "url('/keyboard.png')" }}
//       />


//       <div className="relative z-10 w-full mt-3">
//         {/* Paragraph Display */}
//         {paragraph?.length > 0 ?
//           <TypingParagraph
//             paragraph={paragraph}
//             inputValue={inputValue}
//             currentCharIndex={currentCharIndex}
//             inputRef={inputRef}
//             onLineCharCountChange={() => {
//               setInputValue("");
//               setCurrentCharIndex(0)

//             }}
//           />
//           : <div className="text-3xl font-bold text-gray-800 mb-4">Loading...</div>}

//         {/* Hidden Input Field */}
//         <input
//           ref={inputRef}
//           type="text"
//           className="w-0 h-0 opacity-0  "
//           value={inputValue}
//           onChange={handleInputChange}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               e.preventDefault();
//               setInputValue(inputValue + "\n");
//               setWordCount(wordCount + "\n")
//               setCurrentCharIndex(currentCharIndex + 1)
//             }
//           }}
//           disabled={!isTestActive && timer === 0}
//         />
//       </div>

//       {/* Result Dialog */}
//       {showResult && (<div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
//         <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">
//             Typing Test Complete!
//           </h2>
//           <p className="text-gray-700 mb-2">
//             You typed the {Math.floor(time / 60)}-minute typing test.
//           </p>
//           <p className="text-gray-700 mb-4">
//             Your speed was{" "}
//             <span className="font-bold text-gray-900">{wpm} WPM</span> with an
//             accuracy of{" "}
//             <span className="font-bold text-gray-900">{accuracy}%</span>.
//           </p>
//           <button
//             onClick={() => router.back()}
//             className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all"
//           >
//             Try Again
//           </button>
//           {/* Quiz Button */}
//           <button
//             onClick={() => {
//               router.replace("/quiz");
//             }}
//             className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
//           >
//             Take Quiz
//           </button>
//         </div>
//       </div>
//       )}
//     </main>
//   );
// };


// const Page = () => {
//   return (
//     <Suspense fallback={<div>Loading</div>}>
//       <Wrapper />
//     </Suspense>
//   )
// }

// export default Page




'use client';
import Navbar from "@/components/Navbar";
import TypingParagraph from "@/components/TypingParagraph";
import { generateParagraph } from "@/lib/generateParagraph";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useRef, Suspense } from "react";

const Wrapper = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const time = Number(searchParams.get("selectedTime"));
  const level = searchParams.get("selectedLevel") as "easy" | "medium" | "hard";

  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // State variables
  const [inputValue, setInputValue] = useState<string>("");
  const [wordCount, setWordCount] = useState<string>("");
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(100);
  const [timer, setTimer] = useState<number>(time);
  const [paragraph, setParagraph] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<"easy" | "medium" | "hard">(level);

  // Generate a new paragraph based on the selected difficulty level
  useEffect(() => {
    const res = generateParagraph(selectedLevel);
    setParagraph(res);
    setSelectedLevel(level);
    resetTest();
  }, [selectedLevel, level, time]);

  // Function to start the countdown timer
  const startTimer = () => {
    if (isTestActive) return;
    setIsTestActive(true);
    intervalRef.current = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime === 1) {
          clearInterval(intervalRef.current as NodeJS.Timeout);
          endTest();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  // Handle user input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isTestActive) startTimer();
    
    const value = e.target.value;
    setInputValue(value);
    setWordCount(prev => prev + value[value.length - 1]);
    setCurrentCharIndex(value.length);
  };

  // Calculate WPM and accuracy
  useEffect(() => {
    const inputWords = wordCount.trim().split(/\s+/);
    const paragraphWords = paragraph?.trim().split(/\s+/);

    let correctWordCount = 0;
    inputWords.forEach((word, index) => {
      if (word === paragraphWords[index]) correctWordCount++;
    });

    const timeElapsedInMinutes = (time - timer) / 60;
    const wpm = Math.round(correctWordCount / timeElapsedInMinutes);
    setWpm(wpm);

    const correctChars = paragraph
      .slice(0, wordCount.length)
      .split("")
      .filter((char, index) => char === wordCount[index]).length;

    const newAccuracy = wordCount.length === 0 ? 100 : Math.round((correctChars / wordCount.length) * 100);
    setAccuracy(newAccuracy);
  }, [wordCount]);

  // End the test
  const endTest = () => {
    setIsTestActive(false);
    setShowResult(true);
    inputRef.current?.blur();
  };

  // Reset test state
  const resetTest = () => {
    setIsTestActive(false);
    setInputValue("");
    setWordCount("");
    setCurrentCharIndex(0);
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setTimer(time);
    setWpm(0);
    setAccuracy(100);
    setShowResult(false);
    inputRef.current?.focus();
  };

  return (
    
    <main className="px-60 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen" onClick={() => inputRef.current?.focus()}>
      <Navbar timer={timer} time={time} onPress={resetTest} />
 
      
      <div className="fixed top-5 left-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: "url('/keyboard.png')" }} />

      <div className="relative z-10 w-full mt-3">
        {/* Paragraph Display */}
        {paragraph?.length > 0 ? (
          <TypingParagraph
            paragraph={paragraph}
            inputValue={inputValue}
            currentCharIndex={currentCharIndex}
            inputRef={inputRef}
            onLineCharCountChange={() => {
              setInputValue("");
              setCurrentCharIndex(0);
            }}
          />
        ) : (
          <div className="text-3xl font-bold text-gray-800 mb-4">Loading...</div>
        )}

        {/* Hidden Input Field */}
        <input
          ref={inputRef}
          type="text"
          className="w-0 h-0 opacity-0"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setInputValue(inputValue + "\n");
              setWordCount(wordCount + "\n");
              setCurrentCharIndex(currentCharIndex + 1);
            }
          }}
          disabled={!isTestActive && timer === 0}
        />
      </div>

      {/* Result Dialog */}
      {showResult && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Typing Test Complete!</h2>
            <p className="text-gray-700 mb-2">
              You typed the {Math.floor(time / 60)}-minute typing test.
            </p>
            <p className="text-gray-700 mb-4">
              Your speed was <span className="font-bold text-gray-900">{wpm} WPM</span> with an accuracy of{" "}
              <span className="font-bold text-gray-900">{accuracy}%</span>.
            </p>
            <button onClick={() => router.back()} className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all">
              Try Again
            </button>
            <button onClick={() => router.replace("/quiz")} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all">
              Take Quiz
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Wrapper />
    </Suspense>
  );
};

export default Page;


