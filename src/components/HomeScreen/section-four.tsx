"use client"

import { useEffect, useRef, useState } from "react"
import Button from "@/components/button"

export default function SectionFour() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }, // Trigger when 30% of section is visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-20 lg:py-24 bg-green-50 overflow-hidden">
      <div className="container mx-auto text-center px-4 md:px-6 lg:px-8">
        <h2
          className={`text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-4 transition-all duration-1000 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          Club Membership
        </h2>
        <div
          className={`w-16 md:w-20 lg:w-24 h-1 bg-green-600 mx-auto rounded-full transition-all duration-600 ease-out delay-200 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        ></div>
      </div>

      <div className="grid grid-cols-4 gap-2 md:gap-4 lg:gap-6 mt-12 md:mt-16 lg:mt-20 px-2 md:px-4 lg:px-8 text-gray-600">
        {/* Headers */}
        <div
          className={`flex items-center justify-center text-xs md:text-lg lg:text-xl font-light bg-green-600 text-white hover:bg-green-700 transition-all duration-1000 ease-out delay-300 cursor-pointer py-3 md:py-6 lg:py-8 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          Junior
        </div>
        <div
          className={`flex items-center justify-center text-xs md:text-lg lg:text-xl font-light bg-green-600 text-white hover:bg-green-700 transition-all duration-1000 ease-out delay-400 cursor-pointer py-3 md:py-6 lg:py-8 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          Twilight
        </div>
        <div
          className={`flex items-center justify-center text-xs md:text-lg lg:text-xl font-light bg-green-600 text-white hover:bg-green-700 transition-all duration-1000 ease-out delay-500 cursor-pointer py-3 md:py-6 lg:py-8 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          Weekday
        </div>
        <div
          className={`flex items-center justify-center text-xs md:text-lg lg:text-xl font-light bg-green-600 text-white hover:bg-green-700 transition-all duration-1000 ease-out delay-600 cursor-pointer py-3 md:py-6 lg:py-8 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          Full
        </div>

        {/* Price Cards */}
        <div
          className={`flex items-center justify-center text-center p-2 md:p-4 lg:p-6 hover:transform hover:scale-105 transition-all duration-600 ease-out delay-700 cursor-pointer ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <div>
            <p className="flex justify-center text-center group mb-2 md:mb-4">
              <span className="text-xs md:text-base group-hover:text-green-600 transition-colors duration-300">$</span>
              <span className="text-xl md:text-3xl lg:text-5xl font-light group-hover:text-green-600 transition-colors duration-300">
                250
              </span>
              <span className="text-xs group-hover:text-green-600 transition-colors duration-300">/mo</span>
            </p>
            <p className="text-xs md:text-sm lg:text-base font-light hover:text-gray-800 transition-colors duration-300">
              Affordable membership for young golfers, with age-based tiers to grow their game.
            </p>
          </div>
        </div>

        <div
          className={`flex items-center justify-center text-center p-2 md:p-4 lg:p-6 hover:transform hover:scale-105 transition-all duration-1000 ease-out delay-800 cursor-pointer ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <div>
            <p className="flex justify-center text-center group mb-2 md:mb-4">
              <span className="text-xs md:text-base group-hover:text-green-600 transition-colors duration-300">$</span>
              <span className="text-xl md:text-3xl lg:text-5xl font-light group-hover:text-green-600 transition-colors duration-300">
                350
              </span>
              <span className="text-xs group-hover:text-green-600 transition-colors duration-300">/mo</span>
            </p>
            <p className="text-xs md:text-sm lg:text-base font-light hover:text-gray-800 transition-colors duration-300">
              Hit the course in the late afternoon or evening with this budget friendly option
            </p>
          </div>
        </div>

        <div
          className={`flex items-center justify-center text-center p-2 md:p-4 lg:p-6 hover:transform hover:scale-105 transition-all duration-1000 ease-out delay-900 cursor-pointer ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <div>
            <p className="flex justify-center text-center group mb-2 md:mb-4">
              <span className="text-xs md:text-base group-hover:text-green-600 transition-colors duration-300">$</span>
              <span className="text-xl md:text-3xl lg:text-5xl font-light group-hover:text-green-600 transition-colors duration-300">
                450
              </span>
              <span className="text-xs group-hover:text-green-600 transition-colors duration-300">/mo</span>
            </p>
            <p className="text-xs md:text-sm lg:text-base font-light hover:text-gray-800 transition-colors duration-300">
              Play Monday to Friday at a reduced rate ideal for retirees or flexible schedules.
            </p>
          </div>
        </div>

        <div
          className={`flex items-center justify-center text-center p-2 md:p-4 lg:p-6 hover:transform hover:scale-105 transition-all duration-1000 ease-out delay-1000 cursor-pointer ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <div>
            <p className="flex justify-center text-center group mb-2 md:mb-4">
              <span className="text-xs md:text-base group-hover:text-green-600 transition-colors duration-300">$</span>
              <span className="text-xl md:text-3xl lg:text-5xl font-light group-hover:text-green-600 transition-colors duration-300">
                550
              </span>
              <span className="text-xs group-hover:text-green-600 transition-colors duration-300">/mo</span>
            </p>
            <p className="text-xs md:text-sm lg:text-base font-light hover:text-gray-800 transition-colors duration-300">
              Enjoy unlimited access to the course, facilities, and events perfect for dedicated golfers.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div
          className={`flex items-center justify-center py-2 md:py-4 transition-all duration-600 ease-out delay-1100 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <Button variant="blue">Order Now!</Button>
        </div>
        <div
          className={`flex items-center justify-center py-2 md:py-4 transition-all duration-1000 ease-out delay-1200 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <Button variant="blue">Order Now!</Button>
        </div>
        <div
          className={`flex items-center justify-center py-2 md:py-4 transition-all duration-1000 ease-out delay-1300 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <Button variant="blue">Order Now!</Button>
        </div>
        <div
          className={`flex items-center justify-center py-2 md:py-4 transition-all duration-1000 ease-out delay-1400 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <Button variant="blue">Order Now!</Button>
        </div>
      </div>
    </section>
  )
}
