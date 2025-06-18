import React from "react";
import { GoPlus } from "react-icons/go";

const Resoursec = () => {
  return (
    <>
     <div className="px-1 w-[97%]">
       <div className="text-3xl mt-[10%] font-bold  mb-8 w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-6">Resources</h1>

          <button className="bg-sky-500 flex items-center gap-2 hover:bg-sky-600 rounded text-white px-4 py-2 mt-5 font-medium text-xs" >
            <GoPlus className="text-[18px]"/> Add Client
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
