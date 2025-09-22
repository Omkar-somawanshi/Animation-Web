import React from "react";
import Video from "./Video";

const HomeHero = () => {
  return (
    <div className="font-[font2] pt-5 text-center text-white">
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]">The spark</div>
      <div className="text-[9.5vw] justify-center flex items-start uppercase leading-[8vw]">that <div className="h-[7vw] w-[16vw] rounded-full mt-3 overflow-hidden"><Video/></div> generates</div>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]">creativity.</div>
    </div>
  );
};

export default HomeHero;
