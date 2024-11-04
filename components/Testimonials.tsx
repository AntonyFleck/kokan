"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  id: number;
  name: string;
  rating: number;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Santosh Pawaskar",
    rating: 5,
    quote:
      "Very supportive and co operative team, Mr. Nitin Kadam extended all the support desired.Trustworthy people and work transparently...",
  },
  {
    id: 2,
    name: "Chetan Wadekar",
    rating: 5,
    quote: `We already have a plot booked here since 10 years. It was a great experience with Mr. Nitin Kadam and team konkan bhoomi developers with their helpful nature. Me being an Architect observed that they provide basic services such as water supply, electric supply and compound wall in their ongoing and upcoming projects which is a very needful and basic thing if you invest such huge and hard earned money.
Do visit their office and ongoing projects in Lanja, Ratnagiri for further investments in your life.
I wish them good luck ahead. `,
  },
  {
    id: 3,
    name: "Satish Shirvadkar",
    rating: 5,
    quote: `5 out of 5 mark to Mr. Nitin Kadam and his team. I'm happy to write this review about Kokanbhoomi Developers. I purchased the plot through Kokanbhoomi Developers in Lanja Om Anant. Mr. Nitin Kadam and Team have given me the best and genuine deal. I am one of the very very happy customer of Kokanbhoomi Developer. Because of them my dream came true. `,
  },
  {
    id: 4,
    name: "Preeti Gurav",
    rating: 5,
    quote: `Very helpfull peoples and good nature ....Mr. Nitin Kadam and there team helped us a lot with no regrets in return ....very clear and transparent paperwork with no difficulties....they are always at there high to help you with a smiling faces ....Kokanbhoomi develepors are doing great job to fulfill dreams and bringing back peoples to there roots...`,
  },
  {
    id: 5,
    name: "Santosh Bhalerao",
    rating: 5,
    quote: `Very good personalized service, they take good care of our plots and especially the plantations.`,
  },
];

type ExtendedTestimonial = Testimonial & { uniqueKey: string };

export default function InfiniteScrollingTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [items, setItems] = useState<ExtendedTestimonial[]>([]);

  useEffect(() => {
    // Initialize with 3 sets of testimonials for smooth scrolling
    const repeatedTestimonials = Array.from({ length: 3 }, (_, index) =>
      testimonials.map((testimonial) => ({
        ...testimonial,
        uniqueKey: `${testimonial.id}-${index}`, // Create a unique key for rendering
      }))
    ).flat();
    setItems(repeatedTestimonials);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const scroll = () => {
      if (isHovered) return;

      scrollContainer.scrollLeft += 1;

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 3) {
        scrollContainer.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const handleScroll = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
      scrollContainer.scrollLeft = 0;
    } else if (scrollContainer.scrollLeft <= 0) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
    }
  };

  const renderTestimonial = (testimonial: ExtendedTestimonial) => (
    <Card
      key={testimonial.uniqueKey} // Use uniqueKey instead of id
      className="flex-shrink-0 w-[300px] mx-4 my-2 bg-white shadow-lg">
      <CardContent className="p-6 flex flex-col h-[300px]">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.floor(testimonial.rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">
            {testimonial.rating.toFixed(1)}
          </span>
        </div>
        <div className="flex-grow overflow-y-auto mb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <blockquote className="text-center text-gray-700">
            "{testimonial.quote}"
          </blockquote>
        </div>
        <p className="text-center font-semibold mt-auto">{testimonial.name}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-black">
          What our customers say?
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Hear from our satisfied customers and clients.
        </p>
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden"
            onScroll={handleScroll}>
            {items.map((testimonial) => renderTestimonial(testimonial))}
          </div>
        </div>
      </div>
    </div>
  );
}
