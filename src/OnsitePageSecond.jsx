import React, { useState } from "react";
import ResolveTicketModal from "./ResolveTicketModal";

function DashboardonsitePageSecond() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 text-sm font-sans mt-24 bg-gray-50 min-h-screen">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Support Ticket #10005</h1>
          <p className="text-gray-500 text-xs">
            Created October 25, 2014 - 12:57pm | Claimed by Clark Kelly, Sterling Jnr, Ashfield Job
          </p>
        </div>
        <div className="flex space-x-2">
          <a variant="outline">Archive</a>
          <a variant="outline">Ticket Log</a>
        </div>
      </div>

      <div className="flex mb-6">
        <div className="flex-1 text-center bg-gray-200 p-2 rounded-l">Open</div>
        <div className="flex-1 text-center bg-gray-300 p-2">Working</div>
        <div className="flex-1 text-center bg-orange-400 p-2 text-white">Onsite Technician</div>
        <div
          className="flex-1 text-center bg-gray-200 p-2 rounded-r cursor-pointer hover:bg-gray-300 transition"
          onClick={() => setIsModalOpen(true)}
        >
          Resolved
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="bg-white shadow-sm p-4 rounded mb-6">
            <h2 className="font-semibold text-3xl mb-2">Sterling Infotech</h2>
            <p>sterling - 254 Mulwala Farm</p>
            <p>1234567</p>
            <p>sterling_27794@yahoo.co.uk</p>
            <a href="#" className="text-blue-500 text-xs">Edit Contact</a>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            {['Site', 'Asset', 'Warranty', 'Parts'].map(label => (
              <div key={label}>
                <label className="block text-xs font-medium text-gray-700">{label}</label>
                <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-200 px-2 py-1 rounded text-xs">Warranty</span>
            <span className="bg-gray-200 px-2 py-1 rounded text-xs">Out of Warranty</span>
            <span className="bg-blue-400 text-white px-2 py-1 rounded text-xs">FOC</span>
            <span className="bg-yellow-300 px-2 py-1 rounded text-xs">No Parts</span>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-medium text-gray-700">Title</label>
            <input type="text" value="Event - 25th Aug" className="w-full border mt-1 p-2 rounded" readOnly />
            <label className="block text-xs font-medium text-gray-700 mt-3">Description</label>
            <textarea className="w-full border mt-1 p-2 rounded" rows="3" readOnly>text</textarea>
            <a href="#" className="text-blue-500 text-xs">Edit Description</a>
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-2">Attachments</p>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-24 bg-gray-100 border rounded"></div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white shadow-sm p-4 rounded mb-6">
            <div className="flex justify-between mb-3">
              <div>
                <p className="font-semibold">Total Time</p>
                <p className="text-green-600">22hrs 59mins</p>
                <a href="#" className="text-blue-500 text-xs">View Time</a>
              </div>
              <div className="flex gap-2 items-start">
                <a size="sm">Start Timer</a>
                <a size="sm">Add Time</a>
              </div>
            </div>
            <p className="font-semibold">Technicians</p>
            <p>User1</p>
            <div className="flex gap-2 mt-2">
              <a size="sm">Add Technician</a>
              <a size="sm" className="bg-orange-500 text-whiten p-2 text-white rounded-[5px]">Onsite Technician Required</a>
            </div>
          </div>

          <div className="bg-white shadow-sm p-4 rounded">
            <p className="font-semibold mb-2">Comments / Updates</p>
            <textarea placeholder="Start typing..." className="w-full border rounded p-2 h-24 mb-2" />
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-1">Save As:</p>
              <div className="flex gap-2">
                <a size="sm">Call</a>
                <a size="sm">Message</a>
                <a size="sm">Email</a>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-blue-50 p-2 rounded">
                <p className="text-xs text-gray-500">Clark Kelly - Thursday, February 05 2015 - 01:23AM</p>
                <p>Second comment...</p>
              </div>
              <div className="bg-blue-50 p-2 rounded">
                <p className="text-xs text-gray-500">Clark Kelly - Sunday, November 17 2014 - 14:13PM</p>
                <p>texting...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white p-4 rounded shadow-sm">
        <h3 className="font-semibold mb-2">Ticket History</h3>
        <table className="w-full text-left text-xs border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Asset</th>
              <th className="p-2 border">Site</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">October 10, 2014</td>
              <td className="p-2 border">May 14, 2015</td>
              <td className="p-2 border">
                <span className="bg-orange-300 px-2 py-1 rounded text-white">Resolved</span>
              </td>
            </tr>
            <tr>
              <td className="p-2 border">Event - 25th Aug</td>
              <td className="p-2 border">May 14, 2015</td>
              <td className="p-2 border">
                <span className="bg-yellow-300 px-2 py-1 rounded">Open</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ResolveTicketModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default DashboardonsitePageSecond;
