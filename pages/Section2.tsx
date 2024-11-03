import Card from "@/components/Card";
import Window from "@/components/Window";
import React from "react";

export default function Section2() {
  return (
    <div className="w-full h-[80%] bg-[#E4E5DF] p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2">
        <Card />
        <Window />
      </div>
    </div>
  );
}
