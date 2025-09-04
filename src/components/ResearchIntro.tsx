import Link from 'next/link';
import Image from 'next/image';

const ResearchPageCard = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-cyan-400/20 hover:scale-[1.01] transition-all duration-300 cursor-pointer overflow-hidden group">
      
      {/* Left: Text Block */}
      <div className="w-full lg:w-2/3 z-10">
        <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
          <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-blue-700 bg-clip-text text-transparent">
            Research at MI Lab
          </span>
        </h3>
        <p className="text-gray-600 italic text-lg mb-4">
          Decoding the{" "}
          <span className="bg-gradient-to-br from-teal-400 to-teal-600 bg-clip-text text-transparent font-medium">
            big stories of our little bugs
          </span>
        </p>
        <p className="text-gray-700 text-sm sm:text-base pb-4">
          Explore our cutting-edge research in microbiome informatics, from understanding 
          microbial communication networks to developing AI-driven diagnostic tools for 
          personalized medicine.
        </p>
        
        <Link href="/research">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-blue-500 to-blue-700 rounded-full" />
            <div className="px-8 py-2 bg-white rounded-full font-bold relative group transition duration-200 text-gray-800 hover:bg-transparent hover:text-white">
              Explore Research
            </div>
          </button>
        </Link>
      </div>

      {/* Right: Artwork Image */}
      <div className="w-full lg:w-1/3 flex justify-center z-10">
        <Image
          src="/art/5.png"
          alt="Research Art"
          width={300}
          height={300}
          className="w-60 h-60 "
        /><Image
          src="/art/6.png"
          alt="Research Art"
          width={300}
          height={300}
          className="w-60 h-60 "
        />
      </div>

      {/* Floating Background Effect */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-blue-500/15 rounded-full blur-2xl z-0" />
      
      {/* Subtle Background Icons */}
      <div className="absolute top-4 right-4 text-2xl opacity-10 pointer-events-none">
        🧬
      </div>
      <div className="absolute bottom-4 left-4 text-xl opacity-10 pointer-events-none">
        🔬
      </div>
    </div>
  );
};

export default ResearchPageCard;