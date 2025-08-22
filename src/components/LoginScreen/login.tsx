"use client";
import Image from "next/image";
import Logo from "../main-logo";
import Button from "../button";
import { useRouter } from "next/navigation";
export default function UserLogin() {
  const router = useRouter();
  return (
    <section className="w-screen min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Hero Image - Hidden on mobile */}
        <div className="hidden lg:block bg-green-200 relative w-full h-full p-10 flex justify-center items-center">
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
              Login to your Account
            </h1>
            <p className="text-gray-600 text-sm md:text-base mt-3 lg:mt-4">
              See what is going on with your Golfing Journey
            </p>
          </div>

          {/* Form */}
          <div className="px-4 md:px-6 lg:px-10 pb-6 lg:pb-10">
            <form className="flex flex-col gap-4 md:gap-5 mb-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-gray-600 text-sm md:text-base font-light"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Mail@gmail.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-4 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm md:text-base text-gray-600 transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-gray-600 text-sm md:text-base font-light"
                >
                  Password
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
              <Button variant="green">Sign in</Button>

              <p className="text-sm md:text-base">
                Don't have one?{" "}
                <button className="text-green-600 hover:text-green-700 font-medium underline transition-colors duration-200" onClick={() => router.push("/signup")}>
                  Sign up
                </button>
              </p>

              {/* Social Login Buttons */}
              <div className="space-y-3 mt-4">
                <Button
                  variant="white"
                  className="w-full h-12 md:h-14 flex items-center justify-center gap-3 rounded-xl bg-white text-gray-600 hover:bg-green-700 hover:text-white border-2 border-gray-300 transition-all duration-300 text-sm md:text-base"
                >
                  <Image
                    src="/google.png"
                    alt="Google"
                    width={20}
                    height={20}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                  Continue with Google
                </Button>

                <Button
                  variant="white"
                  className="w-full h-12 md:h-14 flex items-center justify-center gap-3 rounded-xl bg-white text-gray-600 hover:bg-green-700 hover:text-white border-2 border-gray-300 transition-all duration-300 text-sm md:text-base"
                >
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={20}
                    height={20}
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                  Continue with Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
