import React from "react";
import Image from "next/image";

export default function Appbar() {
  return (
    <div className="w-full bg-gradient-to-r from-green-900 to-green-700 shadow-md">
      <div className="max-w-6xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-3 items-center">
          <div className="flex items-center">
            <p className="text-green-100 hover:text-white  transition-colors italic">
              Konkanbhoomi
            </p>
          </div>
          <div className="md:flex-row flex flex-col justify-center items-center space-x-4 mr-6">
            <button className="text-green-100 hover:text-white hover:border-white transition-colors pl-3">
              Home
            </button>
            <button className="text-green-100 hover:text-white  transition-colors">
              Properties
            </button>
            <button className="text-green-100 leading-tight hover:text-white  transition-colors pr-1">
              Blog
            </button>
            <button className="text-green-100 leading-tight hover:text-white  transition-colors pr-1">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
