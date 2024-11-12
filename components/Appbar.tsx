"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Appbar() {
  const router = useRouter();
  return (
    <div className="w-full bg-white shadow-2xl">
      <div className="max-w-6xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between gap-3 items-center">
          <div className="flex items-center">
            <Image
              src="/images/logo2.png"
              alt="Konkanbhoomi Developers Logo"
              width={170}
              height={40}
            />
          </div>
          <div className="flex-row flex text-xl justify-center items-center space-x-4">
            <button
              onClick={() => {
                router.push("/blogs");
              }}
              className="text-[#27563A] hover:border-b-2 hover:border-[#27563A] transition-colors">
              Blog
            </button>
            <button
              onClick={() => {
                router.push("/about");
              }}
              className="text-[#27563A] leading-tight hover:border-b-2 hover:border-[#27563A] transition-colors">
              About Us
            </button>
            <button className="text-[#27563A] leading-tight hover:border-b-2 hover:border-[#27563A] transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
