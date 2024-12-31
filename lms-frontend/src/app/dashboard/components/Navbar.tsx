"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear authentication tokens or cookies
    localStorage.removeItem("authToken");
    // Redirect to the login page
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-between bg-white shadow px-6 py-4">
      <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
      <div>
        <Button variant="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
