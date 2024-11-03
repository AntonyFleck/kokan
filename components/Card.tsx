import React from "react";

export default function Card() {
  return (
    <div className="flex flex-col text-black p-5">
      <div className="border-l-4 border-[#27563A] p-2">
        <p className="text-[#27563A] font-semibold">WHO WE ARE</p>
      </div>
      <div>
        <p className="text-[#08110C] font-jakarta text-[32px] font-bold leading-[40.32px] text-left">
          Discover Sustainable Luxury Living with EcoHaven Realty.
        </p>
      </div>
      <div>
        <p className="text-[#313131] text-[16px] font-medium leading-[32px] text-left">
          EcoHaven Realty is a real estate agency specialising in eco-friendly
          homes and sustainable living. We offer a range of eco-friendly
          properties, including energy-efficient homes, homes built with
          eco-friendly materials, and homes equipped with sustainable
          technologies such as solar panels.
        </p>
      </div>
    </div>
  );
}
