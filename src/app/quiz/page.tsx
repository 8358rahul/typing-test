'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

// Sample Quiz Data
const quizData = [
  {
    question: "Which finger should you use to type the letter 'F'?",
    options: ["Index", "Middle", "Ring", "Pinky"],
    answer: "Index"
  },
  {
    question: "Who is credited with inventing the first typewriter?",
    options: ["Christopher Latham Sholes", "Thomas Edison", "Alexander Graham Bell", "Samuel Morse"],
    answer: "Christopher Latham Sholes"
  }
  // Add more questions here
];

const QuizComponent = () => {
  const router = useRouter();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(Array(quizData.length).fill(''));
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option: string) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestionIndex] = option;
    setSelectedOptions(updatedOptions);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate the score here
      const finalScore = quizData.reduce((acc, question, index) => {
        if (selectedOptions[index] === question.answer) {
          return acc + 1;
        }
        return acc;
      }, 0);
      setScore(finalScore);
      setShowScore(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const { question, options } = quizData[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / quizData.length) * 100;

  

  return (
    <main className="flex flex-col min-h-screen justify-center items-center p-10 bg-gradient-to-br from-gray-100 to-gray-300">
      <h1 className="text-center text-5xl font-bold mb-8 text-purple-800 tracking-wider">
        Quiz App
      </h1>
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
        <div className="w-full mb-4">
          <div className="relative pt-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">{currentQuestionIndex + 1} / {quizData.length}</span>
            </div>
            <div className="flex">
              <div
                className="w-full bg-gray-200 rounded-full"
                style={{ height: '6px' }}
              >
                <div
                  className="bg-purple-500 h-full rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">{question}</h2>
        <div className="w-full text-gray-800">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className={`block w-full p-4 mb-2 text-left rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                selectedOptions[currentQuestionIndex] === option
                  ? 'bg-purple-300'
                  : 'bg-gray-100'
              } border-2 border-transparent`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-4 w-full">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            {currentQuestionIndex === quizData.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
      {
        showScore && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-16 max-w-sm text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Quiz Complete!</h2>
            <p className="text-xl text-gray-700 mb-3">Your score:</p>
            <div className="text-4xl font-bold text-purple-600">
              {score} / {quizData.length}
            </div>
            <button
              onClick={() => router.push('/')}
              className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all"
            >
              Try Again
            </button>
          </div>
        </div>
        )
      }
    </main>
  );
};

export default QuizComponent;
