import Button from "../ui/main-button";

export default function CustomerReview() {
  return (
    <section
      className="py-12 md:py-16 lg:py-20 bg-green-50 px-4 md:px-8 lg:px-16"
      id="contact"
    >
      <div className="container mx-auto text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-4">
          Any queries?
        </h2>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
      </div>

      <div className="bg-green-800 px-6 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 rounded-2xl flex flex-col gap-4 md:gap-6 max-w-5xl mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-white">
          Contact us
        </h1>
        <p className="font-light text-gray-300 text-sm md:text-base">
          Please fill out the form and we&apos;ll get back to you
        </p>

        <form className="flex flex-col gap-4 md:gap-5">
          <div>
            <input
              type="text"
              placeholder="Name*"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-4 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm md:text-base"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-4 focus:ring-2 focus:ring-green-500 focus:outline-none text-sm md:text-base"
            />
          </div>

          <div>
            <textarea
              placeholder="Message*"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 md:py-4 focus:ring-2 focus:ring-green-500 focus:outline-none resize-none text-sm md:text-base"
            />
          </div>
        </form>
        <div className="mt-2">
          <Button variant="green">Send</Button>
        </div>
      </div>
    </section>
  );
}
