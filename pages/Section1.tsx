import Appbar from "@/components/Appbar";
import Title from "@/components/Title";
import React from "react";

export default function Section1() {
  return (
    <div className="relative h-full  bg-[url('/images/bg.jpg')] bg-fixed bg-cover md:bg-cover flex flex-col">
      <div className="absolute inset-0"></div>
        <Appbar />
      <div className="flex flex-col flex-1 items-center justify-center relative">
        <Title />
      </div>
    </div>
  );
}
