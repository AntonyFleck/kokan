import Section1 from "@/pages/Section1";
import Section2 from "@/pages/Section2";
import Section3 from "@/pages/Section3";
import Section4 from "@/pages/Section4";
import Section6 from "@/pages/Section6";
import Section7 from "@/pages/Section7";
import Section8 from "@/pages/Section8";
import Section9 from "@/pages/Section9";
import React from "react";
export default function Home() {
  return (
    <div className="w-screen h-full">
      <div className=" h-[90%] w-full">
        <Section1 />
      </div>
      <div className="w-full">
        <Section2 />
      </div>
      <div className="w-full">
        <Section3 />
      </div>
      <div className="w-full">
        <Section4 />
      </div>
      <div className="w-full">
        <Section6 />
      </div>
      <div className="w-full">
        <Section7 />
      </div>
      <div className="w-full">
        <Section8 />
      </div>
      <div className="w-full">
        <Section9 />
      </div>
    </div>
  );
}
