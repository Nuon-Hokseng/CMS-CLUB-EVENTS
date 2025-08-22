"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"

const events = [
  {
    id: 1,
    image: "/event1.png",
    date: "August 15, 2025",
    title: "Summer Championship",
    description: "Join our annual summer championship tournament with exciting prizes and professional competition.",
  },
  {
    id: 2,
    image: "/event2.png",
    date: "August 22, 2025",
    title: "Skills Workshop",
    description: "Improve your golf techniques with our professional instructors in this intensive skills workshop.",
  },
  {
    id: 3,
    image: "/event3.png",
    date: "August 29, 2025",
    title: "Family Golf Day",
    description: "A fun-filled day for the whole family with games, lessons, and special activities for kids.",
  },
  {
    id: 4,
    image: "/event1.png",
    date: "September 5, 2025",
    title: "Pro-Am Tournament",
    description: "Play alongside professional golfers in this exclusive pro-am tournament experience.",
  },
  {
    id: 5,
    image: "/event2.png",
    date: "September 12, 2025",
    title: "Charity Golf Event",
    description: "Support local charities while enjoying a day of golf with fellow community members.",
  },
  {
    id: 6,
    image: "/event3.png",
    date: "September 19, 2025",
    title: "Night Golf Experience",
    description: "Experience golf like never before with our special night golf event under the lights.",
  },
]

export default function SectionThree() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToNext = () => {
    if (currentIndex < events.length - 3) {
      setCurrentIndex(currentIndex + 1)
      scrollToIndex(currentIndex + 1)
    }
  }

  const scrollToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      scrollToIndex(currentIndex - 1)
    }
  }

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.children[0]?.clientWidth || 0
      const gap = 16 // gap-4 = 16px
      scrollContainerRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-green-50">
      {/* Header */}
      <div className="container mx-auto text-center px-4 mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-700 mb-4 animate-fade-in-up">
          Upcoming Events
        </h2>
        <div className="w-16 md:w-20 lg:w-24 h-1 bg-green-600 mx-auto rounded-full animate-scale-in"></div>
      </div>

      {/* Navigation Controls */}
      <div className="container mx-auto px-4 mb-6">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <button
            onClick={scrollToPrev}
            disabled={currentIndex === 0}
            className="p-2 md:p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-50"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-green-700" />
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: Math.max(1, events.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  scrollToIndex(index)
                }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-green-600" : "bg-green-200"
                }`}
              />
            ))}
          </div>

          <button
            onClick={scrollToNext}
            disabled={currentIndex >= events.length - 3}
            className="p-2 md:p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-50"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-green-700" />
          </button>
        </div>
      </div>

      {/* Events Container */}
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {events.map((event, index) => (
              <div
                key={event.id}
                className="flex-none w-72 md:w-80 lg:w-96 space-y-3 md:space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Event Image */}
                <div className="relative aspect-[4/3] w-full rounded-2xl group overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl"></div>
                </div>

                {/* Event Details */}
                <div className="px-2 md:px-3 space-y-2 md:space-y-3">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 text-green-700 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" />
                    <h3 className="text-green-700 group-hover:text-green-600 transition-colors duration-300 font-semibold text-xs md:text-sm">
                      {event.date}
                    </h3>
                  </div>

                  <h4 className="font-bold text-gray-800 text-sm md:text-base lg:text-lg leading-tight">
                    {event.title}
                  </h4>

                  <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300 text-xs md:text-sm leading-relaxed line-clamp-3">
                    {event.description}
                  </p>

                  <button className="text-green-600 hover:text-green-700 font-medium text-xs md:text-sm transition-colors duration-300 mt-2">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
