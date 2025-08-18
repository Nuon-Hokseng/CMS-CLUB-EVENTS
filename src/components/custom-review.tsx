import Button from "./button";

export default function customerReview() {
  return (
    <section className="h-150 bg-green-50 px-70">
      <div className="container mx-auto text-center h-10 justify-center border-20">
        <h2 className="text-4xl font-bold text-green-700 mb-4">Any queries?</h2>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
      </div>

      <div className="h-100 bg-green-800 mt-20 px-30 rounded-2xl flex flex-col gap-4 justify-end p-10">
        <h1 className="text-3xl">Contact us</h1>
        <p className="font-light text-gray-100 text-opacity-25">
          Please fill out the form and we’ll get back to you
        </p>
        <div className="h-10 bg-white px-3 rounded-l">
          <p className="text-gray-600">Name*</p>
        </div>
        <div className="h-10 bg-white px-3 rounded-l">
          <p className="text-gray-600">Email*</p>
        </div>
        <div className="h-25 bg-white px-3 rounded-l">
          <p className="text-gray-600">Message*</p>
        </div>
        <div>
          <Button variant="blue">Send</Button>
        </div>
      </div>
    </section>
  );
}
