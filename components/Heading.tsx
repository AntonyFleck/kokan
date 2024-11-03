import React from "react";

export default function Heading() {
  return (
    <div className="pl-16">
      <div className="text-[#08110C] font-jakarta text-[32px] font-bold leading-[40.32px]  text-left mt-10">
        <p>Explore Eco-friendly Homes Near You.</p>
      </div>
      <div className="text-[#27563A] text-[19px] font-medium leading-[32px] text-left flex mt-3 pb-4 ">
        <div>
          <button className=" mr-6 active:border-b-2  active:border-[#27563A]">
            New to market
          </button>
        </div>
        <div>
          <button className=" active:border-b-2 active:border-[#27563A]">
            New to market
          </button>
        </div>
      </div>
    </div>
  );
}
