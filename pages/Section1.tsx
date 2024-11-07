import Appbar from "@/components/Appbar";
import Title from "@/components/Title";
import React from "react";

export default function Section1() {
  return (
    <div className="relative h-full bg-cover bg-center  sm:bg-cover md:bg-cover bg-[url('https://raw.githubusercontent.com/AntonyFleck/kokan/main/public/images/photo.jpg')] flex flex-col">
      {/* <div className="absolute inset-0"></div> */}
      <div className="flex flex-col flex-1 items-center justify-center pb-20 relative">
        <Title />
      </div>
    </div>
  );
}
