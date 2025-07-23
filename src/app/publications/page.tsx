// src/app/publications/page.tsx
'use client';
import publications from '@/data/Publications.json';
import Image from 'next/image';

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-white px-4 pt-20 pb-10 md:px-10 lg:px-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent mb-10">
        Our Publications
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {publications.map((paper, idx) => {
          const hasLink = paper.pdf || paper.link;
          const href = paper.pdf ?? paper.link;

          const CardContent = (
            <div className="group block bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 border border-gray-100">
              <div className="overflow-hidden rounded-t-2xl h-48">
                <Image
                  src={paper.image}
                  alt={paper.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {paper.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{paper.preview}</p>
                <p className="mt-3 text-sm font-medium text-teal-600">
                  {paper.pdf ? '➜ Read Full Paper' : paper.link ? '➜ View on Journal Site' : '🚫 Not Available'}
                </p>
              </div>
            </div>
          );

          return hasLink ? (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CardContent}
            </a>
          ) : (
            <div key={idx} className="opacity-70 cursor-not-allowed">
              {CardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}
