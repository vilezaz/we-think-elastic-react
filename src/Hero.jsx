import React from "react";
import bgVideo from "../src/assets/Videos/video-start.mp4";

const Hero = ({refHello, refVideo}) => {

  const SplitText = (text) => {
    return text.split("").map((char, index) => {
      return (
        <span key={index} ref={(el) => (refHello.current[index] = el)} className="inline-block">
          {char}
        </span>
      );
    });
  };

  return (
    <div className="relative">
      <h1
        className="hello text-[42vw] font-extrabold leading-none tracking-tighter text-center text-[#F3C77C] absolute top-[-2%] left-0 right-0 z-0"
      >
        {SplitText("hello")}
      </h1>
      <p className="relative z-10 text-center font-Montserrat leading-none pt-[40vw] text-4xl text-[#F3C77C]">
        WE'RE THE TEAM <br /> THINK ELASTIC
      </p>

      <div className="my-20 w-full mx-auto overflow-hidden">
      <div className="w-[40%] mx-auto" ref={refVideo}>
        <video src={bgVideo} loop autoPlay muted className="h-full w-full"></video>
      </div>
      </div>

      <div className="text-[#E7CFB1] text-[15vw] leading-[0.9] tracking-tight font-semibold px-20">
        <h2>
          <span>us</span> HELPERS
        </h2>
        <h2>LES BRANDS</h2>
        <h2 className="text-right">toGROW</h2>
        <h2>PLUS FAST</h2>
      </div>
    </div>
  );
};

export default Hero;
