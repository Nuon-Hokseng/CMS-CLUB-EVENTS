"use client";
import Image from "next/image";
import Logo from "../ui/main-logo";
import Button from "../ui/main-button";
import { useRouter } from "next/navigation";
export default function UserLogin() {
  const router = useRouter();
  return (
    <section className="w-screen min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Hero Image - Hidden on mobile */}
        <div className="hidden lg:block bg-green-200 relative w-full h-full p-10 justify-center items-center">
          <Image
            src="/login logo.png"
            alt="splash login logo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side - Login Form - Full width on mobile */}
        <div className="bg-green-50 w-full min-h-screen relative">
          {/* Logo */}
          <div className="p-4 md:p-6 lg:p-10">
            <button onClick={() => router.push("/")}>
              <Logo />
            </button>
          </div>

          {/* Header */}
          <div className="px-4 md:px-6 lg:px-10 pb-6 lg:pb-10 flex flex-col text-center">
            <h1 className="text-gray-600 text-2xl md:text-3xl lg:text-4xl font-semibold">
              Join the Club
            </h1>
            <p className="text-gray-600 text-sm md:text-base mt-3 lg:mt-4">
              Stay Updated on Your Golfing Progress
            </p>
          </div>

          {/* Form */}
          <div className="px-4 md:px-6 lg:px-10 pb-6 lg:pb-10">
            <form className="flex flex-col gap-4 md:gap-5 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-gray-600 text-sm md:text-base font-light"
                >
                  Username
                </label>
                <input
                  type="name"
                  id="name"
                  placeholder="John Cena"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-4 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm md:text-base text-gray-600 transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-gray-600 text-sm md:text-base font-light"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="mail@gmail.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-4 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm md:text-base text-gray-600 transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-gray-600 text-sm md:text-base font-light"
                >
                  Create Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-4 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm md:text-base text-gray-600 transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-gray-600 text-sm md:text-base font-light"
                >
                  Confirm your Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-4 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm md:text-base text-gray-600 transition-all duration-200"
                />
              </div>
            </form>

            {/* Buttons */}
            <div className="text-gray-600 text-sm md:text-base flex flex-col text-center gap-4">
              <Button variant="green">Sign up</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
