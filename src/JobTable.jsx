import React from "react";
import { FaSortDown } from "react-icons/fa";

const JobTable = () => {
  return (
    <div className="">
      <div className="bg-white border border-blue-100 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-blue-100 text-black-300 ">
            <tr>
              <th className="px-4 py-3">Ticket No.</th>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Site</th>
              <th className="px-4 py-3">Asset</th>
              <th className="px-4 py-3">Date Allocated</th>
              <th className="px-4 py-3">Date Created</th>
              <th className="px-4 py-3">Job Type</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-2 py-3 text-center">
                <FaSortDown className="inline-block text-gray-500" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="9" className="text-center text-gray-500 py-8">
                Page 1 of 1, showing 0 record(s) out of 0 total
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-end items-center px-4 py-2">
          <button
            className="px-3 py-1 border border-gray-300 text-gray-500 rounded-l cursor-not-allowed bg-gray-100"
            disabled
          >
            &lt; Prev
          </button>
          <button
            className="px-3 py-1 border border-gray-300 text-gray-400 rounded-r cursor-not-allowed bg-gray-100"
            disabled
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobTable;