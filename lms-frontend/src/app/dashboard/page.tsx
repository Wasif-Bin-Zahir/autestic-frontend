// Admin dashboard

"use client";

import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold">Welcome to the Admin Dashboard</h1>
          <p className="mt-4 text-gray-600">Select a section to manage data.</p>
        </div>
      </div>
    </div>
  );
}
