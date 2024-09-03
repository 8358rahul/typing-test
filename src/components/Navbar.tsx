"use client";
import React from "react";

interface NavbarProps {
  timer: number;
  time: number;
  onPress: () => void;
}
export default function Navbar({ timer,time,onPress  }: NavbarProps) {
  // the timer get in seconds i want to show it in minutes and seconds
  const minutes = Math.floor(timer / 60);  
  const seconds = timer % 60;
  const timeShow = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  
  return (
    <div className="bg-blue-900 text-white flex justify-between items-center py-2 px-6 min-w-full mb-6">
      <div className="flex flex-row">
        <svg className="h-5 w-5 text-white"   width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
        <p>
         +123 456 7890
        </p>
      </div>
      <div>
        <p> 
         {`${Math.floor(time / 60)} Minute Typing Test`}
        </p>
      </div>
      <div className="flex space-x-4">
        {timeShow && <span className='font-bold text-white text-lg'>{timeShow}</span>}
        <a onClick={onPress}><svg className="h-5 w-5 text-white cursor-pointer"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" /></svg></a>
         <a><svg className="h-5 w-5 text-white cursor-pointer"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
       </div>
    </div>
  );
}
