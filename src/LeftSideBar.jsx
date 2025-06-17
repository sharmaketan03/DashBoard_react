import React from "react";
import { RxDashboard } from "react-icons/rx";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { FiArchive } from "react-icons/fi";
import { CiFolderOn } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { BsBox2 } from "react-icons/bs";
import { GoTools } from "react-icons/go";
import { LuPhone } from "react-icons/lu";
import { CiFaceSmile } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const linkClasses = ({ isActive }) =>
  `flex items-center gap-3 px-[20px] py-[10px] rounded-md text-[12px] font-medium ${
    isActive
      ? "bg-blue-200 text-sky-600"
      : "hover:bg-blue-200 hover:text-blue-400 text-gray-700"
  }`;

const LeftSideBar = () => {
  return (
    <>
      <div className="bg-sky-50 fixed top-[0px] mt-[62px] overflow-auto">
        <div className="w-[280px] text-gray-700 min-h-screen shadow-md">
          <ul className="pt-6 space-y-1 px-4 text-sm">
            <li>
              <NavLink to="/" className={linkClasses}>
                <RxDashboard className="text-lg" /> Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink to="/support" className={({ isActive }) =>
                `flex items-center justify-between px-[20px] py-[10px] rounded-md text-[12px] font-medium ${
                  isActive
                    ? "bg-sky-100 text-sky-600"
                    : "hover:bg-blue-200 hover:text-blue-400 text-gray-700"
                }`
              }>
                <span className="flex items-center gap-3">
                  <CiBookmark className="text-lg" /> Support Tickets
                </span>
                <span className="text-xs bg-sky-500 text-white px-2 py-0.5 rounded-full">
                  5
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/jobcard" className={linkClasses}>
                <TbShoppingBag className="text-lg" /> Job Cards
              </NavLink>
            </li>

            <li>
              <NavLink to="/clients" className={linkClasses}>
                <CiFaceSmile className="text-lg" /> Clients
              </NavLink>
            </li>

            <li>
              <NavLink to="/Assets" className={linkClasses}>
                <CiFolderOn className="text-lg" /> Assets
              </NavLink>
            </li>

            <li>
              <NavLink to="/Contact" className={linkClasses}>
                <LuPhone className="text-lg" /> Contacts
              </NavLink>
            </li>

            <li>
              <NavLink to="/technicians" className={({ isActive }) =>
                `flex items-center justify-between px-[20px] py-[10px] rounded-md text-[12px] font-medium ${
                  isActive
                    ? "bg-sky-100 text-sky-600"
                    : "hover:bg-blue-200 hover:text-blue-400 text-gray-700"
                }`
              }>
                <span className="flex items-center gap-3">
                  <GoTools className="text-lg" /> Technicians
                </span>
                <span className="text-xs bg-sky-500 text-white px-2 py-0.5 rounded-full">
                  2
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/ToInvoice" className={({ isActive }) =>
                `flex items-center justify-between px-[20px] py-[10px] rounded-md text-[12px] font-medium ${
                  isActive
                    ? "bg-sky-100 text-sky-600"
                    : "hover:bg-blue-200 hover:text-blue-400 text-gray-700"
                }`
              }>
                <span className="flex items-center gap-3">
                  <BsBox2 className="text-lg" /> To Invoice
                </span>
                <span className="text-xs bg-sky-500 text-white px-2 py-0.5 rounded-full">
                  0
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/Resoursec" className={linkClasses}>
                <CiFolderOn className="text-lg" /> Resources
              </NavLink>
            </li>

            <li>
              <NavLink to="/Archive" className={linkClasses}>
                <FiArchive className="text-lg" /> Archive
              </NavLink>
            </li>

            <li>
              <NavLink to="/Setting" className={linkClasses}>
                <IoSettingsOutline className="text-lg" /> Settings
              </NavLink>
            </li>

            <li>
              <NavLink to="/users" className={linkClasses}>
                <AiOutlineUser className="text-lg" /> Users
              </NavLink>
            </li>

            <li>
              <NavLink to="#" className={linkClasses}>
                <MdLogout className="text-lg" /> Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
