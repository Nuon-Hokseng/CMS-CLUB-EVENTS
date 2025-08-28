"use client";

import Image from "next/image";
import Logo from "../ui/main-logo";
import Button from "../ui/main-button";
import { useRouter } from "next/navigation";
import { signupServer } from "../../app/api/signup/signupServer";
import { useState } from "react";

export default function UserSignup() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await signupServer(formData);

    if (result.success) {
      setMessage("Signup successful! Redirecting...");
      setTimeout(() => {
        router.push("/"); // redirect to homepage
      }, 3000);
    } else {
      setMessage(`Error: ${result.message}`);
    }
  }

  return (
    <section className="w-screen min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side - Hero Image */}
        <div className="hidden lg:block bg-green-200 relative w-full h-full p-10">
          <Image
            src="/login logo.png"
            alt="Splash login logo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side - Signup Form */}
        <div className="bg-green-50 w-full min-h-screen relative flex flex-col">
          {/* Logo */}
          <div className="p-4 md:p-6 lg:p-10">
            <button onClick={() => router.push("/")}>
              <Logo />
            </button>
          </div>

          {/* Header */}
          <div className="px-4 md:px-6 lg:px-10 pb-6 lg:pb-10 text-center">
            <h1 className="text-gray-600 text-2xl md:text-3xl lg:text-4xl font-semibold">
              Join the Club
            </h1>
            <p className="text-gray-600 text-sm md:text-base mt-3 lg:mt-4">
              Stay Updated on Your Golfing Progress
            </p>
          </div>

          {/* Form */}
          <div className="px-4 md:px-6 lg:px-10 flex-1">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 md:gap-5 mb-6"
            >
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-gray-600 text-sm md:text-base font-light"
                >
                  First name
                </label>
                <input
                  name="firstName"
                  id="firstName"
                  type="text"
                  placeholder="John"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-4 
                             focus:ring-2 focus:ring-green-500 focus:outline-none 
                             text-sm md:text-base text-gray-600 transition-all duration-200"
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-gray-600 text-sm md:text-base font-light"
                >
                  Last name
                </label>
                <input
                  name="lastName"
                  id="lastName"
                  type="text"
                  placeholder="Cena"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-4 
                             focus:ring-2 focus:ring-green-500 focus:outline-none 
                             text-sm md:text-base text-gray-600 transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-gray-600 text-sm md:text-base font-light"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="mail@example.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-4 
                             focus:ring-2 focus:ring-green-500 focus:outline-none 
                             text-sm md:text-base text-gray-600 transition-all duration-200"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-gray-600 text-sm md:text-base font-light"
                >
                  Create your password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="********"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-4 
                             focus:ring-2 focus:ring-green-500 focus:outline-none 
                             text-sm md:text-base text-gray-600 transition-all duration-200"
                />
              </div>

              {/* Buttons */}
              <div className="text-gray-600 text-sm md:text-base flex flex-col text-center gap-4 mt-4">
                <Button type="submit" variant="green">
                  Sign up
                </Button>
                {message && <p>{message}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
