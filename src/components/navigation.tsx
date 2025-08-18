"use client"

import { useState, useEffect } from "react"
import { Clock, MapPin, Mail } from "lucide-react"
import Image from "next/image"
import Button from "@/components/button"

export default function Navigation() {
  const [currentTime, setCurrentTime] = useState("")
  const [currentLocation] = useState("Traeng Trayeung, Kirirom")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 100) // Change background after scrolling 100px
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      {/* Top Info Bar - 60px height */}
      <div
        className={`h-[60px] backdrop-blur-md border-border/50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 shadow-md" : "bg-green-900"
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Time */}
            <div
              className={`flex items-center gap-2 text-sm font-light transition-colors duration-300 ${
                isScrolled ? "text-gray-600" : "text-white/80"
              }`}
            >
              <Clock className="h-4 w-4" />
              <span>{currentTime}</span>
            </div>

            {/* Location */}
            <div
              className={`flex items-center gap-2 text-sm font-light transition-colors duration-300 ${
                isScrolled ? "text-gray-600" : "text-white/80"
              }`}
            >
              <MapPin className="h-4 w-4" />
              <span>{currentLocation}</span>
            </div>

            {/* Gmail */}
            <div
              className={`flex items-center gap-2 text-sm font-light transition-colors duration-300 ${
                isScrolled ? "text-gray-600" : "text-white/80"
              }`}
            >
              <Mail className="h-4 w-4" />
              <span>Golf.168@gmail.com</span>
            </div>
          </div>

          {/* Right side info */}
          <div
            className={`text-sm font-light transition-colors duration-300 ${
              isScrolled ? "text-gray-600" : "text-white/80"
            }`}
          >
            Welcome back, User
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`backdrop-blur-md border-border/30 transition-all duration-300 ${
          isScrolled ? "bg-white/95 shadow-lg" : "bg-black/20"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/main logo 1.png"
                alt="Company Logo"
                width={90}
                height={120}
                className="mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Main Navigation - 4 sections in the middle */}
            <div className="flex-1 flex justify-center">
              <div className="flex items-center space-x-8">
                <a
                  href="#"
                  className={`rounded-full transform hover:scale-105 transition-all duration-300 px-5 py-3 font-medium ${
                    isScrolled
                      ? "text-gray-700 hover:bg-green-100 hover:text-green-700"
                      : "text-white hover:bg-green-700"
                  }`}
                >
                  Home
                </a>
                <a
                  href="#"
                  className={`rounded-full transform hover:scale-105 transition-all duration-300 px-5 py-3 font-medium ${
                    isScrolled
                      ? "text-gray-700 hover:bg-green-100 hover:text-green-700"
                      : "text-white hover:bg-green-700"
                  }`}
                >
                  Events
                </a>
                <a
                  href="#"
                  className={`rounded-full transform hover:scale-105 transition-all duration-300 px-5 py-3 font-medium ${
                    isScrolled
                      ? "text-gray-700 hover:bg-green-100 hover:text-green-700"
                      : "text-white hover:bg-green-700"
                  }`}
                >
                  Membership
                </a>
                <a
                  href="#"
                  className={`rounded-full transform hover:scale-105 transition-all duration-300 px-5 py-3 font-medium ${
                    isScrolled
                      ? "text-gray-700 hover:bg-green-100 hover:text-green-700"
                      : "text-white hover:bg-green-700"
                  }`}
                >
                  About us
                </a>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4 gap-8">
              <div
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isScrolled ? "bg-green-100 text-green-700" : "bg-white/20 text-white backdrop-blur-sm"
                }`}
              >
                <p>Interested?</p>
              </div>
              <Button variant="blue">
                Book now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
