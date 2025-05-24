"use client";
import Image from "next/image";
import { motion } from "framer-motion";
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
    }, 4000); // Extended duration to 4s

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingComp />;
  }

  return <>{children}</>;
}

const microbes = ["/art/1.png", "/art/2.png", "/art/3.png", "/art/4.png"];

export const LoadingComp = () => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-white  z-50">
      <div className="flex flex-col items-center justify-center text-center px-4">
        {/* Microbe Animation Row */}
        <div className="flex gap-8 mb-8">
          {microbes.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.3, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: -10, scale: 1.1 }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatType: "mirror",
                delay: index * 0.2,
              }}
            >
              <Image
                src={src}
                alt={`Microbe ${index + 1}`}
                width={112}
                height={112}
                priority
              />
            </motion.div>
          ))}
        </div>

        {/* Animated Tagline */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          "Decoding the big stories of our little bugs"
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          Welcome to <span className="font-semibold">Microbiome Informatics Lab IIIT-Delhi</span>!
          <br />
          <span className="italic">– MI Lab Team 💙</span>
        </motion.p>
      </div>
    </div>
  );
};
