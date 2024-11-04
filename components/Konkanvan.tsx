"use-client";
import { useState } from "react";
import React from "react";
import Image from "next/image";

export default function Konkanvan() {
  return (
    <div>
      <div className="h-full w-full grid grid-cols-1 bg-white grid-rows-6 gap-6 px-16 lg:grid-cols-3 lg:grid-rows-2 pb-10">
        <div className="border-t-2">
          <div className="flex-col relative mt-3">
            <div className="relative h-48 xxs:h-58 mt-4 mr-4">
              <Image
                src="/images/Konkanvan/img1.jpeg"
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
            <div className="relative h-48 xxs:h-58 mt-4 mr-4">
              <Image
                src="/images/Konkanvan/img2.jpeg"
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
            <div className="relative h-48 xxs:h-58 mt-4 mr-4">
              <Image
                src="/images/Konkanvan/img3.jpeg"
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
            <div className="relative h-48 xxs:h-58 mt-4 mr-4">
              <Image
                src="/images/Konkanvan/img7.jpeg"
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
            <div className="relative h-48 xxs:h-58 mt-4 mr-4">
              <Image
                src="/images/Konkanvan/img8.jpeg"
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
            <div className="relative h-48 xxs:h-58 mt-4 mr-4">
              <Image
                src="/images/Konkanvan/img6.jpeg"
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
          Open Bungalow Plots Project Welcome to Lanja - Ratnagiri Project Name:
          Kokanvan Village: Kherwase Started: Since June 2022 Total Project
          Area: 10 Acres Total Plots: 65 Booked Plots: 23 Plot Sizes: Starting
          from 3,228 sq. ft. Project Connectivity Lanja S.T. Stand: 6 km Railway
          Station (Veravali): 5 km Mumbai-Goa Highway: 5 km Project Features
          Collector Approved Project Plan Individual 7/12 Document Separate
          Measurement Map Loan Facility: Available for plot + house 02 Developed
          Open Spaces and 01 Amenity Space 01 Borewell with abundant water
          supply Plot Features Stone Boundary Wall: (All four sides, 3.5 feet
          high) with a gate Water Supply: Up to the plot WBM Internal Roads: 12
          meters and 09 meters wide Rainwater Drainage Roadside Plantation Trees
          within each plot Electric Service Poles Provision for Street Lighting
          Team Konkanbhumi Developers Location: Lanja (Serving for 20
          consecutive years) Contact: 7506205555 / 7517205555 Price: Starting
          from ₹325 per sq. ft. (Plots will only be sold to Marathi speakers and
          those who intend to build a house.) Key Highlights Adjacent to tar
          road Located between railway station and highway Neighboring
          residential areas Bus stop within walking distance Availability of
          essential items nearby Hospital nearby Option for fast internet
          connection available
        </p>
      </div>
    </div>
  );
}
