// Landing page

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 text-gray-800">
      <h1 className="text-5xl font-bold mb-6">Welcome to the Admin Panel</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        Manage subscriptions, courses, modules, videos, and users.
      </p>
      <Button
        onClick={handleLogin}
        className="font-bold"
      >
        Go to Admin Login
      </Button>
    </div>
  );
}
