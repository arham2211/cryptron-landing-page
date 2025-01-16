import React, { useState, useEffect } from "react";
import tether from "../../assets/tether.svg";
import bitcoin from "../../assets/bitcoin.svg";
import solana from "../../assets/solana.svg";
import receive from "../../assets/receive.png";
import swap from "../../assets/swap.png";
import buy from "../../assets/buy.png";
import PropTypes from "prop-types";
import { SlEqualizer } from "react-icons/sl";
import { TbCloudDown } from "react-icons/tb";

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
          <div className="flex md:items-center md:gap-3 md:flex-row flex-col">
            <p className="text-base">{type}</p>
            <span className="hidden sm:block text-[#AAB3BB] text-xs">
              Wallet: {wallet}
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm md:text-base">
            <p
              className={`hidden sm:block ${
                statusStyles[status.toLowerCase()]
              }`}
            >
              {status}
            </p>
            <div className="hidden sm:block bg-[#4B4B4B] h-2 w-2 rounded-full" />
            <span className="text-[#AAB3BB]">{date}</span>
          </div>
        </div>
      </div>
      <div className="text-end">
        <p className="md:text-[15px] xl:text-base">{amountUSD}</p>
        <p className="hidden sm:block text-xs">
          {amountCrypto} {cryptoSymbol}
        </p>
        <p className={`sm:hidden block ${statusStyles[status.toLowerCase()]}`}>
          {status}
        </p>
      </div>
    </div>
  );
};

const Transaction = () => {
  const initialTransactions = [
    {
      icon: tether,
      type: "Receive",
      wallet: "bvdw355509*********4gbnwou432m",
      status: "Completed",
      date: "25 Sep 2024",
      amountUSD: "$500.00",
      amountCrypto: "500.00",
      cryptoSymbol: "USDT",
      name: "Tether",
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
      name: "Bitcoin",
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
      name: "Solana",
    },
    {
      icon: bitcoin,
      type: "Withdraw",
      wallet: "bvdw355509*********4gbnwou432m",
      status: "Pending",
      date: "15 Jan 2025",
      amountUSD: "$500.00",
      amountCrypto: "500.00",
      cryptoSymbol: "USDT",
      name: "Bitcoin",
    },
    {
      icon: tether,
      type: "Buy",
      wallet: "bvdw355509*********4gbnwou432m",
      status: "Completed",
      date: "15 Jan 2025",
      amountUSD: "$500.00",
      amountCrypto: "500.00",
      cryptoSymbol: "USDT",
      name: "Tether",
    },
    {
      icon: bitcoin,
      type: "Receive",
      wallet: "bvdw355509*********4gbnwou432m",
      status: "Pending",
      date: "25 Sep 2024",
      amountUSD: "2 BTC",
      amountCrypto: "500.00",
      cryptoSymbol: "USDT",
      name: "Bitcoin",
    },

    {
      icon: solana,
      type: "Buy",
      wallet: "bvdw355509*********4gbnwou432m",
      status: "Completed",
      date: "16 Jan 2025",
      amountUSD: "$500.00",
      amountCrypto: "500.00",
      cryptoSymbol: "USDT",
      name: "Solana",
    },
  ];
  const [transactions, setTransactions] = useState([]);
  const [activeFilter, setActiveFilter] = useState("date");
  const [isVisible, setIsVisible] = useState(true);
  const [groupedTransactions, setGroupedTransactions] = useState({});

  const groupTransactions = (txs, groupBy) => {
    if (groupBy === "date") {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      return txs.reduce((acc, tx) => {
        const txDate = new Date(tx.date);
        let groupKey;
        if (txDate.toDateString() === today.toDateString()) {
          groupKey = "Today";
        } else if (txDate.toDateString() === yesterday.toDateString()) {
          groupKey = "Yesterday";
        } else {
          groupKey = tx.date;
        }

        if (!acc[groupKey]) acc[groupKey] = [];
        acc[groupKey].push(tx);
        return acc;
      }, {});
    }

    if (groupBy === "status") {
      return txs.reduce((acc, tx) => {
        const groupKey = tx.status;
        if (!acc[groupKey]) acc[groupKey] = [];
        acc[groupKey].push(tx);
        return acc;
      }, {});
    }

    if (groupBy === "coin") {
      return txs.reduce((acc, tx) => {
        const groupKey = tx.name;
        if (!acc[groupKey]) acc[groupKey] = [];
        acc[groupKey].push(tx);
        return acc;
      }, {});
    }

    return {};
  };

  useEffect(() => {
    sortData("date", initialTransactions);
  }, []);

  const toggleSort = () => {
    setIsVisible((prev) => !prev);
  };

  const sortData = (key, data = transactions) => {
    setActiveFilter(key);

    const sortedTransactions = [
      ...(data.length ? data : initialTransactions),
    ].sort((a, b) => {
      if (key === "date") {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      }
      if (key === "status") {
        return a.status.localeCompare(b.status);
      }
      if (key === "coin") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    setTransactions(sortedTransactions);
    setGroupedTransactions(groupTransactions(sortedTransactions, key));
  };

  const getButtonStyle = (key) => {
    return activeFilter === key
      ? "border-x border-[#CE1A11] p-3 text-[#CE1A11]"
      : "border-b border-[#222222]  p-3";
  };

  const downloadCSV = () => {
    const headers =
      "Type,Wallet,Status,Date,Amount (USD),Amount (Crypto),Crypto Symbol\n";
    const rows = transactions
      .map(
        (tx) =>
          `${tx.type},${tx.wallet},${tx.status},${tx.date},${tx.amountUSD},${tx.amountCrypto},${tx.cryptoSymbol}`
      )
      .join("\n");
    const csvContent = headers + rows;

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="sm:bg-[#222222] ps-4 pe-3 py-4 lg:pb-0 rounded-xl sm:h-[calc(100vh-219px)] md:h-[calc(100vh-205px)] lg:h-[calc(100vh-100px)] overflow-y-scroll">
      <div className="flex items-center justify-between mb-6">
        <h2 className="hidden sm:block pb text-lg">Transactions History</h2>
        <div className="w-full sm:w-fit">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type=""
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-[#56566B] pr rounded-lg bg-[#2A2A2A]"
              placeholder="Search"
              required
            />
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              onClick={toggleSort}
              className="text-[#56566B] absolute end-2.5 bottom-2.5 text-sm px-4 py-2"
            >
              <SlEqualizer />
            </button>
            <div
              className={`absolute bg-[#2A2A2A] text-base list-none right-0 ${
                isVisible ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col">
                <button
                  onClick={() => sortData("date")}
                  className={getButtonStyle("date")}
                >
                  Sort by date
                </button>
                <button
                  onClick={() => sortData("status")}
                  className={getButtonStyle("status")}
                >
                  Sort by status
                </button>
                <button
                  onClick={() => sortData("coin")}
                  className={getButtonStyle("coin")}
                >
                  Sort by coin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex items-center justify-between mb-5 pr">
        <div className="flex items-center gap-16">
          <p>Applied Filters:</p>
          <span className="text-xs">
            {activeFilter ? `Sorted by ${activeFilter}` : "No Filter Applied"}
          </span>
        </div>
        <div>
          <button
            onClick={downloadCSV}
            className="flex items-center gap-3 border border-[#CE1A11] py-3 px-5 rounded-xl"
          >
            <TbCloudDown />
            Download CSV
          </button>
        </div>
      </div>

      <div className="flex flex-col h-[calc(100vh-315px)] lg:h-fit">
        {Object.entries(groupedTransactions).map(([group, txs]) => (
          <div key={group}>
            <h3 className="text-lg font-semibold mb-4 mt-6">{group}</h3>
            {txs.map((transaction, index) => (
              <TransactionCard key={index} {...transaction} />
            ))}
          </div>
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
