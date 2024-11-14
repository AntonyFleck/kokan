import React from "react";
import Image from "next/image";

export default function Konkansrushti() {
  return (
    <div>
      <div className="h-full w-full grid grid-cols-1 bg-white grid-rows-6 gap-6 px-5 lg:grid-cols-3 lg:grid-rows-2 pb-10">
        <div className="border-t-2">
          <div className="flex-col relative mt-3">
            <div className="relative h-60 w-full xxs:h-58 mt-4 mr-4">
              <Image
                src="/images/Konkansrushti/img1.jpeg"
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
                src="/images/Konkansrushti/img2.jpeg"
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
                src="/images/Konkansrushti/img3.jpeg"
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
            <div className="relative h-60  w-fullxxs:h-58 mt-4 mr-4">
              <Image
                src="/images/Konkansrushti/img4.jpeg"
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
                src="/images/Konkansrushti/img5.jpeg"
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
                src="/images/Konkansrushti/img6.jpeg"
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
          <strong>Project Name:</strong> Konkansrushti
          <br />
          <strong>Village:</strong> Kherwase
          <br />
          <strong>Start Date:</strong> Since 2011
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>Total Project Area:</strong> 34 Acres
          </li>
          <li>
            <strong>Total Plots:</strong> 125
          </li>
          <li>
            <strong>Plot Sizes:</strong> Starting from 4000 sq. ft.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
          Project Connectivity
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Lanja S.T. Stand: 07 km</li>
          <li>Railway Station (Veravali): 04 km</li>
          <li>Mumbai-Goa Highway: 06 km</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
          Project Features
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Collector Approved Project</li>
          <li>Independent 7/12 Document</li>
          <li>Separate Measurement Map</li>
          <li>Loan Facility available for plot + house</li>
          <li>Developed Open Spaces (05) with basic amenities</li>
          <li>02 Amenity Spaces</li>
          <li>02 Borewells</li>
        </ul>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-2">
          Plot Features
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Stone Boundary Wall (All four sides, 3.5 feet high)</li>
          <li>Water Supply: Available up to the plot</li>
          <li>WBM Internal Roads: 12 meters and 09 meters wide</li>
          <li>Rainwater Drainage</li>
          <li>Roadside Plantation</li>
          <li>Trees within each plot</li>
        </ul>

        <div className="mt-6 text-gray-700">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Information
          </h3>
          <p>
            <strong>Price:</strong> ₹350 per sq. ft.(Hilltop Plots Price: ₹200 per sq. ft.)
          </p>
          <p>
            <strong>Note:</strong> Only 03 plots left at the beautiful hilltop
            location
          </p>
        </div>
      </div>
    </div>
  );
}
