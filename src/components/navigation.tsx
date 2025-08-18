"use client";

import { useState, useEffect } from "react";
import { Clock, MapPin, Mail } from "lucide-react";
import Image from "next/image";
import Button from "@/components/button";

export default function Navigation() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentLocation] = useState("Traeng Trayeung, Kirirom");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      {/* Top Info Bar - 60px height */}
      <div className="h-[60px] bg-green-900 backdrop-blur-md border-border/50">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Time */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-light">
              <Clock className="h-4 w-4" />
              <span>{currentTime}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-light">
              <MapPin className="h-4 w-4" />
              <span>{currentLocation}</span>
            </div>

            {/* Gmail */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-light">
              <Mail className="h-4 w-4" />
              <span>3 new messages</span>
            </div>
          </div>

          {/* Right side info */}
          <div className="text-sm text-muted-foreground font-light">
            Welcome back, User
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-background/60 backdrop-blur-md border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20c">
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
                  className="text-muted-foreground text-white rounded-full hover:bg-green-700 transform hover:scale-105 transition-all duration-300 px-5 py-3"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-muted-foreground text-white rounded-full hover:bg-green-700 transform hover:scale-105 transition-all duration-300 px-5 py-3"
                >
                  Events
                </a>
                <a
                  href="#"
                  className="text-muted-foreground text-white rounded-full hover:bg-green-700 transform hover:scale-105 transition-all duration-300 px-5 py-3"
                >
                  Membership
                </a>
                <a
                  href="#"
                  className="text-muted-foreground text-white rounded-full hover:bg-green-700 transform hover:scale-105 transition-all duration-300 px-5 py-3"
                >
                  About us
                </a>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4 gap-8">
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center font-light">
                <p>Interested?</p>
              </div>
              <Button variant="blue" >Book now</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
