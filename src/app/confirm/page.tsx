import { createClient } from "../../supabase/server";
import type { NextApiRequest, NextApiResponse } from "next";

export async function ConfirmEmailPage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const supabase = await createClient();
  const { token, email, firstName, lastName } = req.body;

  const { data: userData, error: verifyError } = await supabase.auth.verifyOtp({
    token,
    email,
    type: "signup",
  });

  if (verifyError || !userData.user) {
    return res.status(400).json({
      success: false,
      message: verifyError?.message || "Invalid token",
    });
  }

  const userId = userData.user.id;

  const { error: insertError } = await supabase.from("profiles").insert({
    id: userId,
    first_name: firstName,
    last_name: lastName,
  });

  if (insertError) {
    return res
      .status(500)
      .json({ success: false, message: insertError.message });
  }

  return res.status(200).json({ success: true });
}
