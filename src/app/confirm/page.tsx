"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ConfirmEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    const token = searchParams.get("access_token");
    const email = searchParams.get("email");
    const firstName = searchParams.get("firstName") || "User";
    const lastName = searchParams.get("lastName") || "";

    if (!token || !email) {
      setMessage("Invalid verification link.");
      return;
    }

    async function verify() {
      try {
        const res = await fetch("/api/confirm-email", {
          method: "POST",
          body: JSON.stringify({ token, email, firstName, lastName }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (data.success) {
          setMessage("Email verified! Redirecting...");
          setTimeout(() => router.push("/"), 3000);
        } else {
          setMessage("Verification failed: " + data.message);
        }
      } catch {
        setMessage("Verification error");
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
