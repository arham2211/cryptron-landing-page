import React from "react";
import Section from "../components/Wallet/Section";
import Coins from "../components/Wallet/Coins";
import CoinDetail from "../components/Wallet/CoinDetail";

const Wallet = () => {
  return (
    <div className="bg-[#191919] md:w-full sm:px-4 pb-8 lg:pb-0">
      <div>
        <Section />
      </div>
      <div className="md:flex gap-3 md:flex-row-reverse ">
        <CoinDetail />
        <Coins />
      </div>
    </div>
  );
};

export default Wallet;
