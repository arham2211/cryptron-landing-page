import React, { useState } from "react";
import { FiHome } from "react-icons/fi";
import { LuWallet } from "react-icons/lu";
import { ImArrowUpRight2, ImArrowDownLeft2 } from "react-icons/im";
import { TbArrowsExchange } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { BiSolidUserRectangle } from "react-icons/bi";
import { VscChecklist } from "react-icons/vsc";
import more from "../assets/more.png";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const BottomNavBar = () => {
  const location = useLocation();
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const mainNavItems = [
    { icon: <FiHome />, label: "Home", path: "/" },
    { icon: <TbArrowsExchange />, label: "Swap", path: "/swap" },
    { icon: <MdPayment />, label: "Buy/Sell", path: "/buysell" },
    { icon: <VscChecklist />, label: "History", path: "/history" },
  ];

  const moreMenuItems = [
    { icon: <LuWallet />, label: "Wallet", path: "/wallet" },
    { icon: <ImArrowUpRight2 />, label: "Send", path: "/send" },
    { icon: <ImArrowDownLeft2 />, label: "Receive", path: "/receive" },
    { icon: <BiSolidUserRectangle />, label: "Address", path: "/address" },
  ];

  const NavItem = ({ icon, label, path }) => (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`bg-[#CE1A11] w-7 h-3 rounded-b-lg ${
          location.pathname === path ? "" : "invisible"
        }`}
      ></div>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `text-[#757575] flex items-center gap-2 justify-center flex-col py-5 sm:py-6 px-2 rounded-lg group ${
            isActive ? "text-white" : ""
          }`
        }
      >
        {({ isActive }) => (
          <>
            <div className={`menu ${isActive ? "text-[#CE1A11]" : ""}`}>
              {icon}
            </div>
            <span className="text-base">{label}</span>
          </>
        )}
      </NavLink>
    </div>
  );

  return (
    <div className="flex w-full sm:w-fit items-center px-1 sm:px-7 pr text-lg sm:text-xl justify-between sm:gap-[3rem]">
      {/* <AnimatePresence mode="wait"> */}
      {showMoreMenu
        ? moreMenuItems.map((item, index) => (
            <NavItem
              key={`more-${index}`}
              icon={item.icon}
              label={item.label}
              path={item.path}
            />
          ))
        : mainNavItems.map((item, index) => (
            <NavItem
              key={`main-${index}`}
              icon={item.icon}
              label={item.label}
              path={item.path}
            />
          ))}
      {/* </AnimatePresence> */}
      <div className="flex flex-col justify-center items-center mt-4">
        <button
          onClick={() => setShowMoreMenu(!showMoreMenu)}
          className={`text-[#757575] flex items-center gap-2 justify-center flex-col px-2 rounded-lg ${
            showMoreMenu ? "text-[#757575]" : "text-[#757575]"
          }`}
        >
          <img src={more} alt="more" />
          <span className="text-base">More</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavBar;
