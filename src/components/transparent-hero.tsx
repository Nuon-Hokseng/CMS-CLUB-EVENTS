import Image from "next/image";
import Button from "@/components/button";
export default function TransparentHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Transparency */}
      <div className="absolute inset-0">
        <Image
          src="/splash.png"
          alt="Hero Background"
          width={2000}
          height={2000}
          className="object-cover opacity-80"
          priority
        />
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Main Logo */}
      <div className="relative z-10 flex items-center justify-end h-full px-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg mb-5">
            Enjoy Luxury <br /> Golfing Experience
          </h1>
          <p className="text-xl text-white/90 drop-shadow-md max-w-2xl mb-5">
            Experience excellence through innovation and transparency
          </p>
          <Button variant="blue" >Check our events</Button>
        </div>
      </div>
    </div>
  );
}
