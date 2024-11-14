import React from "react";

export default function BlogCard({
  title,
  para,
}: {
  title: string;
  para: string;
}) {
  return (
    <div className="flex flex-col text-black p-5 gap-y-2">
      <div className="border-l-4 border-[#27563A] p-2">
        <p className="text-[#27563A] font-jakarta text-[32px] font-bold">
          {title}
        </p>
      </div>
      <div>
        <p className="text-[#313131] text-[16px] font-medium leading-[32px] text-left">
          {para}
        </p>
      </div>
    </div>
  );
}
