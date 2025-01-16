import React from "react";
import face1 from "../../assets/face1.png";
import face2 from "../../assets/face2.png";
import face3 from "../../assets/face3.png";
import face4 from "../../assets/face4.png";
import face5 from "../../assets/face5.png";
import addSign from "../../assets/AddSign.png";
import Assets from "./Assets";

const Transfer = () => {
  const quickTransferProfiles = [
    { src: face1, color: "#01F070" },
    { src: face2, color: "#F2C44D" },
    { src: face3, color: "#F65EBA" },
    { src: face4, color: "#52F3A6" },
    { src: face5, color: "#FFD4B8" },
  ];
  return (
    <div className="block md:hidden ">
      <div className="mb-4 text-start m-4 pb-5 rounded-xl">
        <p className="pr mb-5 text-xl">Quick transfer</p>
        <div className="flex items-center justify-between">
          {quickTransferProfiles.map((item, index) => (
            <div
              key={index}
              className="h-11 w-11 sm:h-20 sm:w-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: item.color }}
            >
              <img
                className="sm:h-12 sm:w-12"
                src={item.src}
                alt={`Face ${index + 1}`}
              />
            </div>
          ))}
          <div className="cursor-pointer">
            <img className="sm:h-20 sm:w-20" src={addSign} alt="Add Sign" />
          </div>
        </div>
      </div>
      <div className="text-start m-4 h-[500px]">
        <p className="pr mb-3 text-xl">Your Assets1</p>
        <Assets />
      </div>
    </div>
  );
};

export default Transfer;
