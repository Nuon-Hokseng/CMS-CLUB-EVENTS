import Image from "next/image"

type Feature = {
  name: string
  image: string // path or URL to image
  description: string
}

type CircularFeaturesProps = {
  features: Feature[]
}

export default function SectionOne({ features }: CircularFeaturesProps) {
  return (
    <section className="py-4 md:py-8 bg-green-50">
      <div className="container mx-auto text-center px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-4">Our Facilities</h2>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-4 md:mb-6"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer transition-all duration-500 ease-in-out hover:transform hover:-translate-y-4"
            >
              <div className="relative mb-4 md:mb-6 lg:mb-8 p-2 md:p-4">
                <div className="relative overflow-visible transition-all duration-500 ease-in-out group-hover:shadow-2xl group-hover:shadow-green-200/50 rounded-full">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.name}
                    width={1900}
                    height={200}
                    className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border-2 border-gray-400 rounded-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:border-green-500 group-hover:border-4"
                    priority
                  />
                </div>
              </div>

              <div className="text-center px-2">
                <h3 className="text-green-600 text-base md:text-lg font-semibold mb-2">{feature.name}</h3>
                <p className="text-gray-600 text-sm font-light max-w-xs mx-auto">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
