import React, { useState, useEffect } from "react";
import { ImArrowUpRight2, ImArrowDownLeft2 } from "react-icons/im";
import { TbArrowsExchange } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import face1 from "../../assets/face1.png";
import face2 from "../../assets/face2.png";
import face3 from "../../assets/face3.png";
import face4 from "../../assets/face4.png";
import face5 from "../../assets/face5.png";
import addSign from "../../assets/AddSign.png";
import Assets from "./Assets";

const Balance = () => {
  const quickTransferProfiles = [
    { src: face1, color: "#01F070" },
    { src: face2, color: "#F2C44D" },
    { src: face3, color: "#F65EBA" },
    { src: face4, color: "#52F3A6" },
    { src: face5, color: "#FFD4B8" },
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <>
      <div className="bg-[#222222] mx-2 sm:mx-4 mt-4 sm:mb-4 text-center py-5 px-2 lg:py-5 lg:px-2 sm:px-4 rounded-xl">
        <div>
          <p className="pr text-[1rem] lg:text-[13px] mb-2">Total balance</p>

          <span className="pb text-3xl sm:text-5xl lg:text-3xl">
            {formatCurrency(81910.0)}
          </span>
        </div>
        <div className="flex flex-nowrap md:flex-wrap lg:flex-nowrap items-center justify-between md:justify-center lg:justify-between sm:gap-3 my-6">
          <div className="bg-gradient-border rounded-xl inline-block p-[1px] pe-[3px]">
            <div className="flex flex-wrap w-[4.5rem] h-20 sm:text-xl lg:text-base flex-col items-center sm:w-28 sm:h-28 lg:w-[4.2rem] lg:h-16 pr space-y-1 justify-center rounded-xl bg-[#343434]">
              <ImArrowUpRight2 />
              <span>Send</span>
            </div>
          </div>
          <div className="bg-gradient-border rounded-xl inline-block p-[1px] pr-[3px]">
            <div className="flex flex-wrap w-[4.5rem] h-20 sm:text-xl lg:text-base flex-col items-center sm:w-28 sm:h-28 lg:w-[4.2rem] lg:h-16 pr space-y-1 justify-center rounded-xl bg-[#343434]">
              <ImArrowDownLeft2 />
              <span>Receive</span>
            </div>
          </div>
          <div className="bg-gradient-border rounded-xl inline-block p-[1px] pr-[3px]">
            <div className="flex flex-wrap w-[4.5rem] h-20 sm:text-xl lg:text-base flex-col items-center sm:w-28 sm:h-28 lg:w-[4.2rem] lg:h-16 pr space-y-1 justify-center rounded-xl bg-[#343434]">
              <TbArrowsExchange />
              <span>Swap</span>
            </div>
          </div>
          <div className="bg-gradient-border rounded-xl inline-block p-[1px] pr-[3px]">
            <div className="flex flex-wrap w-[4.5rem] h-20 sm:text-xl lg:text-base flex-col items-center sm:w-28 sm:h-28 lg:w-[4.2rem] lg:h-16 pr space-y-1 justify-center rounded-xl bg-[#343434]">
              <MdPayment />
              <span>Buy</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block text-start mb-4 pe-3">
          <p className="pr mb-3">Quick transfer</p>
          <div className="flex gap-0 lg:gap-0 md:gap-7 flex-nowrap md:flex-wrap lg:flex-nowrap items-center justify-between md:justify-center lg:justify-between">
            {quickTransferProfiles.map((item, index) => (
              <div
                key={index}
                className="h-11 w-11 rounded-full flex items-center justify-center"
                style={{ backgroundColor: item.color }}
              >
                <img src={item.src} alt={`Face ${index + 1}`} />
              </div>
            ))}
            <div className="cursor-pointer">
              <img src={addSign} alt="" />
            </div>
          </div>
        </div>
        <div className="hidden md:block text-start md:h-[450px] lg:h-fit">
          <p className="pr mb-2">Your Assets</p>
          <Assets />
        </div>
      </div>
    </>
  );
};

export default Balance;
