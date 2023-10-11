import React from "react";

const Card = ({ item }) => {
  return (
    <div className="flex flex-col gap-0 md:gap-6 md:w-[26%] w-full">
      <div className="flex items-center gap-4 md:block">
        <img src={item.url} alt="" width={55} className=" pb-4" />
        <h3 className=" text-xl text-[#303D59] font-light tracking-wider font-[Sora, sans] tracking-[0.025rem]">
          {item.title}
        </h3>
      </div>
      <p className="text-sm leading-8 font-extralight tracking-wide">
        {item.desc}
      </p>
    </div>
  );
};

export default Card;
