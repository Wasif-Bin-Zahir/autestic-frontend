"use client";

import React from "react";

type CardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
};

export default function Card({ title, value, icon }: CardProps) {
  return (
    <div className="p-4 bg-white shadow rounded flex items-center space-x-4">
      <div className="text-blue-500">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
