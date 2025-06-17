import React, { useState } from "react";
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { FaLongArrowAltDown } from "react-icons/fa";
import { MdOutlineNetworkCell } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import { PiLessThanBold } from "react-icons/pi";
import Othermodal from "./Othermodal";
import UserForm from "./Userform";
function Users() {
  const [isOpen, setIs] = useState(false);
  const [pencilpop, setpencilpop] = useState(false);
  function Adduser() {
    if (!isOpen) {
      setIs(true);
    } else {
      setIs(false);
      console.log("hello");
    }
  }
  function penci() {
    if (!pencilpop) {
      setpencilpop(true);
    } else {
      setpencilpop(false);
    }
  }
  function delete1() {
    alert("Are You Sure ?");
  }
  return (
    <div>
      <div className="w-[97%] mr-7 mt-25">
        <div className="flex   items-center justify-between mt-5">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            className="bg-sky-500 hover:bg-sky-600 rounded text-white px-4 py-2 mt-5 font-medium text-xs"
            onClick={Adduser}
          >
            + Add Users
          </button>
          {isOpen && <Othermodal onClose={() => setIs(false)}></Othermodal>}
        </div>
        <div className="border border-gray-300 rounded-lg p-5 mt-5 ">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-[#dff6ff] text-sky-600">
                <tr className="text-xs">
                  <th className=" px-4 py-2 text-left">Name</th>
                  <th className=" py-2 text-left">Email</th>
                  <th className=" py-2 text-left">Contact Number</th>
                  <th className=" py-2 text-left">Role Type</th>
                  <th className=" py-2 text-left">Status</th>
                  <th className="px-2 py-4 text-left flex">
                    <FaLongArrowAltDown />
                    <MdOutlineNetworkCell />
                  </th>
                  <th className="px-2 py-2 text-left"></th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-t border-gray-300  hover:bg-gray-100">
                  <td className="px-4 py-3">Clark Kelly</td>
                  <td> kell@sterlinginfotech.com</td>
                  <td>435345</td>
                  <td>Administrator</td>
                  <td>
                    <button className="bg-green-500 text-white px-5 py-1 rounded">
                      Active
                    </button>
                  </td>
                  <td></td>
                  <td className="flex items-center gap-2 py-3">
                    <span
                      className="border-1 border-gray-600 rounded p-1 text-[15px] hover:bg-sky-100"
                      onClick={penci}
                    >
                      <GoPencil />
                    </span>
                    {pencilpop && (
                      <UserForm onClose={() => setpencilpop(false)}></UserForm>
                    )}

                    <span
                      className="border-1 border-gray-600 rounded p-1 text-[15px] hover:bg-sky-100"
                      onClick={delete1}
                    >
                      <MdDeleteOutline />
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-gray-300  py-3  hover:bg-gray-100">
                  <td className="px-4 py-3">Shankey Jn</td>
                  <td>shankey@sterlinginfotech.com</td>
                  <td>9876543</td>
                  <td>Support Admin</td>
                  <td>
                    <button className="bg-green-500 text-white px-5 py-1 rounded">
                      Active
                    </button>
                  </td>
                  <td></td>
                  <td className="flex items-center gap-2 py-3">
                    <span
                      className="border-1 border-gray-600 rounded p-1 text-[15px] hover:bg-sky-100"
                      onClick={penci}
                    >
                      <GoPencil />
                    </span>
                    {pencilpop && (
                      <UserForm onClose={() => setpencilpop(false)}></UserForm>
                    )}
                    <span
                      className="border-1 border-gray-600 rounded p-1 text-[15px] hover:bg-sky-100"
                      onClick={delete1}
                    >
                      <MdDeleteOutline />
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-gray-300  py-3  hover:bg-gray-100">
                  <td className="px-4 py-3">Abhishek Jain</td>
                  <td>abhishek@sterlinginfotech.com</td>
                  <td>876765</td>
                  <td>Support Admin</td>
                  <td>
                    <button className="bg-green-500 text-white px-5 py-1 rounded">
                      Active
                    </button>
                  </td>
                  <td></td>
                  <td className="flex items-center gap-2 py-3">
                    <span
                      className="border-1 border-gray-600 rounded p-1 text-[15px] hover:bg-sky-100"
                      onClick={penci}
                    >
                      <GoPencil />
                    </span>
                    {pencilpop && (
                      <UserForm onClose={() => setpencilpop(false)}></UserForm>
                    )}
                    <span
                      className="border-1 border-gray-600 rounded p-1 text-[15px] hover:bg-sky-100"
                      onClick={delete1}
                    >
                      <MdDeleteOutline />
                    </span>
                  </td>
                </tr>
                <tr className="border-t border-gray-300  py-3  hover:bg-gray-100">
                  <td className="px-4 py-3">Support Admin</td>
                  <td>support@test.com</td>
                  <td>123244444</td>
                  <td>Support Admin</td>
                  <td>
                    <button className="bg-green-500 text-white px-5 py-1 rounded">
                      Active
                    </button>
                  </td>
                  <td></td>
                  <td className="flex items-center gap-2 py-3">
                    <span
                      className="border-1 border-gray-600 rounded p-1 text-[15px] hover:bg-sky-100"
                      onClick={penci}
                    >
                      <GoPencil />
                    </span>
                    {pencilpop && (
                      <UserForm onClose={() => setpencilpop(false)}></UserForm>
                    )}
                    <span
                      className="border-1 border-gray-600 rounded p-1 text-[15px] hover:bg-sky-100"
                      onClick={delete1}
                    >
                      <MdDeleteOutline />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end px-4 py-1 mt-5 text-gray-500 text-xs">
            <button className="flex items-center border border-gray-300">
              <PiLessThanBold />
              Prev
            </button>
            <button className="flex items-center border border-gray-300">
              Next
              <FaGreaterThan />
            </button>
          </div>
          <div className="flex justify-end mt-5 text-gray-500">
            <h1>Page 1 of 1, showing 4 record(s) out of 4 total</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
