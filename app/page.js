import Image from "next/image";
import React from "react";
import CloudImg from "../public/Cloud 3.png";

export default function Home() {
  const currentDate = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const fullDate = `${month} ${day}, ${year}`;

  return (
    <div className="bg-[#0059FF] h-screen flex justify-center items-center">
      <div className="w-[452px] bg-[linear-gradient(180deg,_rgba(20,177,248,1)_44%,_rgba(19,125,245,1)_99%)] backdrop-blur-3xl rounded-[12px] py-[128px]">
        <div className="text-center">
          <h3 className="text-[#ffffff] opacity-[47%] font-poppins text-[25px] font-semibold leading-[38px] tracking-[11%]">
            {fullDate}
          </h3>
          <h2 className="text-[#ffffff] font-poppins text-[37px] font-bold leading-[56px] tracking-[11%]">
            Name
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <Image src={CloudImg} alt="date" width={277} height={277} />
        </div>
        <div className="text-center">
          <h2 className="text-[#ffffff] font-Inter text-[100px] font-bold leading-[121px] text-center mb-[14px]">
            20%
          </h2>
          <h3 className="font-Inter text-[#ffffff] text-[27px] font-semibold leading-[33px] text-center">
            Mostly Sunny
          </h3>
        </div>
        <form className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Enter your location"
            className="w-[328px] h-[56px] bg-[#ffffff] rounded-[12px] mt-[32px] pl-[16px] text-[#000000] font-Inter text-[16px] font-medium leading-[24px] tracking-[0.01em] active:outline-none focus:outline-none"
          />

          <button
            type="submit"
            className="w-[56px] h-[56px] bg-[#ffffff] rounded-[12px] mt-[32px] ml-[16px] flex justify-center items-center shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
