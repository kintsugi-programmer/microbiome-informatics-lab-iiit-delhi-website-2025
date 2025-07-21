"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white dark:bg-black text-center">
      <div className="flex md:flex-row-reverse flex-col-reverse items-center justify-center gap-8 w-full max-w-4xl">
        
        {/* Text Section */}
        <div className="md:w-1/2 w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-blue-700 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            The page you're looking for doesn&apos;t exist.
          </p>

          <Link
            href="/"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold hover:scale-105 transition-transform"
          >
            Go back home
          </Link>
        </div>

        {/* Art Image Section */}
        <div className="relative w-60 h-60 md:w-72 md:h-72">
          <Image
            src="/art/9.png"
            alt="Microbe Art"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
