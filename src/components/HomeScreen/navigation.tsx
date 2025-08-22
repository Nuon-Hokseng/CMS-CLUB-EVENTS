"use client";
import { useState, useEffect } from "react";
import { Clock, MapPin, Mail, Menu, X } from "lucide-react";
import Button from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Navigation() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState("");
  const [currentLocation] = useState("Traeng Trayeung, Kirirom");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      {/* Top Info Bar - Hidden on mobile, visible on md+ */}
      <div
        className={`h-[30px] backdrop-blur-md border-border/50 transition-all duration-300 hidden md:block ${
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

            {/* Location - Hidden on smaller screens */}
            <div
              className={`hidden lg:flex items-center gap-2 text-sm font-light transition-colors duration-300 ${
                isScrolled ? "text-gray-600" : "text-white/80"
              }`}
            >
              <MapPin className="h-4 w-4" />
              <span>{currentLocation}</span>
            </div>

            {/* Gmail - Hidden on smaller screens */}
            <div
              className={`hidden lg:flex items-center gap-2 text-sm font-light transition-colors duration-300 ${
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
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 md:h-15">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image src={"/logo.png"} alt="logo" width={70} height={80} />
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center space-x-10">
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
                  href="#event"
                  className={`rounded-full transform hover:scale-105 transition-all duration-300 px-5 py-3 font-medium ${
                    isScrolled
                      ? "text-gray-700 hover:bg-green-100 hover:text-green-700"
                      : "text-white hover:bg-green-700"
                  }`}
                >
                  Events
                </a>
                <a
                  href="#member"
                  className={`rounded-full transform hover:scale-105 transition-all duration-300 px-5 py-3 font-medium ${
                    isScrolled
                      ? "text-gray-700 hover:bg-green-100 hover:text-green-700"
                      : "text-white hover:bg-green-700"
                  }`}
                >
                  Membership
                </a>
                <button onClick={() => router.push("/aboutus")}>
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
                </button>
              </div>
            </div>

            {/* Desktop Right side actions - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4 gap-8">
              <Button
                className=" bg-green-600 text-white rounded-2xl hover:bg-green-700 transform hover:scale-101 transition-all duration-300 shadow-md hover:shadow-lg w-20 h-10 "
                variant="green"
                onClick={() => router.push("/login")}
              >
                Log in
              </Button>
            </div>

            {/* Mobile Menu Button - Only visible on mobile */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Only visible when open */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden border-t border-border/30 transition-all duration-300 ${
              isScrolled ? "bg-white/95" : "bg-black/40"
            }`}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {/* Mobile Info Bar */}
              <div className="flex items-center justify-between text-sm pb-4 border-b border-border/30">
                <div
                  className={`flex items-center gap-2 font-light transition-colors duration-300 ${
                    isScrolled ? "text-gray-600" : "text-white/80"
                  }`}
                >
                  <Clock className="h-4 w-4" />
                  <span>{currentTime}</span>
                </div>
                <div
                  className={`text-sm font-light transition-colors duration-300 ${
                    isScrolled ? "text-gray-600" : "text-white/80"
                  }`}
                >
                  Welcome back, User
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <a
                  href="#"
                  className={`block rounded-lg px-4 py-3 font-medium transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-700 hover:bg-green-100 hover:text-green-700"
                      : "text-white hover:bg-green-700"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#event"
                  className={`block rounded-lg px-4 py-3 font-medium transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-700 hover:bg-green-100 hover:text-green-700"
                      : "text-white hover:bg-green-700"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Events
                </a>
                <a
                  href="#member"
                  className={`block rounded-lg px-4 py-3 font-medium transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-700 hover:bg-green-100 hover:text-green-700"
                      : "text-white hover:bg-green-700"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Membership
                </a>
                <a
                  href="#"
                  className={` block rounded-lg px-4 py-3 font-medium transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-700 hover:bg-green-100 hover:text-green-700"
                      : "text-white hover:bg-green-700"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About us
                </a>
              </div>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-border/30 space-y-3 flex flex-col justify-center">
                <div
                  className={`px-4 py-2 rounded-full font-medium text-center transition-all duration-300 ${
                    isScrolled
                      ? "bg-green-100 text-green-700"
                      : "bg-white/20 text-white backdrop-blur-sm"
                  }`}
                >
                  <p>Interested?</p>
                </div>
                <Button variant="green" onClick={() => router.push("/login")}>
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
