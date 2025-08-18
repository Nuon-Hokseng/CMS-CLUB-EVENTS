import Image from "next/image";
// Assuming features is now an array of objects
type Feature = {
  name: string;
  image: string; // path or URL to image
  description: string;
};

type CircularFeaturesProps = {
  features: Feature[];
};

export default function sectionOne({ features }: CircularFeaturesProps) {
  return (
    <section className="py-0 bg-green-50">
      <div className="container mx-auto text-center h-10 justify-center border-20">
        <h2 className="text-4xl font-bold text-green-700 mb-4">Our Facilities</h2>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-10 w-full h-120 mt-10 items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer transition-all duration-500 ease-in-out hover:transform hover:-translate-y-4"
            >
              {/* Image container with proper overflow handling */}
              <div className="relative mb-20 p-4">
                <div className="relative overflow-visible transition-all duration-500 ease-in-out group-hover:shadow-2xl group-hover:shadow-green-200/50 rounded-full">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.name}
                    width={1900}
                    height={200}
                    className="w-48 h-48 border-2 border-gray-400 rounded-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:border-green-500 group-hover:border-4"
                    priority
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="text-center">
                <h3 className="text-green-600 text-lg font-semibold mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600 text-sm font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
