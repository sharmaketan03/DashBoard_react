import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

const ToInvoice = () => {
  const [activeTab, setActiveTab] = useState("To Invoice");

  return (
    <div className="mt-[10%] w-[96%] pl-10">
     

     <div className="flex items-center justify-between">
         <div>
        <h1 className="text-2xl font-bold mb-4">To Invoice</h1>
      </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 4v16h16V4H4zm8 10l-4-4h8l-4 4z" />
          </svg>
          Export CSV
        </button>
      </div>
     </div>

      <div className="flex space-x-6 border-b border-gray-200 mb-6">
        {["To Invoice", "Completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex justify-end mb-4"></div>

      <div className="border-b  border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-sky-100 text-black font-medium">
              <tr>
                <th className="px-4 py-2">Ticket No.</th>
                <th className="px-4 py-2">Client Name</th>
                <th className="px-4 py-2">Client Site</th>
                <th className="px-4 py-2">Site ID</th>
                <th className="px-4 py-2">Asset</th>
                <th className="px-4 py-2">Job Title</th>
                <th className="px-4 py-2">Invoice No.</th>
                <th className="px-4 py-2">Parts</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2 text-center" colSpan={2}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-700">
              <tr className="border-t border-gray-200 mb-2">
                <td className="px-4 py-2">30001</td>
                <td className="px-4 py-2">Job client add</td>
                <td className="px-4 py-2">TSC</td>
                <td className="px-4 py-2">TSC0005</td>
                <td className="px-4 py-2">Asset 1</td>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">3</td>
                <td className="px-2 py-2">
                  <button className="p-2 rounded hover:bg-blue-100 ">
                    <FaCheckCircle />
                  </button>
                </td>
                <td className="px-2 py-2">
                  <button className="p-2 rounded hover:bg-blue-100 text-gray-700">
                    <AiOutlineEye />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ToInvoice;
