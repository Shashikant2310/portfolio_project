import React from "react";

const ProjectList = () => {
  return (
    <div className="p-8 md:p-10">
      <div className="flex flex-col gap-8 w-full md:w-3/4 mb-20">
        <div className=" w-8 mb-5 border-t-4 border-bodyColor"></div>
        <h2 className="text-3xl md:text-5xl text-headingColor">
          Latest projects
        </h2>
        <p className="text-base font-thin">
          Nisl pretium fusce id velit ut. Vivamus arcu felis bibendum ut
          tristique. Dignissim sodales ut eu sem integer vitae justo. Elit duis
          tristique sollicitudin nibh sit amet commodo nulla
        </p>
      </div>
      <div className="flex md:justify-between md:flex-row flex-col gap-8">
        <div className="md:w-[46%] w-full">
          <div className="h-6 bg-bodyColor rounded-tl-md rounded-tr-md"></div>
          <div className="bg-gray-100 h-64 "></div>
        </div>
        <div className="md:w-[46%] w-full">
          <div className="h-6 bg-bodyColor rounded-tl-md rounded-tr-md"></div>
          <div className="bg-gray-100 h-64">
            <img src="" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
