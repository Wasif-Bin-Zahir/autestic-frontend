"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

// 1. Import ShadCN Card components
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function SubscriptionDetailsPage() {
  const params = useParams();
  const { userId } = params; // Extract userId from params

  const subscription = {
    startDate: "2023-01-01", // Replace with API data
    renewalDate: "2024-01-01", // Replace with API data
    paymentStatus: "Paid",     // Replace with API data
  };

  const handleTerminate = () => {
    alert("Terminate subscription functionality coming soon!");
    // Implement API call for terminating the subscription
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      {/* 2. Use Card for the container */}
      <Card className="max-w-lg w-full">
        {/* CardHeader for main heading */}
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Subscription Details for User {userId}
          </CardTitle>
          <CardDescription className="mt-2">
            Manage subscription status and payments.
          </CardDescription>
        </CardHeader>

        {/* CardContent for the subscription info */}
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-700 font-medium">Start Date:</span>
            <span className="text-gray-900 font-bold">{subscription.startDate}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-3">
            <span className="text-gray-700 font-medium">Renewal Date:</span>
            <span className="text-gray-900 font-bold">{subscription.renewalDate}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700 font-medium">Payment Status:</span>
            <span
              className={`font-bold ${
                subscription.paymentStatus === "Paid" ? "text-green-600" : "text-red-600"
              }`}
            >
              {subscription.paymentStatus}
            </span>
          </div>
        </CardContent>

        {/* CardFooter for the action button */}
        <CardFooter className="flex justify-center">
          <Button
            variant="destructive"
            onClick={handleTerminate}
            className="shadow-md"
          >
            Terminate Subscription
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
