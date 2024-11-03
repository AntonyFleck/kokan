import React from "react";

export default function Faqleft() {
  return (
    <div className=" flex flex-col ml-5 gap-y-5">
      <div className="border-l-4 border-[#27563A] p-2">
        <p className="text-[#27563A] font-semibold">
          Frequently Asked Questions
        </p>
      </div>
      <div>
        <p className="text-[#08110C] font-jakarta text-[32px] font-bold leading-[40.32px] text-left">
          Common questions asked about our eco-friendly homes.
        </p>
      </div>
      <div>
        <p className="text-[#313131] text-[16px] font-medium leading-[32px] text-left">
          Here are some important questions that are frequently asked and the
          answers to the questions.
        </p>
      </div>
      <div>
        <p className="text-[#08110C] font-jakarta text-[20px] font-bold leading-[40.32px] text-left">
          Have a different question?
        </p>
      </div>
      <div className="flex items-center">
        <button className="text-white bg-[#27563A] focus:outline-none focus:ring-2  font-semibold relative rounded-[20vw] text-lg px-5 py-2.5 text-center me-2 mb-2 flex items-centre gap-x-1">
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
