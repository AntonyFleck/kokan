import React from "react";

export default function Appbar() {
  return (
    <div className="w-full pr-1 pt-3 md:p-6 overflow-hidden">
      <div className="flex justify-between gap-4 items-center flex-1">
        <div className="max-w-6xl flex flex-col items-baseline xxs:flex-row flex-shrink xxs:items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 ml-2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
              />
            </svg>
          </div>
          <div>
            <p className="ml-2 text-white font-semibold text-lg relative  ">
              Kokan Bhoomi
            </p>
          </div>
        </div>
        <div className="flex flex-col xxs:flex-row items-center mr-4 justify-center xxs:gap-3 text-white font-semibold relative text-lg flex-1">
          <div>
            <button>Home</button>
          </div>
          <div>
            <button>Properties</button>
          </div>
          <div>
            <button>Contact Us</button>
          </div>
        </div>
        <div className="flex-none">
          <button className="text-white bg-[#27563A] focus:outline-none focus:ring-4  font-semibold relative rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2">
            RANDOM
          </button>
        </div>
      </div>
    </div>
  );
}
