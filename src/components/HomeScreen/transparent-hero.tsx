import Image from "next/image"
import Button from "@/components/button"

export default function TransparentHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Transparency */}
      <div className="absolute inset-0">
        <Image src="/splash.png" alt="Hero Background" fill className="object-cover opacity-90" priority />
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Main Logo */}
      <div className="relative z-10 flex items-center justify-center md:justify-end h-full px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-5">
            Enjoy Luxury <br /> Golfing Experience
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 drop-shadow-md max-w-xs md:max-w-lg lg:max-w-xl mb-5 mx-auto">
            Experience excellence through innovation and transparency
          </p>
          <Button variant="green">Book now</Button>
        </div>
      </div>
    </div>
  )
}
