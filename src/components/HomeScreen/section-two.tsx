"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const events = [
  {
    id: 1,
    title: "Annual Club Championship",
    description:
      "Compete in our Annual Club Championship and showcase your skills, with exciting rounds, friendly rivalry, and a celebration to crown the season's best.",
    image: "/event1.png",
    alt: "Annual Club Championship",
  },
  {
    id: 2,
    title: "Weekend Skills Clinic",
    description:
      "Sharpen your swing and short game with our weekend clinic, led by certified golf pros. Perfect for beginners and intermediate players.",
    image: "/event2.png",
    alt: "Weekend Skills Clinic",
  },
  {
    id: 3,
    title: "Twilight Social Scramble",
    description:
      "A fun 9-hole team scramble at sunset, followed by drinks and dinner at the clubhouse. Great for networking and relaxing on the green.",
    image: "/event3.png",
    alt: "Twilight Social Scramble",
  },
  {
    id: 4,
    title: "Junior Golf Academy",
    description:
      "Introduce young golfers to the fundamentals of the game with our comprehensive junior program. Professional instruction in a fun, supportive environment.",
    image: "/event4.jpg",
    alt: "Junior Golf Academy",
  },
]

export default function EventsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 bg-green-50 overflow-hidden">
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-10">
        <div
          className={`text-center transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-green-700 mb-4">Events</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {events.map((event, index) => {
            const isEven = index % 2 === 0
            const delay = index * 200

            return (
              <div
                key={event.id}
                className={`group flex flex-col ${
                  isEven ? "xl:flex-row" : "xl:flex-row-reverse"
                } gap-6 lg:gap-8 items-center transform transition-all duration-1000 ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* Image Container */}
                <div className="flex-1 relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 w-full">
                  <div className="relative aspect-[3/2] sm:aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.alt}
                      fill
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex-1 text-center xl:text-left space-y-3 lg:space-y-4 w-full">
                  <div className="space-y-3 lg:space-y-4">
                    <h3 className="text-xl sm:text-2xl xl:text-3xl font-semibold text-green-700 group-hover:text-green-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <div className="w-16 h-0.5 bg-green-500 mx-auto xl:mx-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>

                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto xl:mx-0 group-hover:text-gray-700 transition-colors duration-300">
                    {event.description}
                  </p>

                  <div className="pt-1 lg:pt-2">
                    <button className="inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 bg-green-600 text-white text-sm sm:text-base rounded-full hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                      <span className="mr-2">Learn More</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
