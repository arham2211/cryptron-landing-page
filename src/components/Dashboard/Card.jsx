import React, { useState, useEffect } from "react";
import bitcoin from "../../assets/bitcoin.svg";
import ethereum from "../../assets/ethereum.png";
import tron from "../../assets/tron.svg";
import solana from "../../assets/solana.svg";
import chart1 from "../../assets/chart1.png";
import chart2 from "../../assets/chart2.png";
import chart3 from "../../assets/chart3.png";
import chart4 from "../../assets/chart4.png";
import gradient1 from "../../assets/gradient1.png";
import gradient2 from "../../assets/gradient2.png";
import gradient3 from "../../assets/gradient3.png";
import gradient4 from "../../assets/gradient4.png";
import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";

const CoinCard = ({ data, showValue, onHover, onLeave }) => {
  const {
    name,
    price,
    logo,
    change,
    value,
    chart,
    right,
    top,
    color,
    lgRight,
    lgTop,
  } = data;
  const [screenSize, setScreenSize] = useState("base");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setScreenSize("xl");
      } else if (window.innerWidth >= 1024) {
        setScreenSize("lg");
      } else if (window.innerWidth >= 768) {
        setScreenSize("lg");
      } else {
        setScreenSize("xl");
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles =
    screenSize === "lg" ? { right: lgRight, top: lgTop } : { right, top };

  return (
    <div className="relative w-64 h-56 md:w-[11.78rem] md:h-[11.78rem] xl:w-64 xl:h-56 bg-[#202020] py-3 rounded-xl pr flex flex-col justify-between">
      <div className="absolute bottom-0 rounded-xl">
        <img className="rounded-l-xl" src={data.gradient} alt="" />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-3">
        <div className="flex items-center gap-2">
          <img src={logo} alt={`${name} logo`} className="w-8 h-8" />
          <span className="lg:text-md xl:text-lg">{name}</span>
        </div>
        <div className="text-right text-sm">
          <p>{price}</p>
          <span
            className={`text-sm ${
              change.includes("+") ? "text-[#00A244]" : "text-[#CE1A11]"
            }`}
          >
            {change}
          </span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="relative ">
        {/* Hover Circle */}
        <div
          className={`absolute w-4 h-4 rounded-full cursor-pointer border-2 border-[rgba(255, 255, 255, 0.6)]`}
          style={{
            backgroundColor: color,
            right: styles.right,
            top: styles.top,
          }}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        />

        {/* Tooltip */}
        {showValue && (
          <div className="absolute right-24 top-7 bg-[#0000002c] text-md py-1 px-2 rounded-md shadow-lg">
            {value}
          </div>
        )}

        {/* Chart */}
        <img className="w-full" src={chart} alt={`${name} chart`} />
      </div>
    </div>
  );
};

// Main Component
const CoinCardContainer = () => {
  const [activeCard, setActiveCard] = useState(null);

  const coinInfo = [
    {
      id: 1,
      name: "BTC",
      price: "$76,296.60",
      logo: bitcoin,
      change: "-0.01%",
      value: "$68,987.00",
      chart: chart1,
      right: "7.8rem",
      top: "-0.3rem",
      lgRight: "5.5rem",
      lgTop: "-0.3rem",
      color: "#F7931A",
      gradient: gradient1,
    },
    {
      id: 2,
      name: "ETH",
      price: "$76,296.60",
      logo: ethereum,
      change: "+0.01%",
      value: "$68,987.00",
      chart: chart2,
      right: "5rem",
      top: "1.5rem",
      lgRight: "3.4rem",
      lgTop: "1rem",
      color: "#627EEA",
      gradient: gradient2,
    },
    {
      id: 3,
      name: "TRX",
      price: "$76,296.60",
      logo: tron,
      change: "-0.01%",
      value: "$68,987.00",
      chart: chart3,
      right: "7.8rem",
      top: "-0.3rem",
      lgRight: "5.5rem",
      lgTop: "-0.3rem",
      color: "#EC0A27",
      gradient: gradient3,
    },
    {
      id: 4,
      name: "SOL",
      price: "$76,296.60",
      logo: solana,
      change: "+0.01%",
      value: "$68,987.00",
      chart: chart4,
      right: "10rem",
      top: "1.5rem",
      lgRight: "7.4rem",
      lgTop: "1rem",
      color: "#16BD9C",
      gradient: gradient4,
    },
  ];

  const handleHover = (id) => setActiveCard(id);
  const handleLeave = () => setActiveCard(null);

  return (
    <Marquee gradient={false} speed={50} pauseOnHover={true}>
      <div className="ml-5 gap-5 my-5 flex lg:ml-4 xl:ml-6 flex-wrap items-center justify-center xl:gap-6 lg:gap-4">
        {coinInfo.map((coin) => (
          <CoinCard
            key={coin.id}
            data={coin}
            showValue={activeCard === coin.id}
            onHover={() => handleHover(coin.id)}
            onLeave={handleLeave}
          />
        ))}
      </div>
    </Marquee>
  );
};

CoinCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    change: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    chart: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    gradient: PropTypes.string.isRequired,
  }).isRequired,
  showValue: PropTypes.bool.isRequired,
  onHover: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

export default CoinCardContainer;
