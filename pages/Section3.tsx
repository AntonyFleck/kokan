import Window2 from "@/components/Window2";
import React from "react";
import Card from "@/components/Card";
import Card2 from "@/components/Card2";

export default function Section3() {
  return (
    <div className="w-full h-[80%] bg-[#E4E5DF] p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 lg:hidden">
        <Card />
        <Window2 />
      </div>
      <div className="max-w-6xl mx-auto lg:grid gap-8 lg:grid-cols-2 hidden ">
        <Window2 />
        <Card2 />
      </div>
    </div>
  );
}
