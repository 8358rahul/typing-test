'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";


const Page = () => {
  const [selectedTime, setSelectedTime] = useState<number>(60);
  const [selectedLevel, setSelectedLevel] = useState<"easy" | "medium" | "hard">("easy");
  const [selectedLanguage, setSelectedLanguage] = useState<"english" | "hindi">("english");
  const [inputValue, setInputValue] = useState<string>("");


  const verifyInput = (value: any) => {
    // Assuming Hindi is the chosen language for the example
    const isHindi = [...value].some(char => char >= '\u0900' && char <= '\u097F');
    if (isHindi) {
      alert('Correct keyboard layout! Proceed with the test.');
    } else {
      alert('Please switch to the Hindi keyboard layout using Windows + Space and try again.');
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.length > 5) { // Arbitrary length for verification
      verifyInput(e.target.value);
    }
  };



  return (
    <main>
      <Navbar />
      <div
        className="relative flex flex-col items-center p-10 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
        >
          <source src="typing-video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Content on top of the video */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6 text-white tracking-wider">
            Check your typing skills in a minute
          </h1>

          <div className="h-24" />

          {/* Selection for Test Duration and Text Length */}
          <div className="flex flex-col md:flex-col justify-center items-center gap-8 mb-12 w-full">
            <div className="w-72 flex flex-col items-start ">
              <label htmlFor="test-duration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-2">Duration</label>
              <select
                id="timeSelect"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={selectedTime}
                onChange={(e) => {
                  const newTime = parseInt(e.target.value);
                  setSelectedTime(newTime);
                }}
              >
                <option value={60}>1 Minute</option>
                <option value={120}>2 Minutes</option>
                <option value={180}>3 Minutes</option>
              </select>
            </div>
            <div className="w-72 flex flex-col items-start">
              <label htmlFor="test-duration" className="item-start text-sm font-medium text-gray-900 dark:text-white ml-2">Level</label>
              <select
                id="levelSelect"
                value={selectedLevel}
                onChange={(e) =>
                  setSelectedLevel(e.target.value as "easy" | "medium" | "hard")
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="w-72 flex flex-col items-start">
              <label htmlFor="test-duration" className="item-start text-sm font-medium text-gray-900 dark:text-white ml-2">Language</label>
              <select
                id="languageSelect"
                value={selectedLanguage}
                onChange={(e) =>
                  setSelectedLanguage(e.target.value as "hindi" | "english")
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>
          </div>




          {selectedLanguage == "hindi" && ( 
            <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Please type the word &quot;नमस्ते&quot; to verify the Hindi keyboard layout</h3>
                <p  className="">To test, press <strong>Windows + Space</strong></p>
                <Link
                  href="https://support.microsoft.com/en-us/help/4027670/windows-10-add-and-switch-input-and-display-language-preferences"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline" 
                > 
                Learn more
                </Link>
                  <div className="col-span-2 mb-6">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                    <textarea value={inputValue} onChange={handleInput} id="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="type here.."></textarea>
                  </div> 
                <Link
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  href={{
                    pathname: '/home',
                    query: { selectedTime: selectedTime, selectedLevel: selectedLevel, selectedLanguage: selectedLanguage }
                  }}
                >
                  Start Test
                </Link>




               
              </div>
            </div>

          )}
          <Link
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            href={{
              pathname: '/home',
              query: { selectedTime: selectedTime, selectedLevel: selectedLevel, selectedLanguage: selectedLanguage }
            }}
          >
            Start Test
          </Link>
        </div>
      </div>




    </main>
  )

}

export default Page