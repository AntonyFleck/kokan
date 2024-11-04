import React from "react";
import Image from "next/image";

export default function Window2() {
  return (
    <div className="relative flex h-full mb-20 flex-1">
      <div className="w-[50vw] h-[50vw] md:size-60 lg:w-screen lg:h-full">
        <Image
          src="/images/img2.jpeg" 
          alt="Description of the image" 
          layout="fill"
          objectFit=""
          className="rounded-[10px] pb-19 object-cover"
          draggable={false} 
        />
      </div>
    </div>
  );
}
