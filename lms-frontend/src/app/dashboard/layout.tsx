// app/dashboard/layout.tsx
"use client";

import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// This type is how Next.js expects layout props
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar always present */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Navbar always present */}
        <Navbar />

        {/* Main Content Area */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
