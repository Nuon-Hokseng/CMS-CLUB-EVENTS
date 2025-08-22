"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/main-button";

export default function SectionFour() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const memberships = [
    {
      name: "Junior",
      price: "250",
      desc: "Affordable membership for young golfers",
    },
    {
      name: "Twilight",
      price: "350",
      desc: "Evening golf with budget friendly pricing",
    },
    {
      name: "Weekday",
      price: "450",
      desc: "Monday to Friday access at reduced rate",
    },
    {
      name: "Full",
      price: "550",
      desc: "Unlimited access to all facilities, Enjoy all facilities",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-8 md:py-16 lg:py-24 bg-green-50 overflow-hidden"
      id="member"
    >
      <div className="container mx-auto text-center px-4 mb-8">
        <h2
          className={`text-xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-4 transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          Club Membership
        </h2>
        <div
          className={`w-16 md:w-20 lg:w-24 h-1 bg-green-600 mx-auto rounded-full transition-all duration-1000 ease-out delay-200 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {memberships.map((membership, index) => (
            <div
              key={membership.name}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Header */}
              <div className="bg-green-600 text-white text-center py-3 md:py-4 hover:bg-green-700 transition-colors duration-300">
                <h3 className="text-sm md:text-lg font-semibold">
                  {membership.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 text-center">
                {/* Price */}
                <div className="mb-3 md:mb-4">
                  <div className="flex items-baseline justify-center group">
                    <span className="text-sm md:text-base text-gray-600 group-hover:text-green-600">
                      $
                    </span>
                    <span className="text-2xl md:text-4xl font-light text-gray-800 group-hover:text-green-600">
                      {membership.price}
                    </span>
                    <span className="text-sm md:text-base text-gray-600 group-hover:text-green-600">
                      /mo
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6 leading-relaxed">
                  {membership.desc}
                </p>

                {/* Button */}
                <Button
                  variant="green"
                  className="w-full text-xs md:text-sm py-2 md:py-3 bg-green-600 text-white rounded-2xl hover:bg-green-700 transform hover:scale-101 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Order Now!
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
