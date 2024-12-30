"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function SubscriptionDetailsPage() {
  const params = useParams(); // Use useParams to get the userId
  const { userId } = params; // Extract userId from params

  const subscription = {
    startDate: "2023-01-01", // Replace with API data
    renewalDate: "2024-01-01", // Replace with API data
    paymentStatus: "Paid", // Replace with API data
  };

  const handleTerminate = () => {
    alert("Terminate subscription functionality coming soon!");
    // Implement API call for terminating the subscription
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Subscription Details for User {userId}
        </h1>
        <div className="space-y-4">
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
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleTerminate}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md"
          >
            Terminate Subscription
          </button>
        </div>
      </div>
    </div>
  );
}
