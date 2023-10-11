import React from "react";

const Hero = () => {
  return (
    <section className="mt-10 md:mt-20">
      <div className="flex flex-col items-start md:items-center gap-7 md:gap-10 p-10">
        <p className="text-bodyColor text-sm tracking-[4px]">BEN THOMPSON JR</p>
        <h1 className="text-4xl md:text-6xl text-headingColor">
          No code expert
        </h1>
        <p className="text-base font-thin">
          Expertly crafted and highly converting no code sites.
        </p>
        <button className="inline-flex items-center rounded-[40px] px-4 py-2 tracking-[2px] md:py-4  md:px-8 text-gray-100 bg-BtnColor hover:bg-[#836EE6] text-md md:tracking-[4px] duration-300 shadow-md">
          HIRE ME —
        </button>
      </div>
    </section>
  );
};

export default Hero;
