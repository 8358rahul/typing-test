'use client'
import { useState } from "react";
import Link from "next/link";

const page = () => {
  const [selectedTime, setSelectedTime] = useState<number>(60);
  const [selectedLevel, setSelectedLevel] = useState<"easy" | "medium" | "hard">("easy");


  return (
    <main className="relative flex flex-col min-h-screen items-center p-10 bg-gradient-to-br from-gray-100 to-gray-300">
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
        <img src="/welcome.png" alt="Logo" className="w-72" />
        <h1 className="text-5xl font-bold mb-8 text-white tracking-wider">
          Check your typing skills in a minute
        </h1>
        <p className="text-lg mb-10 text-white">
          Type away to join 150+ million test takers!
        </p>

        {/* Selection for Test Duration and Text Length */}
        <div className="flex flex-col md:flex-col justify-center items-center gap-8 mb-12">
          {/* Test Duration Selection */}
          <div className="flex flex-col items-start">
            <label htmlFor="test-duration" className="block text-left mb-5 text-white">Select Your Test</label>
            <select
              className="w-80 p-3 bg-white border-2 border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              id="timeSelect"
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

          {/* Text Length Selection */}
          <div className="flex flex-col items-start">
            <select
              className="w-80 p-3 bg-white border-2 border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              id="levelSelect"
              value={selectedLevel}
              onChange={(e) =>
                setSelectedLevel(e.target.value as "easy" | "medium" | "hard")
              }
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>


        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-5">
          <Link
            href={{
              pathname: '/home',
              query: { selectedTime: selectedTime, selectedLevel: selectedLevel }
            }}
            className="border bg-purple-800 text-white py-3 px-6 rounded-lg text-md font-semibold hover:bg-purple-700 transition-all"
          >
            Start Test
          </Link>
          <Link
            href={{ pathname: '/quiz' }}
            className= "border bg-purple-800 text-white py-3 px-6 rounded-lg text-md font-semibold hover:bg-purple-700 transition-all"
          >
            Take Quiz
          </Link>
        </div>

        {/* registration button  */}
        <button className="bg-purple-800 text-white py-3 px-6 rounded-lg text-md font-semibold hover:bg-purple-700 transition-all mt-5 w-72 border ">
          Register
        </button>
      </div>
    </main>

  )

}

export default page