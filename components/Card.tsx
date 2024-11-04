import React from "react";

export default function Card() {
  return (
    <div className="flex flex-col text-black p-5 gap-y-2">
      <div className="border-l-4 border-[#27563A] p-2">
        <p className="text-[#27563A] font-jakarta text-[32px] font-bold">
          WHO WE ARE
        </p>
      </div>
      <div>
        <p className="text-[#313131] text-[16px] font-medium leading-[32px] text-left">
          For generations, countless families from the Konkan region have
          journeyed far, seeking greater opportunities and growth. Yet, the pull
          of their roots, of the red soil and vibrant landscapes of Konkan, has
          never faded. For many, the dream to reconnect with this homeland is
          strong—a vision of returning periodically, of a second home that
          offers a sanctuary from the bustle of city life, a place that
          resonates with their heritage and the essence of nature. At
          Konkanbhoomi Developers, we are dedicated to making this vision a
          reality. Our mission goes beyond offering land or property; it’s about
          providing a sense of belonging, a place to create lasting connections
          and rekindle the essence of “village life.”
        </p>
      </div>
    </div>
  );
}
