import React from "react";
import { services } from "./dataCard";

const ServiceFeature = () => {
  return (
    <div className="p-8 md:p-10">
      <div className="flex flex-col gap-8 w-full md:w-3/4 mb-20">
        <div className=" w-8 mb-5 border-t-4 border-bodyColor"></div>
        <h2 className="text-3xl md:text-5xl text-headingColor">
          What to expect?
        </h2>
        <p className="text-base font-thin">
          Accumsan tortor posuere ac ut consequat semper viverra nam libero.
          Malesuada nunc vel risus commodo viverra maecenas accumsan.
        </p>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between gap-10 md:gap-y-16">
        {services.map((item) => (
          <div className="flex flex-col gap-0 md:gap-6 md:w-[26%] w-full">
            <div className="flex items-center gap-4 md:block">
              <img src={item.url} alt="" width={55} className=" pb-4" />
              <h3 className=" text-xl text-[#303D59] font-light tracking-[0.025rem]">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-500 text-base leading-8 font-extralight tracking-wide">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeature;
