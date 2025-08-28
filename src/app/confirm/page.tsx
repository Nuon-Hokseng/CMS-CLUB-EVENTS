"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ConfirmEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    const token = searchParams.get("access_token");
    const type = searchParams.get("type");
    const firstName = searchParams.get("firstName") || "User";
    const lastName = searchParams.get("lastName") || "";

    if (!token || type !== "signup") {
      setMessage("Invalid verification link.");
      return;
    }

    async function verify() {
      try {
        const res = await fetch("/api/confirm-email", {
          method: "POST",
          body: JSON.stringify({ token, firstName, lastName }),
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        if (data.success) {
          setMessage("Email verified! Redirecting to home...");
          setTimeout(() => router.push("/"), 3000);
        } else {
          setMessage("Verification failed: " + data.message);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setMessage("Verification error: " + err.message);
        } else {
          setMessage("Verification error: An unknown error occurred.");
        }
      }
    }

    verify();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <p>{message}</p>
    </div>
  );
}
