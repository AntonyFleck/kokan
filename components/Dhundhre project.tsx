"use-client";
import { useState } from "react";
import React from "react";
import Image from "next/image";

export default function Dhundhreproject() {


  return (
    <div>
      <div className="h-full w-full grid grid-cols-1 bg-white grid-rows-6 gap-6 px-5 lg:grid-cols-3 lg:grid-rows-2 pb-10">
        <div className="border-t-2">
          <div className="flex-col relative mt-3">
            <div className="relative h-60 w-full xxs:h-58 mt-4 mr-4">
              <Image
                src="/images/DhundhreProject/img4.jpeg"
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
                src="/images/DhundhreProject/img5.jpeg"
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
                src="/images/DhundhreProject/img9.jpeg"
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
                src="/images/DhundhreProject/img6.jpeg"
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
                src="/images/DhundhreProject/img8.jpeg"
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
                src="/images/DhundhreProject/img10.jpeg"
                alt="Description of the image"
                layout="fill"
                className="rounded-[20px] object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-md max-w-3xl mx-auto my-8">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Open Bungalow Plots Project - Lanja, Ratnagiri
        </h2>
        <p className="text-gray-700 mb-2">
          <strong>Project Name:</strong> Dhundare
          <br />
          <strong>Total Project Area:</strong> 32 Acres
          <br />
          <strong>Total Plots:</strong> 240
          <br />
          <strong>Plot Sizes:</strong> Starting from 3 Guntha (3,228 sq. ft. and
          up)
        </p>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
          Project Connectivity
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Lanja S.T. Stand: 4 km</li>
          <li>Railway Station (Adavali): 6 km</li>
          <li>Mumbai-Goa Highway: 3 km</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
          Project Features
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Collector Approved Project Plan</li>
          <li>Individual 7/12 Document</li>
          <li>Separate Measurement Map</li>
          <li>Loan Facility available through HDFC</li>
          <li>Developed Open Spaces (02) with basic amenities</li>
          <li>02 Wells and 400,000-liter Water Tank</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
          Plot Features
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Stone Boundary Wall: 3.5 feet high</li>
          <li>Underground Rainwater Drainage</li>
          <li>Roadside Landscaping and Plantation</li>
        </ul>

        <div className="mt-6 text-gray-700">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Developer Information
          </h3>
          <p>
            <strong>Contact:</strong> 7506205555 / 8805004034
          </p>
          <p>
            <strong>Developer:</strong> Team Konkanbhumi Developers
          </p>
        </div>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
          Key Highlights
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Stunning landscaping throughout the project</li>
          <li>
            The only project in Ratnagiri and Sindhudurg set amidst beautiful
            greenery
          </li>
          <li>
            Unique in the area for being both close to the taluka and affordably
            priced
          </li>
          <li>Positioned between the railway and highway</li>
          <li>Nearby hospital facilities</li>
          <li>High-speed internet connection available</li>
          <li>70+ homes, creating a unique "live feeling" experience</li>
          <li>
            Pollution-free project, with zero traffic noise despite its
            proximity to the taluka
          </li>
        </ul>
      </div>
    </div>
  );
}
