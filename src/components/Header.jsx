import React, { useState } from "react";
import CrytonLogo from "../assets/Cryptonlogo.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiArrowLeftSLine } from "react-icons/ri";
import verify from "../assets/verify.png";
import vector from "../assets/Vector.png";
import bell from "../assets/bell.png";
import user from "../assets/user.png";
import { useLocation, NavLink } from "react-router-dom";

const Header = ({ isSidebarVisible, toggleSidebar }) => {
  const [notification, setnotification] = useState(true);
  const location = useLocation();

  return (
    <header>
      {!location.pathname.startsWith("/wallet") && (
        <div className="md:hidden flex mt-4 mb-2 mx-2 sm:mx-4 p-4 bg-[#222222] rounded-xl justify-between items-center">
          <a className="flex items-center space-x-4 cursor-pointer">
            <div className="bg-[#B0FFD1] rounded-xl">
              <img className="h-12 w-12" src={user} alt="User" />
            </div>
            <div>
              <p className="pb text-lg">Jhon David</p>
              <p className="text-[#8F8FAC] text-sm">jdavid@email.com</p>
            </div>
          </a>

          <div
            onClick={() => setnotification(!notification)}
            className="relative rounded-xl p-3 border-2 border-[#8F8FAC] cursor-pointer"
          >
            {notification && (
              <div className="absolute top-[0.85rem] right-[0.65rem] bg-[#01EB63] border-2 border-[#FFFFFF] h-[0.6rem] w-[0.6rem] rounded-full"></div>
            )}
            <img src={bell} alt="Notification" />
          </div>
        </div>
      )}

      {location.pathname.startsWith("/wallet") && (
        <div className="md:hidden flex mt-4 mb-4 mx-2 sm:mx-4 p-4 py-5 bg-[#222222] rounded-xl justify-between items-center">
          <div className="flex items-center gap-4">
            <NavLink
              to="/"
              className="border-2 rounded-xl p-1 cursor-pointer text-3xl"
            >
              <RiArrowLeftSLine />
            </NavLink>
            <div className="pb text-lg sm:text-2xl">
              <h1>Coin Detail</h1>
            </div>
          </div>
          <div className="text-sm sm:text-lg text-[#7F7F7F] pr">
            <p>View History</p>
          </div>
        </div>
      )}

      <div className="hidden md:block ps-6 pe-4 py-3 lg:py-3">
        <div className="flex flex-row lg:items-center">
          {/* Logo and Welcome Section */}
          <div className="flex flex-col sm:flex-row items-center mb-4 md:mb-0">
            <a href="/" className="flex items-center text-3xl cursor-pointer mb-3 sm:mb-0">
              <img src={CrytonLogo} alt="Cryptron Logo" />
              <span className="ml-1">Crpytron</span>
            </a>
            <div className="md:hidden lg:flex items-center mt-2 sm:mt-0 sm:ml-7">
              <div className="relative text-white p-1 rounded-md bg-[#464646]">
                <hr className="absolute -z-10 h-24 w-[0.5px] -top-9 left-3 bg-[#282828]" />
                {isSidebarVisible ? (
                  <IoIosArrowBack
                    onClick={toggleSidebar}
                    className="cursor-pointer"
                  />
                ) : (
                  <IoIosArrowForward
                    onClick={toggleSidebar}
                    className="cursor-pointer"
                  />
                )}
              </div>
              <div className="pm text-[18px] sm:text-[22px] xl:text-[26px] ml-4">
                Welcome to Crypton Wallet
              </div>
            </div>
          </div>

          {/* Navigation and User Profile */}
          <div className={`flex flex-row items-center ml-auto space-y-0 mt-0`}>
            <nav className="flex flex-row items-center space-y-0 space-x-2 xl:space-x-4">
              <button className="border-2 border-[#CE1A11] bg-[#ce1a110c] px-3 py-2 rounded-xl">
                <div className="flex items-center justify-center space-x-1">
                  <img src={verify} alt="Verify" />
                  <p className="text-[#CE1A11] text-[16px]">Unverified</p>
                </div>
              </button>

              <a className="border-2 border-[#323232] rounded-xl p-3 cursor-pointer">
                <img src={vector} alt="Vector" />
              </a>

              <div
                onClick={() => setnotification(!notification)}
                className="relative rounded-xl p-3 border-2 border-[#323232] cursor-pointer"
              >
                {notification && (
                  <div className="absolute top-[0.85rem] right-[0.65rem] bg-[#01EB63] border-1 border-[#222222] h-[0.6rem] w-[0.6rem] rounded-full"></div>
                )}
                <img src={bell} alt="Notification" />
              </div>
            </nav>

            {/* User Profile */}
            <a className="flex items-center space-x-4 cursor-pointer mt-4 lg:mt-0 lg:ml-4">
              <div className="bg-[#B0FFD1] rounded-xl">
                <img className="h-12 w-12" src={user} alt="User" />
              </div>
              <div>
                <p className="pb text-lg">Jhon David</p>
                <p className="text-[#8F8FAC] text-sm">jdavid@email.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      {location.pathname.startsWith("/wallet") && (
        <div className="hidden lg:hidden md:flex border-t-2 border-[#282828]  mb-2 px-5 py-3 bg-[#222222] justify-between items-center">
          <div className="flex items-center gap-4">
            <NavLink
              to="/"
              className="border-2 rounded-xl p-1 cursor-pointer text-2xl"
            >
              <RiArrowLeftSLine />
            </NavLink>
            <div className="pb text-lg sm:text-2xl">
              <h1>Coin Detail</h1>
            </div>
          </div>
          <div className=" text-[#7F7F7F] pr">
            <p>View History</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
