import Image from "next/image";
import SocialLinks from "../ui/social";

export default function Footer() {
  return (
    <section className="bg-green-50" id="footer">
      <div className="px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo and Description Column */}
        <div className="py-8 px-4 md:p-6 lg:p-8 flex flex-col items-center gap-4 border-t border-green-600 lg:border-l ">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={2000}
            height={50}
            className="md:w-20 md:h-20 lg:w-24 lg:h-24"
          />
          <div className="h-1 w-16 md:w-20 bg-green-600 rounded-2xl"></div>
          <p className="text-center text-gray-600 text-sm md:text-base">
            A friendly golf club with a scenic course, great events, and a
            welcoming community.
          </p>
          <SocialLinks
            size={20}
            className="text-green-600 md:text-2xl"
            links={{
              email: "mailto:you@example.com",
              facebook: "https://facebook.com/yourpage",
              instagram: "https://instagram.com/yourhandle",
              linkedin: "https://linkedin.com/in/yourprofile",
            }}
          />
        </div>

        {/* Latest News Column */}
        <div className="py-8 px-4 md:p-6 lg:p-8 flex flex-col gap-4 border-t border-green-600">
          <p className="text-green-600 font-semibold text-lg md:text-xl">
            Latest News
          </p>
          <div className="text-gray-500 hover:text-green-500 transition-colors duration-200 cursor-pointer">
            <p className="text-sm md:text-base">
              Ways To Improve Your Short Game
            </p>
          </div>
          <div className="text-gray-500 hover:text-green-500 transition-colors duration-200 cursor-pointer">
            <p className="text-sm md:text-base">
              Tips for improving your serve
            </p>
          </div>
          <div className="text-gray-500 hover:text-green-500 transition-colors duration-200 cursor-pointer">
            <p className="text-sm md:text-base">
              Golfer&apos;s Wish List: How To Fix A Slice
            </p>
          </div>
        </div>

        {/* Contact Column */}
        <div className="py-8 px-4 md:p-6 lg:p-8 flex flex-col gap-4 border-t border-green-600">
          <p className="text-green-600 font-semibold text-lg md:text-xl">
            Contact us
          </p>
          <div className="text-gray-500 hover:text-green-500 transition-colors duration-200">
            <p className="text-sm md:text-base">
              Address: Traeng Trayueng, Kampong Speu, Cambodia
            </p>
          </div>
          <div className="text-gray-500 hover:text-green-500 transition-colors duration-200">
            <p className="text-sm md:text-base">Call Us: 069 969 969</p>
          </div>
          <div className="text-gray-500 hover:text-green-500 transition-colors duration-200">
            <p className="text-sm md:text-base">
              Email: Golf.club168@gmail.com
            </p>
          </div>
        </div>

        {/* Blog Images Column */}
        <div className="py-8 px-4 md:p-6 lg:p-8 border-t border-green-600 lg:border-r">
          <p className="text-green-600 font-semibold text-lg md:text-xl mb-4">
            Check out our blog
          </p>
          <div className="flex flex-wrap gap-y-4 -mx-1">
            <div className="w-1/2 px-1">
              <div className="max-w-[150px] aspect-square bg-gray-200 border-2 border-gray-300 rounded"></div>
            </div>
            <div className="w-1/2 px-1">
              <div className="max-w-[150px] aspect-square bg-gray-200 border-2 border-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-900 py-3 md:py-4 flex items-center justify-center">
        <p className="text-white text-xs md:text-sm text-center px-4">
          Nuon Hokseng © 2025 All Rights Reserved Terms of use and Privacy
          policy
        </p>
      </div>
    </section>
  );
}
