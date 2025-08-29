import Image from "next/image";

export default function SectionFourReview() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-green-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-4">
          Review
        </h2>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-8 md:mb-12 lg:mb-16"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="order-2 lg:order-1">
          <div className="text-green-600 mb-6 lg:mb-8">
            <h1 className="font-light text-2xl md:text-3xl lg:text-4xl px-2 md:px-4 lg:px-6">
              Golf Review
            </h1>
            <p className="mt-2 px-2 md:px-4 lg:px-6 text-sm md:text-base">
              Samdech Pok
            </p>
          </div>

          <div className="flex flex-col justify-center text-center px-2 md:px-4 lg:mt-40 lg:px-6 text-sm md:text-base lg:text-2xl text-gray-600 leading-relaxed">
            &quot;An exceptional golf experience from start to finish! The
            course is beautifully maintained, offering a perfect balance of
            challenge and enjoyment for all skill levels. The club&apos;s staff
            is incredibly welcoming and professional, making every visit feel
            special. Whether you&apos;re here for a quick round, a weekend
            tournament, or to relax at one of the club events, this place truly
            stands out. A hidden gem for golf lovers!&quot;
          </div>
        </div>

        <div className="relative w-full h-80 md:h-170 lg:h-[28rem] xl:h-[50rem] order-1 lg:order-2">
          <Image
            src="/review.png"
            alt="Golf course review"
            fill
            className="object-cover rounded-tr-3xl rounded-br-3xl rounded-bl-3xl rounded-tl-4xl"
          />
        </div>
      </div>
    </section>
  );
}
