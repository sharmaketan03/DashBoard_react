import React from "react";
import { FiArchive, FiClipboard } from "react-icons/fi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const SupportTicket = () => {
  return (
    <div className=" bg-white shadow-md rounded-lg w-[98%] mx-auto mt-[10%] ">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div className="flex items-center gap-2">
          <Link to="/support"><HiOutlineArrowLeft className="text-xl text-gray-500 cursor-pointer border-[2px] h-[25px] w-[25px] rounded-full" /></Link>
  
          <div>
            <h1 className="text-2xl font-semibold">Support Ticket #10010</h1>
            <p className="text-sm text-gray-500">
              Created: May 15, 2025, 03:24 PM | Claimed by:{" "}
              <span className="text-blue-500 hover:underline cursor-pointer">
                Edit
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
            <FiArchive />
            Archive
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
            <FiClipboard />
            Ticket Log
          </button>
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex justify-between items-center">
        <div
          className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-l-lg text-center font-semibold"
        >
          Open
        </div>
        <div
          className="flex-1 py-2 px-4 bg-gray-200 text-gray-600 text-center"
        >
          Working
        </div>
        <div
          className="flex-1 py-2 px-4 bg-gray-300 text-gray-600 text-center"
        >
          On-site Technician
        </div>
        <button className="flex-1 py-2 px-4 bg-gray-400 text-gray-600 rounded-r-lg text-center" >
          Resolved
        </button>
      </div>
      <div className="  min-h-screen w-[98%]">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
       
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Job Client Add</h1>
          <p className="text-sm text-gray-500">TSC - total</p>
          <a href="#" className="text-blue-500 hover:underline text-sm">
            Edit Contact
          </a>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
     
          <div className="col-span-2 space-y-6">
            {/* Job Details */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Sites</span>
                <a href="#" className="text-blue-500 hover:underline">
                  TSC
                </a>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Asset</span>
                <a href="#" className="text-blue-500 hover:underline">
                  Asset 1 - 2343223
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-medium">Warranty</span>
                <button className="px-4 py-1 bg-gray-100 text-sm rounded">WARRANTY</button>
                <button className="px-4 py-1 bg-gray-100 text-sm rounded">OUT OF WARRANTY</button>
                <button className="px-4 py-1 bg-blue-500 text-white text-sm rounded">FOC</button>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-medium">Parts</span>
                <button className="px-4 py-1 bg-gray-100 text-sm rounded">PARTS REQUIRED</button>
                <button className="px-4 py-1 bg-gray-100 text-sm rounded">NO PARTS</button>
              </div>
            </div>

            {/* Dropdown */}
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <select className="w-full border-gray-300 rounded px-3 py-2">
                <option>Select</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <a href="#" className="text-blue-500 hover:underline text-sm">
                Click here to add a description
              </a>
            </div>

            {/* Attachments */}
            <div>
              <label className="block text-sm font-medium mb-1">Attachments</label>
              <div className="w-full border-gray-300 border rounded px-3 py-2">
                <p className="text-gray-400 text-sm">No attachments added.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Total Time */}
            <div className="p-4 bg-gray-100 rounded">
              <h3 className="font-medium">Total Time</h3>
              <p className="text-green-500 text-2xl">0hrs 0mins</p>
              <a href="#" className="text-blue-500 hover:underline text-sm">
                View Time
              </a>
              <div className="mt-2 flex gap-4">
                <button className="px-4 py-2 bg-gray-200 rounded">Start Timer</button>
                <button className="px-4 py-2 bg-gray-200 rounded">Add Time</button>
              </div>
            </div>

            {/* Technicians */}
            <div className="p-4 bg-gray-100 rounded">
              <h3 className="font-medium">Technicians</h3>
              <button className="px-4 py-2 bg-blue-500 text-white rounded w-full">
                + Add Technician
              </button>
              <a href="#" className="text-blue-500 hover:underline text-sm block mt-2">
                On-site Technician Required
              </a>
            </div>

            {/* Comments */}
            <div className="p-4 bg-gray-100 rounded">
              <h3 className="font-medium">Comments / Updates</h3>
              <textarea
                className="w-full border-gray-300 rounded mt-2 px-3 py-2"
                placeholder="Start typing..."
              ></textarea>
              <div className="mt-2 flex gap-4">
                <button className="px-4 py-2 bg-gray-200 rounded">💬</button>
                <button className="px-4 py-2 bg-gray-200 rounded">📧</button>
                <button className="px-4 py-2 bg-gray-200 rounded">📎</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
};

export default SupportTicket;
