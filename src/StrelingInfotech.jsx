import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { IoArrowBack } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";

const StrelingInfotech = () => {
  const [selectedSite, setSelectedSite] = useState("");

  const chartOptions = {
    chart: {
      type: "pie",
      events: {
        render() {
         
        },
      },
    },
   
    subtitle: {
      text:
        'Source: <a href="https://www.ssb.no/transport-og-reiseliv/faktaside/bil-og-transport">SSB</a>',
    },
   
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        borderRadius: 8,
        dataLabels: [
       
        ],
        innerSize: "75%",
      },
    },
    series: [
      {
        name: "Registrations",
        colorByPoint: true,
        data: [
          { name: "EV", y: 23.9 },
          { name: "Hybrids", y: 12.6 },
          { name: "Diesel", y: 37.0 },
          { name: "Petrol", y: 26.4 },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div className="mt-24 p-4">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2 text-xl font-semibold cursor-pointer">
          <IoArrowBack className="text-2xl text-gray-700 border-2 rounded-full" />
          <span className="text-3xl text-gray-800 font-bold">
            Sterling Infotech
          </span>
        </div>
        <select
          value={selectedSite}
          onChange={(e) => setSelectedSite(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1 text-sm"
        >
          <option value="">Select Site</option>
          <option value="ster">Ster</option>
          <option value="sterling">Sterling Infotech</option>
          <option value="google">Google</option>
        </select>
      </div>

      {/* Tab Buttons */}
      <div className="flex space-x-8 border-b border-gray-300 text-sm mt-10 font-medium text-gray-600 overflow-x-auto">
        <button className="pb-2 text-sky-600 border-b-2 border-sky-600">
          Overview
        </button>
        <button className="pb-2">Service Agreements</button>
        <button className="pb-2">Work History</button>
        <button className="pb-2">Sites</button>
        <button className="pb-2">Contacts</button>
        <button className="pb-2">Assets</button>
        <button className="pb-2">Portal Users</button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-gray-900 text-white p-4 rounded-md flex justify-between items-center">
          <span>Support Tickets</span>
          <span className="text-4xl font-bold text-sky-400">9</span>
        </div>
        <div className="bg-white border border-gray-300 p-4 rounded-md flex justify-between items-center">
          <span>Assets</span>
          <span className="text-4xl font-bold text-yellow-500">3</span>
        </div>
        <div className="bg-white border border-gray-300 p-4 rounded-md flex justify-between items-center">
          <span>Sites</span>
          <span className="text-4xl font-bold text-orange-500">3</span>
        </div>
        <div className="bg-white border border-gray-300 p-4 rounded-md flex justify-between items-center">
          <span>Contacts</span>
          <span className="text-4xl font-bold text-green-500">8</span>
        </div>
      </div>

    
      <div className="flex  gap-10 ">
        <div className="border h-[300px] border-gray-300 w-[600px] p-4 rounded-md mt-8 space-y-4">
        <div className="flex justify-between text-sm text-gray-700">
          <span>Date Created</span>
          <div className="flex items-center gap-2">
            <FiEdit2 className="text-gray-400" />
            <span className="text-gray-600">16-09-2024</span>
          </div>
        </div>
        <hr className="text-gray-200" />
        <div className="flex justify-between text-sm text-gray-700">
          <span>Company</span>
          <span>Ster</span>
        </div>
        <hr className="text-gray-200" />
        <div className="flex justify-between text-sm text-gray-700">
          <span>Address</span>
          <span className="font-medium text-sky-600">Narre Warren</span>
        </div>
        <hr className="text-gray-200" />
        <div className="flex justify-between text-sm text-gray-700">
          <span>ABN</span>
          <span>324234</span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-10 w-[500px] border p-5 border-gray-400 rounded-2xl">
        <h2 className="text-xl font-semibold text-center mb-4">
          Support Tickets by Title
        </h2>
        <HighchartsReact highcharts={Highcharts} className="w-[300px] " options={chartOptions} />
      </div>
      </div>
    </div>
  );
};

export default StrelingInfotech;
