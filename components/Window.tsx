import React from "react";
import Image from "next/image";

export default function Window() {
  return (
    <div className="relative flex  justify-center flex-1">
      <div className="relative w-[75vw] h-[26vw] rounded-[20px]">
        <Image
          src="/images/bg.jpg" 
          alt="Description of the image" 
          layout="fill"
          objectFit=""
          className="rounded-[20px] object-cover sm:object-contain"
          draggable={false} 
        />
      </div>
    </div>
  );
}
