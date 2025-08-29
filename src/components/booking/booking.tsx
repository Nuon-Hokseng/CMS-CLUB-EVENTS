"use client";

import Link from "next/link";
import React from "react";
import Logo from "../ui/main-logo";
import { Calendar } from "../ui/calendar";
import { Clock } from "lucide-react";
import Button from "../ui/main-button";
import { createBooking } from "@/app/api/booking/bookServer";

export default function Booking() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = React.useState(false);
  const [isTrainerModalOpen, setIsTrainerModalOpen] = React.useState(false);
  const [isThankYou, setIsThankYou] = React.useState(false);
  const [trainerToBook, setTrainerToBook] = React.useState<{
    name: string;
    time: string;
  } | null>(null);
  const [bookedTrainer, setBookedTrainer] = React.useState<{
    name: string;
    time: string;
  } | null>(null);

  const handleCalendarBooking = async () => {
    if (!date || !selectedTime) return;

    try {
      await createBooking({
        trainerName: null, // No trainer for calendar bookings
        time: selectedTime,
        date: date.toISOString(),
      });

      setBookedTrainer(null); // Clear booked trainer state
      setIsThankYou(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  const handleTrainerBooking = async () => {
    if (!date || !selectedTime || !trainerToBook) return;

    try {
      await createBooking({
        trainerName: trainerToBook.name,
        time: selectedTime,
        date: date.toISOString(),
      });

      setBookedTrainer(trainerToBook); // Set booked trainer for thank you message
      setIsThankYou(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
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

  const handleSelectDate = (newDate: Date | undefined) => {
    setDate(newDate);
    if (newDate) {
      setSelectedTime(null);
      setIsCalendarModalOpen(true);
    }
  };

  const handleTrainerBook = (session: { name: string; time: string }) => {
    setTrainerToBook(session);
    setSelectedTime(session.time); // Pre-select time for trainer event
    setIsTrainerModalOpen(true);
  };

  return (
    <main className="bg-green-50 min-h-screen flex flex-col">
      {/* Header */}
      <section id="header">
        <div className="w-full py-4 sm:py-6 px-4 flex items-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light border-b-2 border-green-600">
          <Link href="/">
            <Logo />
          </Link>
          <p>Book Your Spot</p>
        </div>
      </section>

      {/* Main content */}
      <section
        id="main_part"
        className="flex flex-col lg:flex-row flex-1 lg:h-[calc(100vh-80px)]"
      >
        {/* Calendar */}
        <div className="w-full flex justify-center items-center py-4 sm:py-6">
          <Calendar
            showOutsideDays
            mode="single"
            selected={date}
            onSelect={handleSelectDate}
            className="rounded-lg border w-[95%] sm:w-[90%] md:max-w-md lg:max-w-lg text-green-600"
          />
        </div>

        {/* Upcoming Events */}
        <section className="w-full flex justify-center items-center px-3 sm:px-4 pb-6 lg:pb-0">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl p-4 sm:p-6 lg:p-10 grid text-gray-600 rounded-3xl">
            <p className="font-light text-base sm:text-lg md:text-xl lg:text-2xl text-green-600 mb-4">
              Upcoming Events
            </p>
            {sessions.map((session) => (
              <div
                key={session.id}
                className="w-full mb-4 sm:mb-6 p-2 sm:p-3 border-b last:border-none"
              >
                <p className="text-sm sm:text-base md:text-lg">
                  Session with {session.name}
                </p>
                <p className="flex items-center text-xs sm:text-sm md:text-base gap-2 mt-1">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-600" />
                  {session.time}
                </p>
                <Button
                  variant="green"
                  className="text-xs sm:text-sm md:text-base mt-2 sm:mt-3"
                  onClick={() => handleTrainerBook(session)}
                >
                  Book
                </Button>
                <div className="flex">
                  <p className="ml-auto text-xs sm:text-sm md:text-base hover:text-green-500 transition-colors duration-200 cursor-pointer">
                    <a href="/aboutus#trainer">Details</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Calendar Booking Modal */}
      {isCalendarModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl flex flex-col p-4 sm:p-6 w-[95%] sm:w-[90%] max-w-lg max-h-[90vh] overflow-y-auto text-center items-center border-4 border-green-300">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-700 mb-4">
              Confirm General Booking
            </h2>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              <span className="text-green-600">Selected Date:</span>{" "}
              <span className="font-bold">{date?.toDateString()}</span>
            </p>
            <div className="w-full grid grid-cols-1 gap-2 sm:gap-3 mb-6">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant="green"
                  className={`bg-green-600 text-white rounded-2xl transition-all duration-300 w-full h-10 sm:h-12 ${
                    selectedTime === time ? "bg-green-800" : ""
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
            <button
              onClick={() => {
                setIsCalendarModalOpen(false);
                handleCalendarBooking();
              }}
              className="px-3 sm:px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 w-full text-sm sm:text-base"
              disabled={!selectedTime}
            >
              Book Now
            </button>
            <button
              onClick={() => {
                setIsCalendarModalOpen(false);
              }}
              className="px-3 sm:px-4 py-2 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400 mt-3 sm:mt-4 w-full text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Trainer Booking Modal */}
      {isTrainerModalOpen && trainerToBook && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 w-[95%] sm:w-[90%] max-w-md h-auto flex flex-col items-center justify-center text-center">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-green-700 mb-4">
              Confirm Booking with {trainerToBook.name}
            </h2>
            <p className="text-gray-700 mb-6 text-xs sm:text-sm md:text-base">
              You are about to book a session with{" "}
              <span className="text-red-400">{trainerToBook.name}</span> on{" "}
              <span className="text-red-400">{date?.toDateString()}</span> at{" "}
              <span className="text-red-400">{trainerToBook.time}</span>.
            </p>
            <div className="flex gap-3 sm:gap-4 w-full">
              <button
                onClick={() => {
                  setIsTrainerModalOpen(false);
                  handleTrainerBooking();
                }}
                className="flex-1 px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm sm:text-base"
              >
                Confirm
              </button>
              <button
                onClick={() => setIsTrainerModalOpen(false)}
                className="flex-1 px-3 sm:px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 text-sm sm:text-base"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Unified Thank You Modal */}
      {isThankYou && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 w-[95%] sm:w-[90%] max-w-md h-auto flex flex-col items-center justify-center text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-700 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base">
              {bookedTrainer
                ? `Your booking with ${bookedTrainer.name} at ${bookedTrainer.time} is confirmed.`
                : `Your general booking for ${date?.toDateString()} at ${selectedTime} is confirmed.`}
            </p>
            <button
              onClick={() => setIsThankYou(false)}
              className="px-3 sm:px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 mt-4 sm:mt-5 w-full text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
