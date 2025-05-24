// components/Artpack.tsx
import Image from "next/image";

const files = [1, 2, 3, 4, 5, 6, 7,8 ,9 ,10, 11,12]; // => /art/1.png … /art/6.png

export default function Artpack() {
  return (
    <div className="flex flex-wrap text-black gap-4 justify-center items-center bg-white">
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


// A 2D digital illustration of a cute, friendly gut microbe character designed for kids. The microbe has a soft, bean-like shape with a vibrant pastel blue body, big round eyes, a small smiling mouth, and tiny stubby arms. It has a fuzzy texture like felt, with a subtle shine to give it depth. The character is floating on a white background, with no shadows or background elements. The style is minimalist, cartoonish, and highly appealing to children, similar to modern educational animation characters

// i have also given inspirations