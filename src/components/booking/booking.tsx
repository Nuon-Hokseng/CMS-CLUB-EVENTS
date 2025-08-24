"use client";
import Link from "next/link";
import React from "react";
import Logo from "../ui/main-logo";
import { Calendar } from "../ui/calendar";
import { Clock } from "lucide-react";
import Button from "../ui/main-button";
export default function Booking() {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isThankYou, setIsThankYou] = React.useState(false);
  const [isThankYouTrainer, setIsThankYouTrainer] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [trainerToBook, setTrainerToBook] = React.useState<{
    name: string;
    time: string;
  } | null>(null);
  const [bookedTrainer, setBookedTrainer] = React.useState<{
    name: string;
    time: string;
  } | null>(null);

  React.useEffect(() => {
    setDate(new Date());
  }, []);
  const handleBookNow = () => {
    if (!date || !selectedTime) return;

    console.log("Booking confirmed:", date.toDateString(), selectedTime);
    setIsThankYou(true);
  };
  const sessions = [
    { id: 1, name: "Nick", time: "8:00 AM to 10:00 AM" },
    { id: 2, name: "Mind", time: "10:00 AM to 12:00 PM" },
    { id: 3, name: "Alice", time: "1:00 PM to 3:00 PM" },
    { id: 4, name: "Alex", time: "10:00 AM to 12:00 PM" },
  ];

  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "1:00 PM - 3:00 PM",
    "3:00 PM - 5:00 PM",
  ];

  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
    console.log("Selected time: ", time);
  };

  const handleSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    console.log("Selected date: ", newDate);
    if (newDate) setIsOpen(true);
  };
  return (
    <main className="bg-green-50">
      <section id="header">
        <div className=" w-full h-35 p-10 flex items-center gap-5 text-3xl font-light border-b-2 border-green-600 ">
          <Link href="/">
            <Logo />
          </Link>
          <p>Book Your Spot</p>
        </div>
      </section>

      <section id="main_part" className="flex h-195">
        <div className="w-full flex gap-x-4 justify-center items-center">
          <Calendar
            showOutsideDays
            mode="single"
            selected={date}
            onSelect={handleSelect}
            className="rounded-lg border w-150 text-green-600 "
          />
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl flex flex-col p-3 w-300 h-180 text-center justify-center items-center border-4 border-green-300">
              <h2 className="text-3xl font-semibold text-green-700 mb-4">
                Confirm Date
              </h2>
              <div className="text-gray-700 mb-6 flex flex-col">
                <p className="text-green-600">Selected Date</p>
                <br />
                <div className="text-xl font-bold">{date?.toDateString()}</div>
              </div>
              <div className="w-100 h-fit justify-center items-center p-10 grid grid-cols-1 gap-3">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant="green"
                    className={`bg-green-600 text-white rounded-2xl transform hover:scale-101 transition-all duration-300 shadow-md hover:shadow-lg w-full h-12 ${
                      selectedTime === time ? "bg-green-800" : ""
                    }`}
                    onClick={() => handleSelectTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
              <button
                onClick={handleBookNow}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 "
              >
                Book Now
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 mt-5 w-27"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {isThankYou && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl p-6 w-[400px] h-[250px] flex flex-col items-center justify-center text-center">
              <h2 className="text-xl font-semibold text-green-700 mb-4">
                Thank You!
              </h2>
              <p className="text-gray-700">
                Your booking for{" "}
                <span className="text-red-400">{date?.toDateString()}</span> at{" "}
                <span className="text-red-400">{selectedTime}</span> is
                confirmed.
              </p>
              <button
                onClick={() => setIsThankYou(false)}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 mt-5 w-27"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {isThankYouTrainer && bookedTrainer && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl p-6 w-[400px] h-[250px] flex flex-col items-center justify-center text-center">
              <h2 className="text-xl font-semibold text-green-700 mb-4">
                Thank You!
              </h2>
              <p className="text-gray-700">
                Your booking for{" "}
                <span className="text-red-400">{bookedTrainer.name}</span> at{" "}
                <span className="text-red-400">{bookedTrainer.time}</span> is
                confirmed.
              </p>
              <button
                onClick={() => setIsThankYouTrainer(false)}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 mt-5 w-27"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {showConfirm && trainerToBook && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl p-6 w-[350px] h-[200px] flex flex-col items-center justify-center text-center">
              <h2 className="text-lg font-semibold text-green-700 mb-4">
                Are you sure?
              </h2>
              <p className="text-gray-700 mb-6">
                You are about to book{" "}
                <span className="text-red-400">{trainerToBook.name}</span> at{" "}
                <span className="text-red-400">{trainerToBook.time}</span>.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setBookedTrainer(trainerToBook);
                    setIsThankYouTrainer(true);
                    setShowConfirm(false);
                    console.log(
                      `Booked trainer ${trainerToBook.name} at ${trainerToBook.time}`
                    );
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowConfirm(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
        <section className="w-full flex justify-center items-center">
          <div className="w-190 h-160  p-10 grid text-gray-600 rounded-3xl border-2 border-green-500">
            <p className="font-light text-2xl text-green-600">
              Upcoming Events
            </p>
            {sessions.map((session) => (
              <>
                <div key={session.name} className=" w-full h-30 p-3">
                  <p>Session with {session.name}</p>
                  <p className="flex items-center text-sm gap-2">
                    <Clock className="w-4 h-4 text-green-600" />
                    {session.time}
                  </p>
                  <Button
                    variant="green"
                    className="text-sm mt-3"
                    onClick={() => {
                      setTrainerToBook({
                        name: session.name,
                        time: session.time,
                      });
                      setShowConfirm(true);
                    }}
                  >
                    Book
                  </Button>
                  <div className="flex">
                    <p className="flex items-start ml-auto hover:text-green-500 transition-colors duration-200 cursor-pointer">
                      <a href="/aboutus#trainer">Details</a>
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
