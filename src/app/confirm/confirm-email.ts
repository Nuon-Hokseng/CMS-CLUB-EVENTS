import { createClient } from "@/supabase/server";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = await createClient();

  if (req.method !== "POST") return res.status(405).end();

  const { token, email, firstName, lastName } = req.body;

  // 1) Verify token
  const { data: userData, error: verifyError } = await supabase.auth.verifyOtp({
    token,
    email,
    type: "signup",
  });

  if (verifyError || !userData.user) {
    return res.status(400).json({ success: false, message: verifyError?.message || "Invalid token" });
  }

  const userId = userData.user.id;

  // 2) Insert profile now that user is verified
  const { error: insertError } = await supabase.from("profiles").insert({
    id: userId,
    first_name: firstName,
    last_name: lastName,
  });

  if (insertError) {
    return res.status(500).json({ success: false, message: insertError.message });
  }

  return res.status(200).json({ success: true });
}
