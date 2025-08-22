/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import Logo from "../ui/main-logo";
import { Calendar } from "../ui/calendar";
import Button from "../ui/main-button";
export default function booking() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [isOpen, setIsOpen] = React.useState(true);
  const [isThankYou, setIsThankYou] = React.useState(false);
  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "1:00 PM - 3:00 PM",
    "3:00 PM - 5:00 PM",
  ];
  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
    console.log("Selected time:", time);
  };

  const handleSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    console.log(newDate);
    if (newDate) setIsOpen(true);
  };
  return (
    <main className="bg-green-50">
      <section id="header">
        <div className=" w-full h-35 p-10 flex items-center gap-5 text-3xl font-light border-b-2 border-green-600 ">
          <Logo />
          <p>Book Your Spot</p>
        </div>
      </section>

      <section id="main_part" className="flex h-195">
        <div className="w-full bg-green-300 flex gap-x-4 justify-center items-center">
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
              <p className="text-gray-700 mb-6 flex flex-col">
                <p className="text-green-600">Selected Date</p>
                <br />
                <div className="text-xl font-bold">
                  {date?.toDateString()}
                </div>
              </p>
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
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 mt-5"
              >
                Close
              </button>
            </div>
          </div>
        )}
        



        <div className="w-full bg-orange-300 "></div>
      </section>
    </main>
  );
}
