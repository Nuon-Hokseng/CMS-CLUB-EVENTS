import Image from "next/image"
import { Calendar } from "lucide-react"

export default function SectionThree() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-green-50">
      <div className="container mx-auto text-center px-4 mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-4">Incoming events</h2>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          {/* Event 1 */}
          <div className="space-y-4 md:space-y-6">
            <div className="relative aspect-[4/3] w-full rounded-tr-xl group overflow-hidden animate-fade-in-up delay-100">
              <Image
                src="/friendly.png"
                alt="Golf event 1"
                fill
                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-4xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-4xl"></div>
            </div>

            <div className="flex flex-col justify-center px-1 md:px-2 text-gray-600 animate-slide-in-left delay-400">
              <div className="flex items-center gap-1 md:gap-2 group cursor-pointer mb-2 md:mb-3">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-green-700 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-green-700 group-hover:text-green-600 transition-colors duration-300 font-semibold text-xs md:text-sm lg:text-base">
                  August 2025
                </h3>
              </div>
              <p className="text-xs md:text-sm lg:text-base hover:text-gray-800 transition-colors duration-300">
                Description: Spacious practice areas for perfecting your long drives, chip shots, and putting—ideal for
                warm-ups or daily training.
              </p>
            </div>
          </div>

          {/* Event 2 */}
          <div className="space-y-4 md:space-y-6">
            <div className="relative aspect-[4/3] w-full group overflow-hidden animate-fade-in-up delay-200">
              <Image
                src="/friendly 2.png"
                alt="Golf event 2"
                fill
                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-4xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-4xl"></div>
            </div>

            <div className="flex flex-col justify-center px-1 md:px-2 text-gray-600 animate-slide-in-left delay-500">
              <div className="flex items-center gap-1 md:gap-2 group cursor-pointer mb-2 md:mb-3">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-green-700 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-green-700 group-hover:text-green-600 transition-colors duration-300 font-semibold text-xs md:text-sm lg:text-base">
                  August 2025
                </h3>
              </div>
              <p className="text-xs md:text-sm lg:text-base hover:text-gray-800 transition-colors duration-300">
                Description: Spacious practice areas for perfecting your long drives, chip shots, and putting—ideal for
                warm-ups or daily training.
              </p>
            </div>
          </div>

          {/* Event 3 */}
          <div className="space-y-4 md:space-y-6">
            <div className="relative aspect-[4/3] w-full group overflow-hidden animate-fade-in-up delay-300">
              <Image
                src="/friendly 3.png"
                alt="Golf event 3"
                fill
                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-4xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-tr-xl rounded-bl-xl rounded-br-xl rounded-tl-4xl"></div>
            </div>

            <div className="flex flex-col justify-center px-1 md:px-2 text-gray-600 animate-slide-in-left delay-600">
              <div className="flex items-center gap-1 md:gap-2 group cursor-pointer mb-2 md:mb-3">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-green-700 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-green-700 group-hover:text-green-600 transition-colors duration-300 font-semibold text-xs md:text-sm lg:text-base">
                  August 2025
                </h3>
              </div>
              <p className="text-xs md:text-sm lg:text-base hover:text-gray-800 transition-colors duration-300">
                Description: Spacious practice areas for perfecting your long drives, chip shots, and putting—ideal for
                warm-ups or daily training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
