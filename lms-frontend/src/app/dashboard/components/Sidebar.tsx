"use client";

import React from "react";
import { usePathname} from "next/navigation";
import { cn } from "@/lib/utils"; // Utility for conditional classNames if you have it
import { Button } from "@/components/ui/button";
import { useRouter } from 'nextjs-toploader/app';
export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  // Routes including Packages and Payments
  const menuItems = [
    { name: "Dashbaord", route: "/dashboard/users" },
    { name: "Users", route: "/dashboard/users" },
    { name: "Courses", route: "/dashboard/courses" },
    { name: "Packages", route: "/dashboard/packages" },
    { name: "Payments", route: "/dashboard/payments" },
    { name: "Subscriptions", route: "/dashboard/subscriptions" },
    { name: "Reports", route: "/dashboard/reports" },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-full flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        Admin Panel
      </div>
      <div className="flex-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.route;

          return (
            <Button
              key={item.name}
              variant="ghost"
              className={cn(
                "w-full justify-start text-left rounded-none px-4 py-3 border-b border-gray-800",
                isActive
                  ? "bg-gray-800 text-white font-semibold"
                  : "hover:bg-gray-800 hover:text-white"
              )}
              onClick={() => router.push(item.route)}
            >
              {item.name}
            </Button>
          );
        })}
      </div>
      <div className="p-4 border-t border-gray-700">
        <p className="text-sm text-gray-400">© 2023 Your Company</p>
      </div>
    </div>
  );
}

