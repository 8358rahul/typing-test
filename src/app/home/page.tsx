'use client';
import Navbar from "@/components/Navbar";
import TypingParagraph from "@/components/TypingParagraph";
import { generateLine, generateParagraph } from "@/utils/generateParagraph";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useRef, Suspense, KeyboardEvent } from "react";
import GraphemeSplitter from "grapheme-splitter";



const splitter = new GraphemeSplitter();
const Wrapper = () => {
  // Router
  const router = useRouter();

  // Get selected time and level from query params
  const searchParams = useSearchParams();
  const time = Number(searchParams.get("selectedTime"));
  const timeInMinutes = time / 60;
  const level = searchParams.get("selectedLevel") as "easy" | "medium" | "hard";
  const language = searchParams.get("selectedLanguage") as "english" | "hindi";

  const fontStyle = language === "hindi" ? "Noto Sans Devanagari" : "font-mono";
 


  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // State variables
  const [inputValue, setInputValue] = useState<string>("");
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [wpm, setWpm] = useState<number>(0);
  const [totalWpm, setTotalWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(100);
  const [timer, setTimer] = useState<number>(time);
  const [paragraph, setParagraph] = useState<string>("");
  const [lines, setLines] = useState<string[]>([""]);  

  const isEventDispatched = useRef(false);

  // Timer management
  useEffect(() => {
    if (!isEventDispatched.current) {
      const event = new Event('onInscriptTyping'); 
      // Dispatch the event only once
      document.dispatchEvent(event);
      resetTest();

      // Set the flag to true to prevent future dispatches
      isEventDispatched.current = true;
    }
  }, [level, time, language]);



  // start the timer
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
    const value = e.target.value;
    setInputValue(value);
    const temp =language=='hindi'? splitter.splitGraphemes(value):value;

    setCurrentCharIndex(temp.length);

    calculateResults();
    console.log("value", value);

    if (!isTestActive) startTimer(); 
    if (temp.length === lines[currentLineIndex].length) {
      setInputValue("");
      setCurrentLineIndex((prevIndex) => prevIndex + 1);
      setCurrentCharIndex(0);
    }
     
  };


  const calculateResults = () => {
    const allTypedInput = lines.slice(0, currentLineIndex).join(" ") + " " + inputValue.trim(); 
    const inputWords = allTypedInput?.trim().split(/\s+/);
    const paragraphWords = paragraph?.trim().split(/\s+/);
    
 
    let correctWordCount = 0;
    let inCorrectWordCount = 0;
 
    
    inputWords.forEach((word, index) => { 
      console.log('word',word);
      console.log('paragraphWords[index]',paragraphWords[index]);
      if (word === paragraphWords[index]) {
        correctWordCount++;
      } else {
        inCorrectWordCount++;
      } 
    }); 

    // console.log('correctWordCount',correctWordCount);
    // console.log('inCorrectWordCount',inCorrectWordCount);
 

    // Calculate WPM based on correct words  
    const newWpm = Math.round(correctWordCount / timeInMinutes);
    setWpm(newWpm);

    // Calculate WPM based on total words
    const totalWpm = Math.round(inputWords.length / timeInMinutes);
    setTotalWpm(totalWpm);


    // Calculate accuracy based on correct words instead of characters  
    const accuracy = inputWords.length === 0
      ? 100
      : Math.round((correctWordCount / inputWords.length) * 100);

    setAccuracy(accuracy);
  };



  // End the test
  const endTest = () => {
    setIsTestActive(false);
    setShowResult(true);
    inputRef.current?.blur();
  };



  // Reset test state
  const resetTest = () => {
    const paragraph = generateParagraph(level, language);
    setParagraph(paragraph);
    const res = generateLine(paragraph);
    setLines(res);
    setIsTestActive(false);
    setInputValue("");
    setCurrentCharIndex(0);
    setCurrentLineIndex(0);
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setTimer(time);
    setWpm(0);
    setAccuracy(100);
    setShowResult(false);
    inputRef.current?.focus();
  }; 

  return (
    <main className={'px-60 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen'} onClick={() => inputRef.current?.focus()}>
      <Navbar timer={timer} time={time} onPress={resetTest} />
      <div className="fixed top-5 left-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: "url('/keyboard.png')" }} />
  
        
      <div className="relative z-10 w-full mt-9">
        {/* Paragraph Display */}
        {lines?.length > 0 ? (
          <TypingParagraph
            lines={lines}
            inputValue={inputValue}
            currentCharIndex={currentCharIndex}
            inputRef={inputRef}
            currentLineIndex={currentLineIndex} 
            language={language}
          />
        ) : (
          <div className="text-3xl font-bold text-gray-800 mb-4">Loading...</div>
        )}

        {/* Hidden Input Field */}
        <input
          ref={inputRef}
          type="text"
          lang="hi"
          style={{
            fontFamily: fontStyle,
            fontSize: "1rem",
            color: "transparent",
            caretColor: "black",

          }}
          className={`${language === "hindi"?"Inscript":""} w-0 h-0 opacity-0`}
          id="txtInscript"
          value={inputValue}
          onChange={handleInputChange} 
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (inputValue === lines[currentLineIndex]) {
                setInputValue("");
                setCurrentLineIndex(currentLineIndex + 1);
                setCurrentCharIndex(0);
              }
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
              You typed the {timeInMinutes}-minute typing test.
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


