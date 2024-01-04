import React from "react";
import WomanImage from "../assets/woman_hero.png";
import BgHero from "../assets/bg_hero.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="bg-transparent h-[800px]
    bg-no-repeat bg-cover bg-center py-24 "
      style={{ backgroundImage: `url(${BgHero})` }}
    >
      <div className="p-[30px] lg:p-0 mx-auto flex lg:justify-around">
        {/* Text */}
        <div className="flex flex-col mt-[30%] lg:mt-0 lg:justify-center">
          {/* Pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trends
          </div>

          {/* Title */}
          <h1 className="text-[70px] leading-[1.1] font-light mb-4 uppercase">
            Autumn Sale Stylish <br />
            <span className="font-semibold uppercase">products</span>
          </h1>

          <Link to={"/"} className="self-start uppercase font-semibold border-b-2 border-black">
            Dicover More
          </Link>
        </div>

        {/* Image */}
        <div className="hidden lg:block">
          <img src={WomanImage} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
