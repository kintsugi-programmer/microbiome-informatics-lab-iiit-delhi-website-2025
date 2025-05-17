import React from "react";

const Hero = () => {
  return (
    <div className="">
      {/* Rounded, responsive-height video card */}
      <div
        className="p-5
          relative w-full
          h-[60vh]     /* phones: 60% of viewport height */
          sm:h-[75vh]  /* small tablets: 75 vh */
          md:h-[90vh]  /* laptops: 90 vh */
          lg:h-screen  /* desktops & ultrawide: full screen */
          overflow-hidden 
        "
      >
        <video
          className="w-full h-full shadow-lg rounded-3xl object-cover
          
          
                   
            object-[50%_0%]       /* <— keep horizontal center, raise vertical focus */"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
