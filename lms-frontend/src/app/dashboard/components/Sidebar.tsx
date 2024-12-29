"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  // routes
const menuItems = [
  { name: "Dashboard", route: "/dashboard" },
  { name: "Users", route: "/dashboard/users" },
  { name: "Courses", route: "/dashboard/courses" },
  { name: "Subscriptions", route: "/dashboard/subscriptions" },
  { name: "Reports", route: "/dashboard/reports" },
];

  return (
    <div className="w-64 bg-gray-800 text-white h-full flex flex-col">
      <div className="p-4 text-lg font-bold">Admin Panel</div>
      <ul className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => router.push(item.route)}
            className="cursor-pointer p-2 hover:bg-gray-700"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
