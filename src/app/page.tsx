import Hero from "@/components/Hero";
import Image from "next/image";
import { Quote1,Quote2 } from '@/components/Quote'

export default function Home() {
  return (
    <div className="flex flex-col p-5 space-y-5">
    <Hero/>
    <Quote1/>
    <Quote2/>
    </div>
  );
}
