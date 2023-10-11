import React from "react";
import profile from "../Assets/Profile.png";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-0 gap-4 my-10 md:my-24 px-8">
      <div className="flex-1">
        <div className="flex flex-col gap-6">
          <div className=" w-8 mb-5 border-t-4 border-[#836EE6]"></div>
          <h2 className="text-3xl md:text-5xl text-headingColor">About me</h2>
          <p className="text-gray-400 text-lg leading-8 ">
            I am a web and brand identity designer dedicated to creating
            meaningful no code projects focused on simplicity, cohesiveness &
            convenience.
          </p>
          <span id="about-spand" className="text-[#836EE6] text-xl">
            I build sites that ;
          </span>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-center md:justify-end">
          <img src={profile} alt="profile" className=" w-[80%]" />
        </div>
      </div>
    </div>
  );
};

export default About;
