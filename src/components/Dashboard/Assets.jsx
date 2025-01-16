import React from "react";
import bitcoin from "../../assets/bitcoin.svg";
import tron from "../../assets/tron.svg";
import solana from "../../assets/solana.svg";
import polygon from "../../assets/polygon.png";
import binance_coin from "../../assets/binance_coin.png";

const assets = [
  {
    name: "Bitcoin (BTC)",
    logo: bitcoin,
    amount: 1.2,
    price: "$76,296.60",
    change: "-0.01%",
    value: "$80,399.12",
  },
  {
    name: "Tron (TRX)",
    logo: tron,
    amount: 15,
    price: "$225.65",
    change: "+0.01%",
    value: "$3,375.67",
  },
  {
    name: "Solana (SOL)",
    logo: solana,
    amount: 3,
    price: "$450.90",
    change: "+0.01%",
    value: "$1,352.30",
  },
  {
    name: "Polygon (MATIC)",
    logo: polygon,
    amount: 100,
    price: "$408.04",
    change: "+0.01%",
    value: "$40,804.00",
  },
  {
    name: "Binance Coin (BNB)",
    logo: binance_coin,
    amount: 100,
    price: "$408.04",
    change: "+0.01%",
    value: "$40,804.00",
  },
  {
    name: "Polygon (MATIC)",
    logo: polygon,
    amount: 100,
    price: "$408.04",
    change: "+0.01%",
    value: "$40,804.00",
  },
  {
    name: "Bitcoin (BTC)",
    logo: bitcoin,
    amount: 1.2,
    price: "$76,296.60",
    change: "-0.01%",
    value: "$80,399.12",
  },
  {
    name: "Tron (TRX)",
    logo: tron,
    amount: 15,
    price: "$225.65",
    change: "+0.01%",
    value: "$3,375.67",
  },
  {
    name: "Solana",
    logo: solana,
    amount: 3,
    price: "$450.90",
    change: "+0.01%",
    value: "$1,352.30",
  },
];

const CryptoAssets = () => {
  return (
    <>
      <div className="overflow-y-scroll h-[350px] md:h-[340px] lg:h-[calc(100vh-450px)] lg:pe-3">
        {assets.map((asset, index) => (
          <div
            key={index}
            className="flex flex-nowrap md:flex-wrap lg:flex-nowrap items-center md:items-end lg:items-center justify-between border-b border-[#383838] py-4 pr"
          >
            <div className="flex md:block lg:flex items-center sm:text-lg lg:text-base">
              <img
                src={asset.logo}
                alt={asset.name}
                className="w-10 h-10 mr-4 md:mb-2 lg:mb-0"
              />
              <div>
                <h2 className="pr">{asset.name}</h2>
                <div className="flex items-center gap-1">
                  <p className="text-[#909090]">{asset.price}</p>
                  <p
                    className={`text-sm ${
                      asset.change.startsWith("+")
                        ? "text-[#00A244]"
                        : "text-[#CE1A11]"
                    }`}
                  >
                    {asset.change}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right md:text-end lg:text-right">
              <p>{asset.amount}</p>
              <p className="lg:text-sm text-[#a2a2a2]">{asset.value}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CryptoAssets;
