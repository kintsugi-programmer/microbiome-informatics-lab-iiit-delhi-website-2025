// components/DelayedLoader.tsx
"use client";
import Image from 'next/image';
import { motion as momo } from 'framer-motion';
import React, { useState, useEffect } from "react";
import Loading from "@/app/loading";
type DelayedLoaderProps = {
  children: React.ReactNode;
};

export default function DelayedLoader({ children }: DelayedLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
}


export const LoadingComp = () => {
  return (
     <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-white dark:bg-black z-50">
      <div className="text-center">
        <div className="w-20 h-20 border-8 border-dashed rounded-full animate-spin border-green-300 mx-auto" />
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white mt-4 italic">
          "Decoding the big stories of our little bugs"
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed ">
          Welcome to <span className="font-semibold">Microbiome Informatics Lab IIIT-Delhi</span>! 
          
          {/* Your trusted partner in <span className="font-semibold">audit, taxation, and advisory<br /> services</span>,
          committed to driving your success with  */}<br /><span className="italic">- MI Lab Team 💙</span>
        </p>
      </div>
    </div>
  )
}