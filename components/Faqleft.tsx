"use client";
import React from "react";

export const phoneNumber = "7506205555"; // Replace with the desired WhatsApp number

export const handleSendMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(``)}`;
    window.open(url, "_blank");
  };

export default function Faqleft() {
  
  return (
    <div className=" flex flex-col ml-5 gap-y-5">
      <div className="border-l-4 border-[#27563A] p-2">
        <p className="text-[#27563A] font-jakarta text-[28px]  leading-[30.32px] font-semibold">
          Frequently Asked Questions
        </p>
      </div>
      <div>
        <p className="text-[#08110C] font-jakarta text-[20px] font-bold leading-[40.32px] text-left">
          Have a different question?
        </p>
      </div>
      <div className="flex items-center">
        <button onClick={handleSendMessage} className="text-white bg-[#27563A] focus:outline-none focus:ring-2  font-semibold relative rounded-[20vw] text-lg px-5 py-2.5 text-center me-2 mb-2 flex items-centre gap-x-1">
          <p>ContactUs</p>
          <div className="p-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
