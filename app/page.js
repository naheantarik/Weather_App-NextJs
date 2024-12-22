"use client";

import Image from "next/image";
import React, { use, useState, useEffect } from "react";
import CloudImg from "../public/Cloud 3.png";

export default function Home() {
  const [city, setCity] = React.useState("Dhaka");
  const [weather, setWeather] = useState(null);
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

  const API_KEY = "310df08d9a1e917b569948515c903737";

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);

      setWeather(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  const handleInputChange = (e) => {
    console.log(e.target.value);

    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="bg-[#0059FF] h-screen flex justify-center items-center">
      <div className="w-[452px] bg-[linear-gradient(180deg,_rgba(20,177,248,1)_44%,_rgba(19,125,245,1)_99%)] backdrop-blur-3xl rounded-[12px] py-[100px]">
        <div className="text-center">
          <h3 className="text-[#ffffff] opacity-[47%] font-poppins text-[25px] font-semibold leading-[38px] tracking-[11%]">
            {fullDate}
          </h3>
          <h2 className="text-[#ffffff] font-poppins text-[37px] font-bold leading-[56px] tracking-[11%]">
            {weather?.name}
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <Image src={CloudImg} alt="date" width={277} height={277} />
        </div>
        <div className="text-center">
          <h2 className="text-[#ffffff] font-Inter text-[100px] font-bold leading-[121px] text-center mb-[14px]">
            {weather?.main?.temp && Math.round(weather?.main?.temp - 273.15)}°C
          </h2>
          <h3 className="font-Inter text-[#ffffff] text-[27px] font-semibold leading-[33px] text-center">
            {weather?.description}
          </h3>
        </div>
        <form
          className="flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter your location"
            onChange={handleInputChange}
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
              className="bi bi-search"
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
