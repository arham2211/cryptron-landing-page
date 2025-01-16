import React from "react";
import tether from "../../assets/tether.svg";
import bitcoin from "../../assets/bitcoin.svg";
import solana from "../../assets/solana.svg";
import receive from "../../assets/receive.png";
import swap from "../../assets/swap.png";
import buy from "../../assets/buy.png";
import PropTypes from "prop-types";

const TransactionCard = ({
  icon,
  type,
  wallet,
  status,
  date,
  amountUSD,
  amountCrypto,
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
          <div className="flex xl:items-center xl:gap-3 xl:flex-row flex-col">
            <p className="text-base">{type}</p>
            <span className="text-[#AAB3BB] text-xs">Wallet: {wallet}</span>
          </div>
          <div className="flex items-center gap-3 lg:text-sm xl:text-base">
            <p className={statusStyles[status.toLowerCase()]}>{status}</p>
            <div className="bg-[#4B4B4B] h-2 w-2 rounded-full" />
            <span className="text-[#AAB3BB]">{date}</span>
          </div>
        </div>
      </div>
      <div className="text-end">
        <p className="lg:text-[15px] xl:text-base">{amountUSD}</p>
        <p className=" text-xs">
          {amountCrypto} {cryptoSymbol}
        </p>
      </div>
    </div>
  );
};

const Transaction = () => {
  const transactions = [
    {
      icon: tether,
      type: "Receive",
      wallet: "bvdw355509*********4gbnwou432m",
      status: "Completed",
      date: "25 Sep 2024",
      amountUSD: "$500.00",
      amountCrypto: "500.00",
      cryptoSymbol: "USDT",
    },
    {
      icon: bitcoin,
      type: "Swap",
      wallet: "bvdw355509*********4gbnwou432m",
      status: "Failed",
      date: "25 Sep 2024",
      amountUSD: "2 BTC",
      amountCrypto: "500.00",
      cryptoSymbol: "USDT",
    },

    {
      icon: solana,
      type: "Buy",
      wallet: "bvdw355509*********4gbnwou432m",
      status: "Completed",
      date: "25 Sep 2024",
      amountUSD: "$500.00",
      amountCrypto: "500.00",
      cryptoSymbol: "USDT",
    },
    {
      icon: bitcoin,
      type: "Withdraw",
      wallet: "bvdw355509*********4gbnwou432m",
      status: "Pending",
      date: "25 Sep 2024",
      amountUSD: "$500.00",
      amountCrypto: "500.00",
      cryptoSymbol: "USDT",
    },
    {
      icon: tether,
      type: "Buy",
      wallet: "bvdw355509*********4gbnwou432m",
      status: "Completed",
      date: "25 Sep 2024",
      amountUSD: "$500.00",
      amountCrypto: "500.00",
      cryptoSymbol: "USDT",
    },
    {
      icon: bitcoin,
      type: "Pending",
      wallet: "bvdw355509*********4gbnwou432m",
      status: "Failed",
      date: "25 Sep 2024",
      amountUSD: "2 BTC",
      amountCrypto: "500.00",
      cryptoSymbol: "USDT",
    },

    {
      icon: solana,
      type: "Send",
      wallet: "bvdw355509*********4gbnwou432m",
      status: "Completed",
      date: "25 Sep 2024",
      amountUSD: "$500.00",
      amountCrypto: "500.00",
      cryptoSymbol: "USDT",
    },
  ];

  return (
    <div className="hidden md:block bg-[#222222] ps-4 pe-3 py-4 rounded-xl">
      <div className="flex items-center justify-between mb-2">
        <h2 className="pb text-lg">Recent Transactions</h2>
        <button className="pr text-xs text-[#7F7F7F] hover:text-gray-400 transition-colors me-5">
          View All Transactions
        </button>
      </div>

      <div className="mb-3 text-[#AAB3BB] text-sm pr">
        <p>25 Sep 2024</p>
      </div>

      <div className="flex flex-col overflow-y-scroll md:h-[630px] lg:h-[calc(100vh-417px)] xl:h-[calc(100vh-453px)] pe-3">
        {transactions.map((transaction, index) => (
          <TransactionCard key={index} {...transaction} />
        ))}
      </div>
    </div>
  );
};

TransactionCard.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  wallet: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["Completed", "Failed", "Pending"]).isRequired,
  date: PropTypes.string.isRequired,
  amountUSD: PropTypes.string.isRequired,
  amountCrypto: PropTypes.string.isRequired,
  cryptoSymbol: PropTypes.string.isRequired,
};

export default Transaction;
