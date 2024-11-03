import Faqleft from "@/components/Faqleft";
import Faqright from "@/components/Faqright";
import React from "react";

export default function Section7() {
  return (
    <div className="w-full h-[80%] bg-white p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto grid  gap-6 lg:grid-cols-2">
        <Faqleft />
        <Faqright />
      </div>
    </div>
  );
}
