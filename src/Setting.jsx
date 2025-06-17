import React from "react";
import { FiSettings } from "react-icons/fi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoIosCreate } from "react-icons/io";
import { GoInbox } from "react-icons/go";
const Setting = () => {
  return (
    <div className="w-[92%] mt-25">
      <h1 className="mt-8 font-bold text-2xl">Setting</h1>

      <div className="flex flex-wrap gap-5 mt-6">

        {/* 1. Tags Settings */}
        <div className="border border-gray-300 rounded-lg w-[300px] h-[100px] p-4 flex items-center justify-between hover:shadow-lg transition cursor-pointer bg-white">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 rounded-[15px] w-[40px] h-[40px] flex items-center justify-center">
              <FiSettings className="text-gray-500 text-[18px]" />
            </div>
            <div className="max-w-[180px]">
              <h2 className="font-semibold text-xs text-[#254A9c]">Tags Settings</h2>
              <p className="text-xs text-gray-500">View and edit relevant Tags Settings</p>
            </div>
          </div>
          <HiOutlineArrowRight className="text-[22px] text-blue-600" />
        </div>

        {/* 2. Ticket Titles */}
        <div className="border border-gray-300 rounded-lg w-[300px] h-[100px] p-4 flex items-center justify-between hover:shadow-lg transition cursor-pointer bg-white">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 rounded-[15px] w-[40px] h-[40px] flex items-center justify-center">
              <IoIosCreate className="text-gray-500 text-[18px]" />
            </div>
            <div className="max-w-[180px]">
              <h2 className="font-semibold text-xs text-[#254A9c]">Ticket Titles</h2>
              <p className="text-xs text-gray-500">View and edit Support Ticket Titles</p>
            </div>
          </div>
          <HiOutlineArrowRight className="text-[22px] text-blue-600" />
        </div>

        {/* 3. Asset Data */}
        <div className="border border-gray-300 rounded-lg w-[300px] h-[100px] p-4 flex items-center justify-between hover:shadow-lg transition cursor-pointer bg-white">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 rounded-[15px] w-[40px] h-[40px] flex items-center justify-center">
              <GoInbox  className="text-gray-500 text-[18px]"/>
            </div>
            <div className="max-w-[180px]">
              <h2 className="font-semibold text-xs text-[#254A9c]">Asset Data</h2>
              <p className="text-xs text-gray-500">Create and edit Asset data</p>
            </div>
          </div>
          <HiOutlineArrowRight className="text-[22px] text-blue-600" />
        </div>

        {/* 4. Checklist Templates */}
        <div className="border border-gray-300 rounded-lg w-[300px] h-[100px] p-4 flex items-center justify-between hover:shadow-lg transition cursor-pointer bg-white">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 rounded-[15px] w-[40px] h-[40px] flex items-center justify-center">
              <IoIosCreate className="text-gray-500 text-[18px]" />
            </div>
            <div className="max-w-[180px]">
              <h2 className="font-semibold text-xs text-[#254A9c]">Checklist Templates</h2>
              <p className="text-xs text-gray-500">View and edit Checklist Templates</p>
            </div>
          </div>
          <HiOutlineArrowRight className="text-[22px] text-blue-600" />
        </div>

        {/* 5. Job Card Types */}
        <div className="border border-gray-300 rounded-lg w-[300px] h-[100px] p-4 flex items-center justify-between hover:shadow-lg transition cursor-pointer bg-white">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 rounded-[15px] w-[40px] h-[40px] flex items-center justify-center">
              <IoIosCreate className="text-gray-500 text-[18px]" />
            </div>
            <div className="max-w-[180px]">
              <h2 className="font-semibold text-xs text-[#254A9c]">Job Card Types</h2>
              <p className="text-xs text-gray-500">View and edit Job Card Types</p>
            </div>
          </div>
          <HiOutlineArrowRight className="text-[22px] text-blue-600" />
        </div>

        {/* 6. Resource Categories */}
        <div className="border border-gray-300 rounded-lg w-[300px] h-[100px] p-4 flex items-center justify-between hover:shadow-lg transition cursor-pointer bg-white">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 rounded-[15px] w-[40px] h-[40px] flex items-center justify-center">
              <IoIosCreate className="text-gray-500 text-[18px]" />
            </div>
            <div className="max-w-[180px]">
              <h2 className="font-semibold text-xs text-[#254A9c]">Resource Categories</h2>
              <p className="text-xs text-gray-500">View and edit Resource Categories</p>
            </div>
          </div>
          <HiOutlineArrowRight className="text-[22px] text-blue-600" />
        </div>

        {/* 7. Email Notifications */}
        <div className="border border-gray-300 rounded-lg w-[300px] h-[100px] p-4 flex items-center justify-between hover:shadow-lg transition cursor-pointer bg-white">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 rounded-[15px] w-[40px] h-[40px] flex items-center justify-center">
              <IoIosCreate className="text-gray-500 text-[18px]" />
            </div>
            <div className="max-w-[180px]">
              <h2 className="font-semibold text-xs text-[#254A9c]">Email Notifications</h2>
              <p className="text-xs text-gray-500">View and edit Email Notifications</p>
            </div>
          </div>
          <HiOutlineArrowRight className="text-[22px] text-blue-600" />
        </div>

      </div>
    </div>
  );
};

export default Setting;