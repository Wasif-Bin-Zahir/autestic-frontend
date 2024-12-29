"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; 

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear authentication tokens or cookies (if any)
    localStorage.removeItem("authToken"); // Example: Clear JWT token

    // Redirect to the login page
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-between bg-white shadow p-4">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <div>
        <Button
          variant="secondary" // Use the appropriate variant if you have variants defined
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
