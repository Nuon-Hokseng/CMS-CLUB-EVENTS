import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  const supabase = await createClient();
  const body = await req.json();
  const { token, email, firstName, lastName } = body;
  // 1) Verify token
  const { data: userData, error: verifyError } = await supabase.auth.verifyOtp({
    token,
    email,
    type: "signup",
  });

  if (verifyError || !userData.user) {
    return new Response(
      JSON.stringify({
        success: false,
        message: verifyError?.message || "Invalid token",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const userId = userData.user.id;

  // 2) Insert profile now that user is verified
  const { error: insertError } = await supabase.from("profiles").insert({
    id: userId,
    first_name: firstName,
    last_name: lastName,
  });

  if (insertError) {
    return new Response(
      JSON.stringify({ success: false, message: insertError.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
