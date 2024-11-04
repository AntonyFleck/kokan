"use client";
import React from "react";
import { useState } from "react";
import Konkansrushti from "./Konkansrushti";
import Konkanvan from "./Konkanvan";
import Konkannagar from "./Konkannagar";
import Tarangan from "./Tarangan";
import Dhundhreproject from "./Dhundhre project";
import Guhagarproject from "./Guhagar agriculture project";

export default function Heading() {
  const [activeComponent, setActiveComponent] = useState("A");

  const renderComponent = () => {
    console.log(activeComponent);
    switch (activeComponent) {
      case "A":
        return <Konkansrushti />;
      case "B":
        return <Konkanvan />;
      case "C":
        return <Konkannagar />;
      case "D":
        return <Tarangan />;
      case "E":
        return <Dhundhreproject />;
      case "F":
        return <Guhagarproject />;
      default:
        return <Konkansrushti />;
    }
  };
  return (
    <div className="overflow-auto">
      <div className="pl-16 ">
        <div className="text-[#08110C] font-jakarta text-[32px] font-bold leading-[40.32px]  text-left mt-10">
          <p>Discover Our Current Projects in Progress</p>
        </div>
        <div className="text-[#27563A] text-[19px] font-medium leading-[32px] text-left flex mt-3 pb-4 ">
          <div>
            <button
              onClick={() => setActiveComponent("A")}
              className=" mr-6 active:border-b-2  active:border-[#27563A]">
              Konkansrushti
            </button>
          </div>
          <div>
            <button
              onClick={() => setActiveComponent("B")}
              className="mr-5 active:border-b-2 active:border-[#27563A]">
              Konkanvan
            </button>
          </div>
          {/* <div>
            <button
              onClick={() => setActiveComponent("C")}
              className=" mr-5 active:border-b-2  active:border-[#27563A]">
              Konkannagar
            </button>
          </div> */}
          <div>
            <button
              onClick={() => setActiveComponent("D")}
              className=" mr-5 active:border-b-2  active:border-[#27563A]">
              Tarangan
            </button>
          </div>
          <div>
            <button
              onClick={() => setActiveComponent("E")}
              className=" mr-5 active:border-b-2  active:border-[#27563A]">
              Dhundhre project
            </button>
          </div>
          {/* <div>
            <button
              onClick={() => setActiveComponent("F")}
              className=" mr-5 active:border-b-2  active:border-[#27563A]">
              Guhagar agriculture project
            </button>
          </div> */}
        </div>
      </div>
      <div className="component-container">{renderComponent()}</div>
    </div>
  );
}
