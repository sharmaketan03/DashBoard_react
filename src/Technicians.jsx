
import { FaRegEye } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi2";
import  { useState } from "react";

const Technicians = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className=" w-[97%] min-h-screen flex justify-center mt-25">
      <div className="w-full max-w-7xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Technicians</h1>
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md" onClick={openModal}>
            + Add Technician
          </button>
        </div>

        {isModalOpen && (
        <div
          className="fixed inset-0  backdrop-blur-sm flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg w-[35%] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-2 mb-5">
              <h2 className="text-xl font-bold">Add Technician</h2>
              <button
                className="text-gray-900 text-[30px] hover:text-gray-700"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <form>
              <div className="mb-4">
                <label className="block mb-1 text-gray-700">Company Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Enter company name"
                />
              </div>
              <div className="flex gap-[10px]">
              <div className="mb-4">
                <label className="block mb-1 text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Enter email"
                />
              </div>
            
              <div className="mb-4">
                <label className="block mb-1 text-gray-700">Contact Number</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Enter contact number"
                />
              </div>
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-gray-700">ABN</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Enter ABN"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-gray-700">Address</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
                  placeholder="Enter a location"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-gray-700">Tags</label>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">Spraybooth</span>
                  <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">Warranty</span>
                  <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">Gas</span>
                  <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">Electrical</span>
                  <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">Maintenance</span>
                </div>
              </div>
              <div className="flex gap-4 mt-[30px]">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Technician
                </button>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

        <div className="rounded-md border border-gray-200 overflow-x-auto bg-white p-6">
          <table className="w-full text-sm text-left text-gray-700">
            <thead>
              <tr className="bg-blue-200 text-gray-800">
                <th className="px-6 py-3">Company</th>
                <th className="px-6 py-3">Tags</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Contact Number</th>
                <th className="px-6 py-3">Insurance</th>
                <th className="px-6 py-3 text-center"></th>
              </tr>
            </thead>
            <tbody>
            

              <tr className="border-t border-gray-400 hover:bg-gray-50">
                <td className="px-6 py-4">SXDA</td>
                <td className="px-6 py-4 flex  gap-2">
                  <span className="border px-3 py-1 rounded-full">Spraybooth</span>
                  <span className="border px-3 py-1 rounded-full">Electrical</span>
                  <span className="border px-3 py-1 rounded-full">Maintenance</span>
                </td>
                <td className="px-6 py-4">anshu@sterlinginfotech.com</td>
                <td className="px-6 py-4">9468590655</td>
                <td className="px-6 py-4">
                  <span className="bg-green-500 text-white px-6 py-1 rounded-md">Valid</span>
                </td>
                <td className="px-6 py-4 flex gap-2 justify-center">
                  <button className="p-[5px] border rounded border-gray-500 hover:bg-gray-100 cursor-pointer"><HiOutlinePencil /></button>
                  <button className="p-[5px] border rounded border-gray-500 hover:bg-gray-100 cursor-pointer"><FaRegEye /></button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-5 flex justify-between items-center text-sm text-gray-600 border-t border-gray-400 pt-4">
            <div>Page 1 of 1, showing 2 record(s) out of 2 total</div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded text-gray-400" disabled>
                &lt; Prev
              </button>
              <button className="px-3 py-1 border rounded text-gray-400" disabled>
                Next &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technicians;
