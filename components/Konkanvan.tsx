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
            <div className="relative h-60 w-full xxs:h-58 mt-4 mr-4">
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
            <div className="relative h-60 w-full xxs:h-58 mt-4 mr-4">
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
            <div className="relative h-60 w-full xxs:h-58 mt-4 mr-4">
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
            <div className="relative h-60 w-full xxs:h-58 mt-4 mr-4">
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
            <div className="relative h-60 w-full xxs:h-58 mt-4 mr-4">
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
            <div className="relative h-60 w-full xxs:h-58 mt-4 mr-4">
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

      <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto my-8">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Open Bungalow Plots Project - Lanja, Ratnagiri
        </h2>
        <p className="text-gray-700 mb-2">
          <strong>Project Name:</strong> Kokanvan
          <br />
          <strong>Village:</strong> Kherwase
          <br />
          <strong>Started:</strong> June 2022
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>Total Project Area:</strong> 10 Acres
          </li>
          <li>
            <strong>Total Plots:</strong> 65
          </li>
          <li>
            <strong>Booked Plots:</strong> 23
          </li>
          <li>
            <strong>Plot Sizes:</strong> Starting from 3,228 sq. ft.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
          Project Connectivity
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Lanja S.T. Stand: 6 km</li>
          <li>Railway Station (Veravali): 5 km</li>
          <li>Mumbai-Goa Highway: 5 km</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
          Project Features
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Collector Approved Project Plan</li>
          <li>Individual 7/12 Document</li>
          <li>Separate Measurement Map</li>
          <li>Loan Facility: Available for plot + house</li>
          <li>Developed Open Spaces and Amenity Space</li>
          <li>Borewell with abundant water supply</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
          Plot Features
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Stone Boundary Wall: 3.5 feet high with a gate</li>
          <li>Water Supply: Up to the plot</li>
          <li>WBM Internal Roads: 12m and 09m wide</li>
          <li>Rainwater Drainage</li>
          <li>Roadside Plantation Trees within each plot</li>
          <li>Electric Service Poles with Provision for Street Lighting</li>
        </ul>

        <div className="mt-6 text-gray-700">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Developer Information
          </h3>
          <p>
            <strong>Developer:</strong> Team Konkanbhumi Developers
          </p>
          <p>
            <strong>Location:</strong> Lanja (Serving for 20 consecutive years)
          </p>
          <p>
            <strong>Contact:</strong> 7506205555 / 7517205555
          </p>
          <p>
            <strong>Price:</strong> Starting from ₹325 per sq. ft.
          </p>
          <p className="text-red-700 font-semibold">
            Plots will only be sold to Marathi speakers and those who intend to
            build a house.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
          Key Highlights
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Adjacent to tar road</li>
          <li>Located between railway station and highway</li>
          <li>Neighboring residential areas</li>
          <li>Bus stop within walking distance</li>
          <li>Availability of essential items nearby</li>
          <li>Hospital nearby</li>
          <li>Option for fast internet connection available</li>
        </ul>
      </div>
    </div>
  );
}
