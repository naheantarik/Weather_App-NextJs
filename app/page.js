import Image from "next/image";
import React from "react";
import CloudImg from "../public/Cloud 3.png";

export default function Home() {
  return (
    <div className="bg-[#0059FF] h-screen flex justify-center items-center">
      <div className="w-[452px] bg-[linear-gradient(180deg,_rgba(20,177,248,1)_44%,_rgba(19,125,245,1)_99%)] backdrop-blur-3xl rounded-[12px] py-[128px]">
        <div className="text-center">
          <h3 className="text-[#ffffff] opacity-[47%] font-poppins text-[25px] font-semibold leading-[38px] tracking-[11%]">
            Date
          </h3>
          <h2 className="text-[#ffffff] font-poppins text-[37px] font-bold leading-[56px] tracking-[11%]">
            Name
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <Image src={CloudImg} alt="date" width={277} height={277} />
        </div>
        <h2 className="text-[#ffffff] font-Inter text-[100px] font-bold leading-[121px] text-center mb-[14px]">
          20%
        </h2>
        <h3 className="font-Inter text-[#ffffff] text-[27px] font-semibold leading-[33px] text-center">
          Mostly Sunny
        </h3>
      </div>
    </div>
  );
}
