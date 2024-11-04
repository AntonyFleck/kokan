import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
  length?: Number;
};

const faqItems: FAQItem[] = [
  {
    question: "Since when has Konkanbhoomi Developers been operational?",
    answer: "Konkanbhoomi Developers has been active since December 10, 2004.",
  },
  {
    question: "Who are the directors of Konkanbhoomi Developers?",
    answer:
      "Mr. Nitin Neelkanth Kadam and Mrs. Sneha Nitin Kadam are the directors of Konkanbhoomi Developers.",
  },
  {
    question: "Where is the main office of Konkanbhoomi Developers located?",
    answer:
      "Kadam Farm, Amrutsrushti Colony, Korle Road, Kelambe Village, Lanja Taluka, Ratnagiri District - 416 701.",
  },
  {
    question: "Is Konkanbhoomi Developers RERA registered?",
    answer:
      "Yes, our RERA registration number is A52800007809 (currently under renewal).",
  },
  {
    question: "What specific services do you offer?",
    answer: `We provide NA bungalow open plots with essential amenities, including:

Water supply,
Electricity,
Compound walls,
Gated Community,
Internal WBM Roads,
Plantation,
Proper Management & Maintenance of properties.
`,
  },
  {
    question: "Do you offer construction services for building homes?",
    answer:
      "Yes, we offer custom home construction tailored to individual preferences and requirements.",
  },
  {
    question: "Is it mandatory to have the home constructed by you?",
    answer:
      "No, there is no obligation. You may hire another contractor if desired. However, viewing the quality of homes built by our contractors may assist you in making an informed decision.",
  },
];

export default function Faq() {
  const [expandedItems, setexpandedItems] = useState<boolean[]>(
    new Array(faqItems.length).fill(false)
  );

  const toggleFAQ = (index: number) => {
    setexpandedItems((prevstate) => {
      const newstate = [...prevstate];
      newstate[index] = !newstate[index];
      return newstate;
    });
  };

  return (
    <div className="ml-5">
      {faqItems.map((item, index) => (
        <div key={index}>
          <div className="mr-10 flex-col mt-2 pb-4">
            <div className="flex justify-between gap-x-4 items-center">
              <p className="text-[#08110C] font-jakarta text-[19px] font-bold leading-[40.32px] text-left">
                {item.question}
              </p>
              <div>
                <button
                  onClick={() => {
                    toggleFAQ(index);
                  }}
                  aria-expanded={expandedItems[index]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`size-6 icon-black ${
                      expandedItems[index] ? "rotate-180" : ""
                    }`}>
                    <path
                      fillRule="evenodd"
                      d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              {expandedItems[index] && (
                <div>
                  <p className="text-[#313131] text-[16px] font-medium text-left">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
