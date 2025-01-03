"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'nextjs-toploader/app';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "authToken=; path=/; max-age=0"; // Clear the cookie
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
