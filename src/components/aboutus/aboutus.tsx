"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-green-600 text-white py-16 px-6 text-center min-h-scree">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About CMS Golf Club
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          A friendly golf club with a scenic course, great events, and a
          welcoming community.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-6 md:px-12 text-gray-600">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Image
            width={2000}
            height={1000}
            src="/aboutus.jpg"
            alt="logo"
            className="rounded-2xl shadow-lg object-cover"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed">
              At CMS Golf Club, our mission is to provide a world-class golfing
              experience for players of all levels. We are dedicated to
              promoting the sport, building community, and creating a space
              where everyone feels welcome.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="bg-white py-12 px-6 md:px-12 " id="trainer">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            Meet Our Trainers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Trainer 1 */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <Image
                width={500}
                height={500}
                src="/trainer3.png"
                alt="Alexander Müller"
                className="rounded-xl mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Alexander Müller</h3>
              <p className="text-sm text-gray-600 mb-2">🇩🇪 German | 15+ Years</p>
              <p className="text-gray-700">
                Swing mechanics & course strategy expert. Certified PGA
                Professional with experience across Europe.
              </p>
            </div>

            {/* Trainer 2 */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <Image
                width={1000}
                height={1000}
                src="/trainer2.png"
                alt="Sophie Leclerc"
                className="rounded-xl mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Sophie Leclerc</h3>
              <p className="text-sm text-gray-600 mb-2">🇫🇷 French | 10 Years</p>
              <p className="text-gray-700">
                Specializes in short game & putting. Passionate about player
                development and women’s golf.
              </p>
            </div>

            {/* Trainer 3 */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <Image
                width={2500}
                height={1000}
                src="/trainer1.png"
                alt="Dara Soth"
                className="rounded-xl mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Dara Soth</h3>
              <p className="text-sm text-gray-600 mb-2">
                🇰🇭 Cambodian | 8 Years
              </p>
              <p className="text-gray-700">
                Focuses on junior training & beginner fundamentals. Beloved
                local coach committed to growing Cambodian golf.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-700 text-white py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Get in Touch
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Have questions about membership, events, or training? Reach out to our
          friendly team today!
        </p>

        <button
          onClick={() => router.push("/#footer")}
          className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </button>
      </section>
    </main>
  );
}
