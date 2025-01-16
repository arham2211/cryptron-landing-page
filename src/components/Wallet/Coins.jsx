import React from "react";
import tron from "../../assets/tron.svg";
import bitcoin from "../../assets/bitcoin.svg";
import binance_coin from "../../assets/binance_coin.png";
import ethereum from "../../assets/ethereum.png";
import solana from "../../assets/solana.svg";
import polygon from "../../assets/polygon.png";
import { RxCopy } from "react-icons/rx";

const CoinList = ({ icon, name, wallet, amount, symbol, value }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(wallet)
      .then(() => {
        alert("Wallet address copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy wallet address: ", err);
      });
  };
  return (
    <div className="pr bg-[#2A2A2A] flex items-center justify-between p-4 rounded-xl mb-3">
      <div className="xl:flex items-center xl:space-x-3">
        <div className="relative mb-3 xl:mb-0">
          <img className="h-10 w-10" src={icon} alt={`${name} icon`} />
        </div>
        <div>
          <div className="pb text-[1.1rem] mb-1">
            <h2>
              {name} ({symbol})
            </h2>
          </div>
          <div className="xl:flex items-center gap-4 text-sm">
            <p>Wallet Address: </p>
            <div className="flex items-center gap-4">
              <span className="text-[#E06963] text-xs">{wallet}</span>
              <div
                onClick={handleCopy}
                className="p-2 border border-[#505050] rounded-full cursor-pointer"
              >
                <RxCopy className="text-[#E06963] transform -scale-x-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-end pb">
        <p className="text-2xl">{value}</p>
        <p className="pr text-xs">{amount}</p>
      </div>
    </div>
  );
};
const Coins = () => {
  const transactions = [
    {
      icon: bitcoin,
      name: "Bitcoin",
      wallet: "bvdw355509*********4gbnwou432m",
      amount: "$80,399.12",
      symbol: "BTC",
      value: "1.2",
    },

    {
      icon: binance_coin,
      name: "Binance Coin",
      wallet: "bvdw355509*********4gbnwou432m",
      amount: "$80,399.12",
      symbol: "BNB",
      value: "1.2",
    },
    {
      icon: ethereum,
      name: "Ethereum",
      wallet: "bvdw355509*********4gbnwou432m",
      amount: "$80,399.12",
      symbol: "ETC",
      value: "1.2",
    },
    {
      icon: tron,
      name: "Tron",
      wallet: "bvdw355509*********4gbnwou432m",
      amount: "$80,399.12",
      symbol: "TRON",
      value: "1.2",
    },
    {
      icon: solana,
      name: "Solana",
      wallet: "bvdw355509*********4gbnwou432m",
      amount: "$80,399.12",
      symbol: "SOL",
      value: "1.2",
    },

    {
      icon: polygon,
      name: "Polygon",
      wallet: "bvdw355509*********4gbnwou432m",
      amount: "$80,399.12",
      symbol: "MATIC",
      value: "1.2",
    },
  ];

  return (
    <div className="bg-[#222222] p-4 rounded-xl w-full hidden md:block">
      <div className="pb mb-3">
        <h3>Coins</h3>
      </div>
      <div className="flex flex-col overflow-y-scroll h-[calc(100vh-390px)] pe-3 ">
        {transactions.map((transaction, index) => (
          <CoinList key={index} {...transaction} />
        ))}
      </div>
    </div>
  );
};

export default Coins;
