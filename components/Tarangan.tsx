"use-client";
import { useState } from "react";
import React from "react";
import Image from "next/image";

export default function Tarangan() {
  return (
    <div>
      <div className="h-full w-full grid grid-cols-1 bg-white grid-rows-6 gap-6 px-16 lg:grid-cols-3 lg:grid-rows-2 pb-10">
        <div className="border-t-2">
          <div className="flex-col relative mt-3">
            <div className="relative h-60 w-full xxs:h-58 mt-4 mr-4">
              <Image
                src="/images/Tarangan/img1.jpeg"
                alt="Description of the image"
                layout="fill"
                className="rounded-[20px] object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
        <div className="border-t-2">
          <div className="flex-col relative mt-3">
            <div className="relative h-60 w-full xxs:h-58 mt-4 mr-4">
              <Image
                src="/images/Tarangan/img4.jpeg"
                alt="Description of the image"
                layout="fill"
                className="rounded-[20px] object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
        <div className="border-t-2">
          <div className="flex-col relative mt-3">
            <div className="relative h-60 w-full xxs:h-58 mt-4 mr-4">
              <Image
                src="/images/Tarangan/img7.jpeg"
                alt="Description of the image"
                layout="fill"
                className="rounded-[20px] object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
        <div className="border-t-2">
          <div className="flex-col relative mt-3">
            <div className="relative h-60 w-full xxs:h-58 mt-4 mr-4">
              <Image
                src="/images/Tarangan/img3.jpeg"
                alt="Description of the image"
                layout="fill"
                className="rounded-[20px] object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
        <div className="border-t-2">
          <div className="flex-col relative mt-3">
            <div className="relative h-60 w-full xxs:h-58 mt-4 mr-4">
              <Image
                src="/images/Tarangan/img5.jpeg"
                alt="Description of the image"
                layout="fill"
                className="rounded-[20px] object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
        <div className="border-t-2">
          <div className="flex-col relative mt-3">
            <div className="relative h-60 w-full xxs:h-58 mt-4 mr-4">
              <Image
                src="/images/Tarangan/img6.jpeg"
                alt="Description of the image"
                layout="fill"
                className="rounded-[20px] object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-black">
          Welcome to Lanja - Ratnagiri Open Bungalow Plots Project Project Name:
          Tarangan Village: Kelambe Sales Started: Since January 1, 2022 Total
          Project Area: 3 Acres Total Plots: 23 Plot Sizes: Starting from 2,259
          sq. ft. Project Connectivity Lanja S.T. Stand: 5 km Railway Station
          (Adavali): 6 km Mumbai-Goa Highway: 4 km Project Features Collector
          Approved Project Individual 7/12 Document and Measurement Map
          Developed Open Spaces (02) with basic amenities 1 Well providing water
          supply Plot Features Stone Boundary Wall: (All four sides) Water
          Supply: Up to the plot WBM Internal Roads: 12 meters and 09 meters
          wide Drainage System Loan Facility: Available for plots Gated
          Community Team Konkanbhumi Developers Contact: 7506205555 / 7517205555
          Key Highlights Positioned between railway and highway Neighboring
          residential area Bus stop within a short distance Nearby access to
          essential amenities Hospital facilities close by High-speed internet
          connection available Price: ₹250 per sq. ft.
        </p>
      </div>
    </div>
  );
}
