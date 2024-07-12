import React from "react";
import parisIEC from "../src/assets/Videos/thumnail-IEC.mp4";
import beev from "../src/assets/Videos/thumnail-beev.mp4";
import whiteCoffees from "../src/assets/Images/white-coffees.webp";
import pugeotBranding from "../src/assets/Images/pugeot-branding.webp";
import kreeme from "../src/assets/Images/kreeme.webp";

const SidePhotos = () => {
  const data = [
    {
      src: parisIEC,
      name: "HEC PARIS IEC",
      description: "Branding, the, Digital, Strategy",
      pict: false,
      width: "50%",
      height: "90vh",
      margin : "0"
    },
    {
      src: whiteCoffees,
      name: "WHITE COFFEES",
      description: "Branding, the, Strategy",
      pict: true,
      width: "32%",
      height: "50vh",
      margin : "15vw"
    },
    {
      src: beev,
      name: "BEEV",
      description: "Branding, the, Digital, Strategy",
      pict: false,
      width: "35%",
      height: "60vh",
      margin : "0vw"
    },
    {
      src: pugeotBranding,
      name: "PUGEOT",
      description: "Branding",
      pict: true,
      width: "50%",
      height: "100vh",
      margin : "13vw"
    },
    {
      src: kreeme,
      name: "KREEME",
      description: "Branding, the, Strategy",
      pict: true,
      width: "70%",
      height: "120vh",
      margin : "1vw"
    },
  ];
  return (
    <div className="min-h-screen w-full flex justify-center flex-wrap py-20">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex text-white flex-col m-2 ml-10 mr-10`}
          style={{ width: item.width, height: item.height, marginTop : item.margin }}
        >
          <div className="h-[75%] w-full hover:scale-[1.01] transform transition-transform ease-out duration-300">
            {item.pict ? (
              <img src={item.src} alt="" className="w-full h-full object-cover" />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              ></video>
            )}
          </div>
          <div className="text-xl">
            <h3 className="mt-3">{item.name}</h3>
            <p className="my-0.5">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidePhotos;
