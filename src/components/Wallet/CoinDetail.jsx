import React, { useState } from "react";
import bitcoin from "../../assets/bitcoin.svg";
import tether from "../../assets/tether.svg";
import solana from "../../assets/solana.svg";
import Frame from "../../assets/Frame.png";
import { ImArrowUpRight2, ImArrowDownLeft2 } from "react-icons/im";
import { TbArrowsExchange } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import face1 from "../../assets/face1.png";
import face2 from "../../assets/face2.png";
import face3 from "../../assets/face3.png";
import face4 from "../../assets/face4.png";
import face5 from "../../assets/face5.png";
import addSign from "../../assets/AddSign.png";
import receive from "../../assets/receive.png";
import swap from "../../assets/swap.png";
import buy from "../../assets/buy.png";
import { NavLink } from "react-router-dom";

const TransactionHistory = ({
  icon,
  type,
  status,
  date,
  amountUSD,
  cryptoSymbol,
}) => {
  const statusStyles = {
    completed: "text-[#8FFFBE]",
    failed: "text-[#CE1A11]",
    pending: "text-[#F7931A]",
  };

  return (
    <div className="pr bg-[#2A2A2A] flex items-center justify-between p-4 rounded-xl mb-3">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img className="h-10 w-10" src={icon} alt={`${cryptoSymbol} icon`} />
          {type === "Receive" && (
            <img className="absolute bottom-0 -right-1" src={receive} alt="" />
          )}
          {type === "Swap" && (
            <img className="absolute bottom-0 -right-1" src={swap} alt="" />
          )}
          {type === "Buy" && (
            <img className="absolute bottom-0 -right-1" src={buy} alt="" />
          )}
          {type === "Withdraw" && (
            <img className="absolute bottom-0 -right-1" src={swap} alt="" />
          )}
        </div>
        <div>
          <div className="flex flex-col">
            <p className="text-xl md:text-base">{type}</p>
          </div>
          <div className="flex items-center gap-3 text-base">
            <span className="text-[#AAB3BB]">{date}</span>
          </div>
        </div>
      </div>
      <div className="text-end">
        <p className="text-lg">{amountUSD}</p>
        <p className={`text-lg ${statusStyles[status.toLowerCase()]}`}>
          {status}
        </p>
      </div>
    </div>
  );
};

const CoinDetail = () => {
  const quickTransferProfiles = [
    { src: face1, color: "#01F070" },
    { src: face2, color: "#F2C44D" },
    { src: face3, color: "#F65EBA" },
    { src: face4, color: "#52F3A6" },
    { src: face5, color: "#FFD4B8" },
  ];
  const initialTransactions = [
    {
      icon: tether,
      type: "Receive",
      status: "Completed",
      date: "25 Sep 2024",
      amountUSD: "$500.00",
      cryptoSymbol: "USDT",
    },
    {
      icon: bitcoin,
      type: "Swap",
      status: "Failed",
      date: "25 Sep 2024",
      amountUSD: "2 BTC",
      cryptoSymbol: "USDT",
    },

    {
      icon: solana,
      type: "Buy",
      status: "Completed",
      date: "25 Sep 2024",
      amountUSD: "$500.00",
      cryptoSymbol: "USDT",
    },
    {
      icon: bitcoin,
      type: "Withdraw",
      status: "Pending",
      date: "25 Sep 2024",
      amountUSD: "$500.00",
      cryptoSymbol: "USDT",
    },
    {
      icon: tether,
      type: "Buy",
      status: "Completed",
      date: "26 Sep 2025",
      amountUSD: "$500.00",
      cryptoSymbol: "USDT",
    },
    {
      icon: bitcoin,
      type: "Receive",
      status: "Pending",
      date: "25 Sep 2024",
      amountUSD: "2 BTC",
      cryptoSymbol: "USDT",
    },

    {
      icon: solana,
      type: "Buy",
      status: "Completed",
      date: "16 Jan 2025",
      amountUSD: "$500.00",
      cryptoSymbol: "USDT",
    },
  ];
  const [transactions, setTransactions] = useState(initialTransactions);
  return (
    <div className="md:bg-[#222222] md:p-4 py-4 px-2 pr-1 rounded-xl overflow-y-scroll w-full md:w-[470px] xl:w-[520px] 2xl:w-fit">
      <div className="md:h-[calc(100vh-350px)] flex flex-col md:justify-between">
        <div className="flex justify-between items-center overflow-scroll-y pb-3">
          <div className="pb gap-3 flex items-center">
            <img src={bitcoin} alt="" />
            <p className="md:text-base sm:text-xl text-lg">Bitcoin (BTC)</p>
          </div>
          <span className="md:text-xs sm:text-lg text-[#7F7F7F]">History</span>
        </div>
        <div className="md:text-4xl sm:text-5xl text-3xl pb mb-3">
          <h1>$81,910.00</h1>
        </div>
        <div className="flex justify-center">
          <img className="w-[580px]" src={Frame} alt="frame" />
        </div>
        <div className="flex flex-wrap sm:flex-nowrap md:flex-wrap xl:flex-nowrap items-center justify-between md:justify-center lg:justify-evenly xl:justify-between sm:gap-3 my-10">
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
        <div className="block text-start mb-8 pb-0 md:mb-0 md:pb-8">
          <p className="pr mb-6 md:text-base sm:text-2xl text-base">
            Quick transfer
          </p>
          <div className="flex gap-0 xl:gap-0 lg:gap-5 md:gap-7 flex-nowrap md:flex-wrap xl:flex-nowrap items-center justify-between md:justify-center lg:justify-evenly xl:justify-between">
            {quickTransferProfiles.map((item, index) => (
              <div
                key={index}
                className="h-11 w-11 sm:h-16 sm:w-16 md:h-11 md:w-11 rounded-full flex items-center justify-center"
                style={{ backgroundColor: item.color }}
              >
                <img
                  className="sm:h-12 sm:w-12 md:h-fit md:w-fit"
                  src={item.src}
                  alt={`Face ${index + 1}`}
                />
              </div>
            ))}
            <div className="cursor-pointer">
              <img
                className="sm:h-16 sm:w-16 md:h-fit md:w-fit"
                src={addSign}
                alt="Add Sign"
              />
            </div>
          </div>
        </div>

        <div className="flex md:hidden flex-col">
          <div className="pr flex items-center justify-between mb-7 ">
            <p className="sm:text-2xl">Transaction History</p>
            <NavLink
              to="/history"
              className="text-xs sm:text-lg text-[#7F7F7F]"
            >
              View All Transactions
            </NavLink>
          </div>
          {transactions.map((transaction, index) => (
            <TransactionHistory key={index} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
