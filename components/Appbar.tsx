"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Appbar() {
  const router = useRouter();
  return (
    <div className="w-full bg-gradient-to-r from-green-900 to-green-700 shadow-md">
      <div className="max-w-6xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between gap-3 items-center">
          <div className="flex items-center">
            <p className="text-green-100 font-libre-baskerville text-3xl hover:text-white  transition-colors">
              Konkanbhoomi
            </p>
          </div>
          <div className="flex-row flex text-xl justify-center items-center space-x-4">
            <button
              onClick={() => {
                router.push("/blogs");
              }}
              className="text-green-100 hover:text-white  transition-colors">
              Blog
            </button>
            <button
              onClick={() => {
                router.push("/about");
              }}
              className="text-green-100 leading-tight hover:text-white  transition-colors">
              About Us
            </button>
            <button className="text-green-100 leading-tight hover:text-white  transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
