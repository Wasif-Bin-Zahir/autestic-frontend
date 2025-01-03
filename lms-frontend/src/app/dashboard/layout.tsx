"use client"

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
