import Image from "next/image";

export default function sectionFour() {
  return (
    <section className="h-200 bg-green-50">
      <div className="container mx-auto text-center h-10 justify-center border-20">
        <h2 className="text-4xl font-bold text-green-700 mb-4">
          Incoming events
        </h2>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 h-150 mt-20 px-90 gap-10">
        <div className="">
          <div className="mt-20 text-green-600">
            <h1 className="font-light text-4xl px-25">Golf Review</h1>
            <p className="mt-2 px-25">Samdech Pok</p>
          </div>

          <br />

          <div className="flex flex-col justify-center text-center mt-10 px-20 text-lg text-gray-600">
            An exceptional golf experience from start to finish! The course is
            beautifully maintained, offering a perfect balance of challenge and
            enjoyment for all skill levels. The club’s staff is incredibly
            welcoming and professional, making every visit feel special. Whether
            you&apos;re here for a quick round, a weekend tournament, or to relax at
            one of the club events, this place truly stands out. A hidden gem
            for golf lovers!
          </div>
        </div>
        <div className=" relative w-120">
          <Image
            src="/review.png"
            alt="event1"
            fill
            className="object-cover rounded-tr-3xl rounded-br-3xl rounded-bl-3xl rounded-tl-4xl"
          />
        </div>
      </div>
    </section>


  );
}
