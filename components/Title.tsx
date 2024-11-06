import React from "react";
import Image from "next/image";

export default function Title() {
  return (
    <div className=" pb-20 xxs:pb-70 flex flex-col items-ceter">
      <div className="mb-45 pb-10">
        <div className="font-[700] mb-3 leading-tight text-center text-gray-100 px-5 font-jakarta text-[36px] xxs:text-[65px]">
          गाव हवं असणाऱ्यांना गाव देतो
        </div>
        <div className="font-[300]  px-7 text-center text-slate-100 font-jakarta text-1xl xxs:text-2xl">
          Discover premium NA Bungalow plots in Konkan
        </div>
      </div>
    </div>
  );
}