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
    <div className="relative flex flex-col items-center justify-center h-screen bg-black">
      
        <momo.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: [1, 1.15, 1]      // pulse effect
        }}
        transition={{ 
          duration: 1.5, 
          ease: 'easeInOut', 
          loop: Infinity, 
          repeatDelay: 0.3 
        }}
      >
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="logo"
          priority
        />
      </momo.div>

      {/* Text fade‐in */}
      <momo.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
        className="py-5 text-center font-bold text-white text-2xl"
      >
        <h1 className="bg-opacity-50 bg-gradient-to-b px-20 from-neutral-50 to-neutral-400 bg-clip-text text-center  italic  text-transparent md:text-2xl text-2xl">
        &quot;Where students <br /> don&apos;t just dream,
        <br /> they build.&quot;
        
        
        </h1>
        <h1 className='md:text-2xl text-2xl bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent'>- E-Cell IIIT Delhi Team 💙</h1>

      </momo.div>
    </div>
  )
}
