import React from "react";

const Footer = () => {
  return (
    <div className="h-32 flex items-end justify-around px-20 py-5">
      {[
        "© 2024 WETHINKELASTIC",
        "OUR ACTUS",
        "UNCAFE@WETHINKELASTIC.COM",
        "COOKIES",
        "LEGAL NOTICES",
      ].map((item, index) => (
        <a href="#" key={index} className="text-[#969798]">
          {item}
        </a>
      ))}
    </div>
  );
};

export default Footer;
