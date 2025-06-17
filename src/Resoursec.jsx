import React from "react";
import { GoPlus } from "react-icons/go";

const Resoursec = () => {
  return (
    <>
     <div className="px-1 w-[97%]">
       <div className="text-3xl mt-[10%] font-bold  mb-8 w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-6">Resources</h1>

          <button className="flex items-center bg-blue-500 gap-3 px-2 py-4 rounded-lg text-white hover:bg-blue-300 w-[120px] text-[12px] ">
            <GoPlus /> Add Client
          </button>
        </div>
      </div>
      <hr className="mt-2 h-[2px] bg-black" />
      <div className="mt-[30px] flex ">
        <button className="bg-gray-300 text-white text-[12px]  py-[7px] px-[7px] rounded-lg cursor-pointer w-[120px] ">
          Installation
        </button>
        <button className="py-4 px-8 rounded-lg cursor-pointer ">
          Broken Gas Filter
        </button>
      </div>
     </div>
    </>
  );
};

export default Resoursec;
