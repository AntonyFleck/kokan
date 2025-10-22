"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Appbar() {
  const router = useRouter();
  const whatsappNumber = "7506205555";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <div className="w-full bg-white border-b-inherit shadow-2xl">
      <div className="max-w-6xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between gap-3 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo2.png"
              alt="Konkanbhoomi Developers Logo"
              width={170}
              height={40}
            />
          </div>

          {/* Nav Buttons */}
          <div className="flex flex-row text-2xl justify-center items-center space-x-4">
            <button
              onClick={() => router.push("/")}
              className="text-[#27563A] leading-tight hover:border-b-2 hover:border-[#27563A] transition-colors">
              Home
            </button>
            <button
              onClick={() => router.push("/blogs")}
              className="text-[#27563A] hover:border-b-2 hover:border-[#27563A] transition-colors">
              Blog
            </button>
            <button
              onClick={() => router.push("/about")}
              className="text-[#27563A] leading-tight hover:border-b-2 hover:border-[#27563A] transition-colors">
              About Us
            </button>

            {/* ✅ WhatsApp Button (same style, with SVG) */}
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 text-[#27563A] leading-tight hover:border-b-2 hover:border-[#27563A] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="22"
                height="22"
                fill="#27563A"
                className="mt-[1px]">
                <path d="M16.003 3C9.373 3 4 8.373 4 15c0 2.622.796 5.075 2.308 7.178L4 29l6.058-2.262A11.865 11.865 0 0 0 16.003 27C22.63 27 28 21.627 28 15S22.63 3 16.003 3zm0 22a9.82 9.82 0 0 1-5.209-1.514l-.373-.224-3.601 1.345.987-3.684-.24-.379A9.779 9.779 0 0 1 6 15c0-5.514 4.486-10 10.003-10C21.519 5 26 9.486 26 15s-4.481 10-9.997 10zm5.641-7.693c-.309-.155-1.827-.903-2.111-1.006-.284-.104-.491-.155-.698.155s-.8 1.006-.981 1.212c-.182.207-.362.233-.671.078-.309-.156-1.307-.481-2.488-1.533-.919-.82-1.538-1.835-1.72-2.144-.182-.31-.019-.478.137-.633.14-.14.31-.362.465-.543.155-.182.207-.311.309-.518.104-.207.052-.389-.026-.543-.078-.155-.698-1.686-.956-2.306-.252-.603-.508-.52-.698-.529-.18-.007-.388-.009-.595-.009-.207 0-.543.078-.827.389-.284.31-1.083 1.058-1.083 2.578s1.108 2.991 1.26 3.199c.155.207 2.181 3.333 5.283 4.666.739.319 1.314.509 1.762.652.74.235 1.414.202 1.946.123.594-.088 1.827-.746 2.086-1.466.259-.72.259-1.338.181-1.466-.078-.129-.284-.207-.594-.362z" />
              </svg>
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
