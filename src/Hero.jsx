import React from "react";
import bgVideo from "../src/assets/Videos/video-start.mp4";

const Hero = ({refHello, refVideo, refTextH2}) => {

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
    <div className="relative pb-32">
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

      <div className="text-[#E7CFB1] text-[15vw] leading-[0.9] tracking-tight font-semibold py-24 px-20">
        <h2 ref={(el) => (refTextH2.current[0] = el)}>
          <span>us</span> HELPERS
        </h2>
        <h2 ref={(el) => (refTextH2.current[1] = el)}>LES BRANDS</h2>
        <h2 ref={(el) => (refTextH2.current[2] = el)} className="text-right">toGROW</h2>
        <h2 ref={(el) => (refTextH2.current[3] = el)}>PLUS FAST</h2>
      </div>
    </div>
  );
};

export default Hero;
