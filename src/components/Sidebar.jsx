import React from "react";
import { FiHome, FiSettings } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import { ImArrowUpRight2, ImArrowDownLeft2 } from "react-icons/im";
import { TbArrowsExchange, TbLogout } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { BiSolidUserRectangle } from "react-icons/bi";
import { VscChecklist } from "react-icons/vsc";
import { NavLink, useLocation } from "react-router-dom";
import BottomNavBar from "./BottomNavBar";

function Sidebar({ isVisible }) {
  const location = useLocation();
  return (
    <>
      {!location.pathname.startsWith("/wallet") && (
        <div className="fixed w-full rounded-t-[2rem] z-10 bottom-0 flex flex-col justify-center items-center lg:hidden bg-[#222222]">
          <BottomNavBar />
          <div className="bg-[#323232] w-52 h-1 rounded-2xl"></div>
        </div>
      )}
      <hr
        className={`w-48 left-3 fixed border-[#282828] 
          hidden 
          lg:${isVisible ? "flex" : "hidden"}`}
      />
      <div
        className={`py-5 pl-1 border-r-2 border-[#282828] bg-[#222222] hidden lg:${
          isVisible ? "flex flex-col" : "hidden"
        }`}
      >
        <p className="ml-3 text-[#7B7B7B] pr mb-2">Main</p>
        <div className="flex flex-col justify-between h-[calc(100vh-146px)] w-[13.4rem]">
          <ul className="space-y-1 pr">
            <li className="mr-3 ml-1">
              <NavLink
                to="/"
                activeclassname="active"
                className="flex items-center p-2 rounded-lg hover:bg-[#2D2D2D] group"
              >
                <FiHome className="group-hover:text-[#CE1A11] icon" />
                <span className="ml-3">Dashboard</span>
              </NavLink>
            </li>
            <li className="mr-3 ml-1">
              <NavLink
                to="/wallet"
                activeclassname="active"
                className="flex items-center p-2 rounded-lg hover:bg-[#2D2D2D] group"
              >
                <LuWallet className="group-hover:text-[#CE1A11] icon" />
                <span className="ml-3">Wallet</span>
              </NavLink>
            </li>
            <li className="mr-3 ml-1">
              <NavLink
                to="send"
                activeclassname="active"
                className="flex items-center p-2 rounded-lg hover:bg-[#2D2D2D] group"
              >
                <ImArrowUpRight2 className="group-hover:text-[#CE1A11] icon" />
                <span className="ml-3">Send</span>
              </NavLink>
            </li>
            <li className="mr-3 ml-1">
              <NavLink
                to="receive"
                activeclassname="active"
                className="flex items-center p-2 rounded-lg hover:bg-[#2D2D2D] group"
              >
                <ImArrowDownLeft2 className="group-hover:text-[#CE1A11] icon" />
                <span className="ml-3">Receive</span>
              </NavLink>
            </li>
            <li className="mr-3 ml-1">
              <NavLink
                to="swap"
                activeclassname="active"
                className="flex items-center p-2 rounded-lg hover:bg-[#2D2D2D] group"
              >
                <TbArrowsExchange className="group-hover:text-[#CE1A11] icon" />
                <span className="ml-3">Swap</span>
              </NavLink>
            </li>
            <li className="mr-3 ml-1">
              <NavLink
                to="buysell"
                activeclassname="active"
                className="flex items-center p-2 rounded-lg hover:bg-[#2D2D2D] group"
              >
                <MdPayment className="group-hover:text-[#CE1A11] icon" />
                <span className="ml-3">Buy/Sell</span>
              </NavLink>
            </li>
            <li className="mr-3 ml-1">
              <NavLink
                to="address"
                activeclassname="active"
                className="flex items-center p-2 rounded-lg hover:bg-[#2D2D2D] group"
              >
                <BiSolidUserRectangle className="group-hover:text-[#CE1A11] icon" />
                <span className="ml-3">Address book</span>
              </NavLink>
            </li>
            <li className="mr-3 ml-1">
              <NavLink
                to="history"
                activeclassname="active"
                className="flex items-center p-2 rounded-lg hover:bg-[#2D2D2D] group"
              >
                <VscChecklist className="group-hover:text-[#CE1A11] icon" />
                <span className="ml-3">Transaction History</span>
              </NavLink>
            </li>
          </ul>
          <ul className="pr">
            <li className="mr-3 ml-1">
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-[#2D2D2D] group"
              >
                <FiSettings className="group-hover:text-[#CE1A11]" />
                <span className="ml-3">Settings</span>
              </a>
            </li>
            <li className="mr-3 ml-1">
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-[#2D2D2D]"
              >
                <TbLogout className="text-[#CE1A11]" />
                <span className="ml-3 text-[#CE1A11]">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
