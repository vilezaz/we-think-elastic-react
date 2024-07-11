import React from "react";
import favIcon from "../src/assets/Images/weThink.png";

const Navbar = ({refNav, refAnchors}) => {

  return (
    <nav className="flex justify-between p-4 relative z-10 navbar" ref={refNav}>
      <img className="size-16" src={favIcon} alt="favicon" />
      <div className="flex gap-16 items-center mr-10">
        {["Projects", "Expertises", "The Team", "Contact"].map(
          (item, index) => (
            <a
              href="#"
              ref={(el) => (refAnchors.current[index] = el)}
              key={index}
              className="text-[#E7CFB1] hover:text-[#E5813E] font-regular text-[1.6vw]"
            >
              {item}
            </a>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
