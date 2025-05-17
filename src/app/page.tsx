import Hero from "@/components/Hero";
import Image from "next/image";
import { Quote1,Quote2 } from '@/components/Quote'

export default function Home() {
  return (<>
  <Hero/>
    <div className="flex flex-col p-5 space-y-5">
    
    <Quote1/>
    <Quote2/>
    </div>
    </>
  );
}
