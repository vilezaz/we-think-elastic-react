import React, { useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SidePhotos from "./SidePhotos";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  const refNav = useRef();
  const refAnchors = useRef([]);
  const refHello = useRef([]);
  const refVideo = useRef();
  const refTextH2 = useRef([]);
  
  

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

    tl.to(refVideo.current, {
      width: "100%",
      scrollTrigger: {
        trigger: refVideo.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    refTextH2.current.forEach((h2) => {
      gsap.from(h2, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: h2,
          start: "top bottom-=100",
          end: "bottom top+=100",
          toggleActions: "play none none reverse",
        }
      });
    });

  });

  useGSAP(() => {
    gsap.from(refHello.current, {
      stagger: 0.20,
      duration: 3,
      opacity: 0,
    });
  }, []);

  

  return (
    <div className="bg-[#151414] min-h-screen">
      <Navbar refNav={refNav} refAnchors={refAnchors}/>
      <Hero  refHello={refHello} refVideo={refVideo} refTextH2={refTextH2}/>
      <SidePhotos />
    </div>
  );
};

export default App;
