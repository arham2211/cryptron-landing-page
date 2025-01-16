import React from "react";
import Balance from "../components/Dashboard/Balance";
import Card from "../components/Dashboard/Card";
import Transaction from "../components/Dashboard/Transaction";
import Transfer from "../components/Dashboard/Transfer";

const Dashboard = () => {
  return (
    <>
      <div className="md:flex bg-[#191919] md:w-full">
        <Balance />
        <div className="md:w-full md:pe-4 md:ps-0 sm:px-4 px-2">
          <Card />
          <Transfer />
          <Transaction />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
