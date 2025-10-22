'use client'
import Appbar from "@/components/Appbar";
import Section1 from "@/pages/Section1";
import Section2 from "@/pages/Section2";
import Section3 from "@/pages/Section3";
import Section4 from "@/pages/Section4";
import Section6 from "@/pages/Section6";
import Section7 from "@/pages/Section7";
import Section8 from "@/pages/Section8";
import Section9 from "@/pages/Section9";
import React, { useEffect, useState } from "react";


function StickyCTA({ targetId = "section8" }: { targetId?: string }) {
  const [visible, setVisible] = React.useState(true); // always visible

  const onClick = () => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onClose = () => {
    setVisible(false); // hides only when manually closed
  };

  return (
    <div
      className={[
        "fixed z-50 top-24 right-6 max-w-xs",
        "transition-all duration-300 ease-in-out",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-3 pointer-events-none",
      ].join(" ")}
      aria-live="polite">
      <div className="rounded-xl shadow-2xl border border-emerald-400 bg-white p-4 dark:bg-neutral-900 dark:border-emerald-600">
        <div className="flex items-start gap-3">
          <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
          <div className="flex-1">
            <p className="text-sm font-extrabold text-emerald-700 dark:text-emerald-400">
              💬 Click here to contact us
            </p>
            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-300">
              Fill out our quick form below 👇
            </p>
            <button
              onClick={onClick}
              className="mt-3 w-full rounded-lg px-3 py-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 transition">
              Go to Contact Form
            </button>
          </div>
          <button
            onClick={onClose}
            className="ml-1 rounded-lg p-1 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-neutral-800"
            aria-label="Close popup">
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}




export default function Home() {
  return (
    <div className="w-screen h-full">
      <div className=" h-max w-full">
        <Appbar />
      </div>
      <div className=" h-[90%] w-full">
        <Section1 />
      </div>
      <div className="w-full">
        <Section2 />
      </div>
      <div className="w-full">
        <Section3 />
      </div>
      <div className="w-full">
        <Section4 />
      </div>
      <div className="w-full">
        <Section6 />
      </div>
      <div className="w-full">
        <Section7 />
      </div>
      <div id="section8" className="w-full scroll-mt-24">
        <Section8 />
      </div>
      <div className="w-full">
        <Section9 />
      </div>
      {/* mount the popup on this page */}
      <StickyCTA targetId="section8" />
    </div>
  );
}
