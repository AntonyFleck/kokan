import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
  length?: Number;
};

const faqItems: FAQItem[] = [
  {
    question:
      "What makes EcoHaven Realty different from other real estate agencies?",
    answer:
      "At EcoHaven Realty, we are committed to promoting sustainability in the real estate industry. We prioritize eco-friendly practices, such as green building techniques and energy-efficient systems, in all of our transactions. We believe that promoting environmental responsibility is not only the right thing to do, but it also benefits our clients by providing long-term cost savings and a healthier living environment.",
  },
  {
    question: "Do you only work with eco-friendly properties?",
    answer:
      "While we specialize in promoting and selling eco-friendly properties, we work with all types of properties. Our focus is on promoting sustainable practices and educating our clients on how they can make their properties more eco-friendly.",
  },
  {
    question: "Can you help me find an eco-friendly property?",
    answer:
      "We have a database of eco-friendly properties and can work with you to find a property that aligns with your sustainability goals. Additionally, we can provide guidance on how to make any property more eco-friendly.",
  },
  {
    question: "What is your process for ensuring a property is eco-friendly?",
    answer:
      "We work with builders and contractors who specialize in eco-friendly building practices. We also conduct assessments of a property's energy and water usage, as well as its overall sustainability features, to ensure that it aligns with our eco-friendly standards.",
  },
  {
    question: "Are eco-friendly properties more expensive?",
    answer:
      "Not necessarily. While some eco-friendly features may require an initial investment, such as solar panels or energy-efficient systems, they can ultimately lead to long-term cost savings on utility bills. Additionally, there are often government incentives and tax breaks available for eco-friendly properties and features.",
  },
  {
    question:
      "What makes EcoHaven Realty different from other real estate agencies?",
    answer:
      "At EcoHaven Realty, we are committed to promoting sustainability in the real estate industry. We prioritize eco-friendly practices, such as green building techniques and energy-efficient systems, in all of our transactions. We believe that promoting environmental responsibility is not only the right thing to do, but it also benefits our clients by providing long-term cost savings and a healthier living environment.",
  },
  {
    question: "Do you only work with eco-friendly properties?",
    answer:
      "While we specialize in promoting and selling eco-friendly properties, we work with all types of properties. Our focus is on promoting sustainable practices and educating our clients on how they can make their properties more eco-friendly.",
  },
  {
    question: "Can you help me find an eco-friendly property?",
    answer:
      "We have a database of eco-friendly properties and can work with you to find a property that aligns with your sustainability goals. Additionally, we can provide guidance on how to make any property more eco-friendly.",
  },
  {
    question: "What is your process for ensuring a property is eco-friendly?",
    answer:
      "We work with builders and contractors who specialize in eco-friendly building practices. We also conduct assessments of a property's energy and water usage, as well as its overall sustainability features, to ensure that it aligns with our eco-friendly standards.",
  },
  {
    question: "Are eco-friendly properties more expensive?",
    answer:
      "Not necessarily. While some eco-friendly features may require an initial investment, such as solar panels or energy-efficient systems, they can ultimately lead to long-term cost savings on utility bills. Additionally, there are often government incentives and tax breaks available for eco-friendly properties and features.",
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
    <div>
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
