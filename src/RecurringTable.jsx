import React from "react";

const RecurringTable = () => {
  return (
    <div className="">
      <div className="overflow-x-auto bg-white  border border-blue-100">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-100 text-left text-gray-800">
              <th className="px-4 py-3 font-semibold">Client Name</th>
              <th className="px-4 py-3 font-semibold">Site</th>
              <th className="px-4 py-3 font-semibold">Asset</th>
              <th className="px-4 py-3 font-semibold">Recurring Period</th>
              <th className="px-4 py-3 font-semibold">Next Date</th>
              <th className="px-4 py-3 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3">Sterling Infotech</td>
              <td className="px-4 py-3">Client Site</td>
              <td className="px-4 py-3">test</td>
              <td className="px-4 py-3">1 Months</td>
              <td className="px-4 py-3">02-07-2025</td>
              <td className="px-4 py-3 space-x-2 text-center">
                <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm">Approve</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">Dismiss</button>
                <button className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm">Cancel</button>
                <button className="bg-white border border-gray-300 text-gray-600 px-2 py-1 rounded-md text-sm">→</button>
              </td>
            </tr>

            <tr className="border-b">
              <td className="px-4 py-3">Sterling Infotech</td>
              <td className="px-4 py-3">Client Site</td>
              <td className="px-4 py-3">test1</td>
              <td className="px-4 py-3">1 Years</td>
              <td className="px-4 py-3">13-06-2027</td>
              <td className="px-4 py-3 space-x-2 text-center">
                <button className="border border-green-500 text-green-600 px-3 py-1 rounded-md text-sm">Auto Approve</button>
                <button className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm">Cancel</button>
                <button className="bg-white border border-gray-300 text-gray-600 px-2 py-1 rounded-md text-sm">→</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecurringTable;