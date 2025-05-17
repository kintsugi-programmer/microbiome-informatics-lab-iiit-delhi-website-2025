import React from "react";

const Hero = () => {
  return (
    <section className="">
      {/* Rounded, responsive-height video card */}
      <div
        className="relative p-5 w-full
                   h-[60vh] sm:h-[75vh] md:h-[90vh] lg:h-screen
                   overflow-hidden"
      >
        {/* ▶︎ VIDEO */}
        <video
          className="w-full h-full rounded-3xl shadow-lg object-cover
                     object-[50%_0%] filter brightness-75"       /* keep horizontal centre, lift vertical focus */
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* ✏︎ CENTERED TEXT LAYER */}
        <div
          className="absolute p-10 inset-0 flex items-center justify-center
                     pointer-events-none"   /* let clicks pass through if needed */
        >
          {/* Whatever you want in the middle */}
          <h1 className="text-white text-start text-3xl font-semibold leading-tight
                sm:text-4xl sm:leading-tight
                md:text-5xl md:leading-tight md:text-start ">
            Welcome to 
            <div>
                Microbiome Informatics Lab, IIIT Delhi</div> <div className="text-start text-xl  leading-tight
                sm:text-2xl sm:leading-tight
                md:text-3xl md:leading-tight md:text-start">
  Decoding the&nbsp;
  <span className="bg-gradient-to-br from-teal-200 to-teal-500 bg-clip-text text-transparent">
    big stories of our little bugs
  </span>
</div>

          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
