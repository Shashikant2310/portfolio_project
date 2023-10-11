import React from "react";
import { RiGlobalLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const SignUp = () => {
  return (
    <div className="px-10 py-16">
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-4xl md:text-6xl text-headingColor">Sign up</h2>
        <p className=" text-bodyText font-thin w-full md:w-3/4 text-center leading-8">
          Amet purus gravida quis blandit turpis. Montes nascetur ridiculus mus
          mauris vitae ultricies leo. Odio ut sem nulla pharetra diam sit amet.
        </p>
        <div className="w-full flex flex-col items-center">
          <input
            className="h-14 w-full md:w-1/2 p-6 rounded-full bg-transparent border-gray-200 border outline-none placeholder:font-thin placeholder:tracking-[0.2rem] "
            placeholder="EMAIL"
            type="text"
            name=""
            id=""
          />
          <button className="inline-flex items-center mt-6 rounded-[40px] px-4 py-2 md:py-4 md:px-8 text-gray-100 bg-BtnColor hover:bg-[#836EE6] text-base tracking-[2px] duration-300 shadow-md">
            JOIN —
          </button>
        </div>
        <div className="flex gap-6">
          <div className="w-10 h-10 flex justify-center items-center border border-gray-300 cursor-pointer duration-300 hover:border-bodyColor rounded-full">
            <RiGlobalLine className="text-2xl text-bodyColor" />
          </div>
          <div className="w-10 h-10 flex justify-center items-center border border-gray-300 cursor-pointer duration-300 hover:border-bodyColor rounded-full">
            <AiOutlineInstagram className="text-2xl text-bodyColor" />
          </div>
          <div className="w-10 h-10 flex justify-center items-center border border-gray-300 cursor-pointer duration-300 hover:border-bodyColor rounded-full">
            <AiOutlineMail className="text-2xl text-bodyColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
