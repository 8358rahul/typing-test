"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface NavbarProps {
  timer?: number;
  time?: number;
  onPress?: () => void; 
}
export default function Navbar({ timer, time, onPress }: NavbarProps) {
  const router = useRouter();
  // the timer get in seconds i want to show it in minutes and seconds
  const minutes = Math.floor(timer! / 60);
  const seconds = timer! % 60;
  const timeShow = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
        <button 
          onClick={() => router.back()}
        className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="logo.png" className="h-6" alt="Flowbite Logo" />
          <span className="self-center text-1xl font-semibold whitespace-nowrap dark:text-white">Typing Test</span>
        </button>
        <span className="self-center  whitespace-nowrap dark:text-white">
          {time ? `${Math.floor(time! / 60)} Minute Typing Test` : null}
        </span>

        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          {timer ? <>
            <div className="flex flex-row items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-alarm" viewBox="0 0 16 16">
                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
              </svg>
              <span className="text-sm  text-gray-500 dark:text-white hover:underline">{timeShow}</span>

            </div>
            <a onClick={onPress}>
              <svg className="h-5 w-5 text-white cursor-pointer" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />
                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
              </svg>
            </a>
          </> : <> 
              <Link
           className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
                href={{
                  pathname: '/quiz',
                }}
              >
                Quiz
              </Link>  
              <Link
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
                href={{
                  pathname: '/register',
                }}
              >
                Register
              </Link> 
          </>}
        </div>
      </div>
    </nav>

  )

}
