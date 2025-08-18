import Image from "next/image";
import { Calendar } from "lucide-react";

export default function SectionThree() {
  return (
    <section className="h-180 bg-green-50 border-black">
      <div className="container mx-auto text-center h-10 justify-center border-20">
        <h2 className="text-4xl font-bold text-green-700 mb-4">
          Incoming events
        </h2>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-3 h-200 mt-20 px-30 gap-x-10">
        <div className="relative w-full rounded-tr-xl group overflow-hidden animate-fade-in-up delay-100">
          <Image
            src="/friendly.png"
            alt="event1"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-4xl transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-4xl"></div>
        </div>

        <div className="relative w-full group overflow-hidden animate-fade-in-up delay-200">
          <Image
            src="/friendly 2.png"
            alt="event1"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-4xl transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-4xl"></div>
        </div>

        <div className="relative w-full group overflow-hidden animate-fade-in-up delay-300">
          <Image
            src="/friendly 3.png"
            alt="event1"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-4xl transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-4xl"></div>
        </div>

        <div className="h-50 flex flex-col justify-center px-10 text-gray-600 animate-slide-in-left delay-400">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Calendar className="w-5 h-5 text-green-700 transition-transform duration-300 group-hover:scale-110" />
            <h1 className="text-green-700 group-hover:text-green-600 transition-colors duration-300">
              August 2025
            </h1>
          </div>
          <br />
          <p className="text-lg hover:text-gray-800 transition-colors duration-300">
            Description: Spacious practice areas for perfecting your long
            drives, chip shots, and putting—ideal for warm-ups or daily
            training.
          </p>
        </div>

        <div className="h-50 flex flex-col justify-center px-10 text-gray-600 animate-slide-in-left delay-500">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Calendar className="w-5 h-5 text-green-700 transition-transform duration-300 group-hover:scale-110" />
            <h1 className="text-green-700 group-hover:text-green-600 transition-colors duration-300">
              August 2025
            </h1>
          </div>
          <br />
          <p className="text-lg hover:text-gray-800 transition-colors duration-300">
            Description: Spacious practice areas for perfecting your long
            drives, chip shots, and putting—ideal for warm-ups or daily
            training.
          </p>
        </div>

        <div className="h-50 flex flex-col justify-center px-10 text-gray-600 animate-slide-in-left delay-600">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Calendar className="w-5 h-5 text-green-700 transition-transform duration-300 group-hover:scale-110" />
            <h1 className="text-green-700 group-hover:text-green-600 transition-colors duration-300">
              August 2025
            </h1>
          </div>
          <br />
          <p className="text-lg hover:text-gray-800 transition-colors duration-300">
            Description: Spacious practice areas for perfecting your long
            drives, chip shots, and putting—ideal for warm-ups or daily
            training.
          </p>
        </div>
      </div>
    </section>
  );
}
