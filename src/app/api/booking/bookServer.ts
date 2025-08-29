"use server";

import { createClient } from "@/utils/supabase/server";

interface BookingData {
  trainerName: string | null;
  time: string;
  date: string; // ISO string
}

export async function createBooking({ trainerName, time, date }: BookingData) {
  // Pass cookies to the createClient function
  const supabase = await createClient();

  // Get current logged-in user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return {
      success: false,
      error: "You must be logged in or signed up to book.",
    };
  }

  const { data, error } = await supabase.from("bookings").insert({
    user_id: user.id,
    trainer_name: trainerName,
    session_time: time,
    session_date: date,
  });

  console.log("Insert error:", error);
  console.log("Insert data:", data);

  if (error) {
    console.error("Booking error:", error);
    throw new Error("Failed to save booking.");
  }

  return { success: true };
}
