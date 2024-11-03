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
    name: "Felix Jimoh",
    rating: 4.9,
    quote:
      "I had a wonderful experience working with EcoHaven Realty to find my new home. They really took the time to understand what was important to me and helped me find a home that was not only beautiful but also eco-friendly and energy-efficient. The team's expertise in sustainable housing options was impressive, and they guided me through every step of the process with patience and professionalism.",
  },
  {
    id: 2,
    name: "David T.",
    rating: 4.5,
    quote:
      "EcoHaven Realty is an amazing real estate agency that truly understands the importance of sustainability and eco-friendliness. They helped me find a beautiful home that was not only environmentally conscious but also aligned perfectly with my lifestyle needs. Their commitment to promoting green living spaces is commendable, and I'm grateful for their dedicated service.",
  },
  {
    id: 3,
    name: "Susan Lanre",
    rating: 4.5,
    quote:
      "I recently sold my home with EcoHaven Realty and couldn't be happier with the experience. The team was professional, and really took the time to understand what was important to me. They expertly marketed my property's eco-friendly features, which helped attract the right buyers quickly. Their knowledge of the sustainable real estate market is unparalleled.",
  },
  {
    id: 4,
    name: "Susan Lanre",
    rating: 4.5,
    quote: "I recently sold my home with.",
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
