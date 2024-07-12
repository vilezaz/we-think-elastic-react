import React from "react";

const Expertises = ({refExpertises}) => {

    const data = [
        {
            title : "STRATEGY & IDEAS",
            names : {
                1 : "Positioning",
                2 : "Brand platform",
                3 : "Digital strategy",
                4 : "Social strategy",
                5 : "Content Marketing",
            }
        },
        {
            title : "BRAND IDENTITY",
            names : {
                1 : "Logo",
                2 : "Graphic identity",
                3 : "Graphic charter",
                4 : "Editorial charter",
                5 : "Content creation",
                6 : "Social media guidelines"
            }
        },
        {
            title : "DIGITAL EXPERIENCE",
            names : {
                1 : "UI design",
                2 : "Audit and UX design",
                3 : "Showcase site",
                4 : "E-commerce website",
                5 : "Web Application",
                6 : "Mobile Application"
            }
        },
    ]

  return (
    <div className="bg-[#9AC1CB] min-h-screen overflow-hidden">
      <p ref={refExpertises} className="text-[40vw] font-semibold leading-none px-10 py-5 tracking-tighter">
        EXPERTISES
      </p>

      <div className="flex justify-around">
        {data.map((item, index) => (
            <div key={index} className="py-24">
                <h3 className="text-3xl font-semibold py-1">{item.title}</h3>
                <div className="text-[#394346] text-xl">
                    <p className="py-[2px]">{item.names[1]}</p>
                    <p className="py-[2px]">{item.names[2]}</p>
                    <p className="py-[2px]">{item.names[3]}</p>
                    <p className="py-[2px]">{item.names[4]}</p>
                    <p className="py-[2px]">{item.names[5]}</p>
                    <p className="py-[2px]">{item.names[6]}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Expertises;
