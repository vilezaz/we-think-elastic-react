import React, { useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const App = () => {

  const refNav = useRef();
  const refAnchors = useRef([]);
  const refHello = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(refNav.current, {
      y: -100,
      opacity : 0,
      duration : 0.8
    });

    tl.from(refAnchors.current, {
      y: -50,
      duration: 1,
      opacity: 0,
      stagger : 0.1
    });

    tl.from(refHello.current, {
      stagger: 0.15,
      duration: 3,
      opacity: 0,
    });
  });

  return (
    <div className="bg-[#151414] min-h-screen">
      <Navbar refNav={refNav} refAnchors={refAnchors}/>
      <Hero  refHello={refHello}/>
    </div>
  );
};

export default App;
