"use server";

import { createClient } from "../../../supabase/server"; // adjust path if different

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Step 1: Create user in Supabase Auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    return { success: false, message: authError.message };
  }

  // Step 2: Insert into "profiles" table
  if (authData.user) {
    const { error: dbError } = await supabase.from("profiles").insert([
      {
        id: authData.user.id, // use auth user id as PK
        first_name: firstName,
        last_name: lastName,
      },
    ]);

    if (dbError) {
      return { success: false, message: dbError.message };
    }
  }

  return {
    success: true,
    message: "Signup successful! Please check your email to verify.",
  };
}
