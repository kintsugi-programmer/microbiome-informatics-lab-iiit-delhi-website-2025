// components/Artpack.tsx
import Image from "next/image";

const files = [1, 2, 3, 4, 5, 6]; // => /art/1.png … /art/6.png

export default function Artpack() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center bg-white">
      {files.map((n) => (
        <div
          key={n}
          className="flex justify-center items-center
                     w-[40%] sm:w-[30%] md:w-[22%] lg:w-[18%] xl:w-[15%]"
        >
          <Image
            src={`/art/${n}.png`}
            alt={`microbe art ${n}`}
            width={720}
            height={720}
            className="w-full h-auto object-contain"
            priority={n === 1}          // (optional) eager-load the first one
          />
        </div>
      ))}
      All ArtWork are Unique Intellectual Property of
Microbiome Lab
 IIIT Delhi
    </div>
  );
}
