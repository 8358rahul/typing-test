"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface NavbarProps {
  timer?: number;
  time?: number;
  onPress?: () => void;
  register?: boolean; 
}
export default function Navbar({ timer, time, onPress,register }: NavbarProps) {
   const router = useRouter();
  // the timer get in seconds i want to show it in minutes and seconds
  const minutes = Math.floor(timer! / 60);
  const seconds = timer! % 60;
  const timeShow = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  return (
    <div className="bg-blue-900 text-white flex justify-between items-center py-2 px-6 min-w-full">
      {/* left content  */}
      <div className="flex flex-row gap-2 items-center" >
      <svg onClick={()=>router.back()} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left cursor-pointer" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
        <a href="/" className="text-xl font-bold">Typing Test</a>
      </div>
      {/* center content */}
      <div>
        {time ? `${Math.floor(time! / 60)} Minute Typing Test` : null}
      </div>
      {/* right content */}
      <div className="flex space-x-4 items-center">
        {/* timer content show */}
        {timer && <>
          <span className='font-bold text-white text-lg'>{timeShow}</span>
          <a onClick={onPress}>
            <svg className="h-5 w-5 text-white cursor-pointer" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />
              <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
            </svg>
          </a>
        </>}
    {register && <button className="text-white font-bold border py-1 px-2 rounded-md" type="submit">
        <Link
              href={{
                pathname: '/register', 
              }}
            >
              Register
            </Link>
          </button> }
      </div>
    </div>
  );

}
