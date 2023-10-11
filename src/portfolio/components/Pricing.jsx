import React from "react";

const Pricing = () => {
  return (
    <div className="p-8 md:p-10">
      <div className="flex flex-col gap-8 w-full md:w-3/4 mb-8 md:mb-28">
        <div className=" w-8 mb-5 border-t-4 border-bodyColor"></div>
        <h2 className="text-3xl md:text-5xl text-headingColor">Pricing</h2>
        <p className="text-base leading-8 font-thin">
          Ultrices sagittis orci a scelerisque purus semper eget. Erat nam at
          lectus urna duis convallis convallis tellus. Sed adipiscing diam donec
          adipiscing tristique risus nec feugiat in. Nunc faucibus.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row px-2 md:px-10 py-6 md:py-20 bg-gray-50">
        <div className="flex-1 mb-4">
          <div className="flex flex-col gap-8">
            <p className=" tracking-widest text-bodyColor">STARTS AT</p>
            <p className="text-5xl text-headingColor">$500</p>
            <p className="font-thin">
              Mauris rhoncus aenean vel elit scelerisque mauris. Aliquet eget
              sit amet tellus cras adipiscing enim eu turpis. Elit eget gravida
              cum sociis natoque penatibus.
            </p>
            <ul>
              <li className="mb-10 font-thin">
                Aliquet bibendum enim facilisis gravida neque convallis a cras
                semper.
              </li>
              <li className="font-thin">
                Tincidunt nunc pulvinar sapien et. Tincidunt praesent semper
                feugiat nibh sed pulvinar.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 h-full">
          <div className="flex flex-col gap-8">
            <input
              className="h-14 p-6 sm:p-2 rounded-md bg-transparent border-gray-200 border outline-none"
              placeholder="Name"
              type="text"
              name=""
              id=""
            />
            <input
              className="h-14 p-6 sm:p-2 rounded-md bg-transparent border-gray-200 border outline-none placeholder:font-thin"
              placeholder="Email"
              type="text"
              name=""
              id=""
            />
            <textarea
              className="h-44 p-6 rounded-md bg-transparent border-gray-200 border outline-none placeholder:font-thin"
              placeholder="Describe your project..."
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="text-center ">
            <button className="inline-flex items-center mt-6 rounded-[40px]  py-4 px-8 text-gray-100 bg-BtnColor hover:bg-[#836EE6] text-sm tracking-[2px] duration-300 shadow-md">
              HIRE ME —
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
