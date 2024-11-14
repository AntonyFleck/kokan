"use-client";
import { useState } from "react";
import React from "react";
import Image from "next/image";

export default function Tarangan() {
  return (
    <div>
      <div className="h-full w-full grid grid-cols-1 bg-white grid-rows-6 gap-6 px-5 lg:grid-cols-3 lg:grid-rows-2 pb-10">
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

      <div className="p-4 bg-white rounded-lg shadow-md max-w-3xl mx-auto my-8">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Open Bungalow Plots Project - Lanja, Ratnagiri
        </h2>
        <p className="text-gray-700 mb-2">
          <strong>Project Name:</strong> Tarangan
          <br />
          <strong>Village:</strong> Kelambe
          <br />
          <strong>Sales Started:</strong> January 1, 2022
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>Total Project Area:</strong> 3 Acres
          </li>
          <li>
            <strong>Total Plots:</strong> 23
          </li>
          <li>
            <strong>Plot Sizes:</strong> Starting from 2,259 sq. ft.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
          Project Connectivity
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Lanja S.T. Stand: 5 km</li>
          <li>Railway Station (Adavali): 6 km</li>
          <li>Mumbai-Goa Highway: 4 km</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
          Project Features
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Collector Approved Project</li>
          <li>Individual 7/12 Document and Measurement Map</li>
          <li>Developed Open Spaces (02) with basic amenities</li>
          <li>1 Well providing water supply</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
          Plot Features
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Stone Boundary Wall (all four sides)</li>
          <li>Water Supply: Up to the plot</li>
          <li>WBM Internal Roads: 12m and 09m wide</li>
          <li>Drainage System</li>
          <li>Loan Facility available for plots</li>
          <li>Gated Community</li>
        </ul>

        <div className="mt-6 text-gray-700">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
          Information
          </h3>
          <p>
            <strong>Price:</strong> ₹250 per sq. ft.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
          Key Highlights
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Positioned between railway and highway</li>
          <li>Neighboring residential area</li>
          <li>Bus stop within a short distance</li>
          <li>Nearby access to essential amenities</li>
          <li>Hospital facilities close by</li>
          <li>High-speed internet connection available</li>
        </ul>
      </div>
    </div>
  );
}
