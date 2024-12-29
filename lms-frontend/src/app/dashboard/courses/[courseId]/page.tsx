"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; 

const modules = [
  { id: "1-1", name: "Module 1" },
  { id: "1-2", name: "Module 2" },
];

export default function CourseModulesPage() {
  const courseId = "1"; // Replace with actual `courseId` from router query when dynamic

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Modules for Course {courseId}</h1>
      <div className="mb-4">
        <Link href={`/dashboard/courses/${courseId}/modules/create`}>
          <Button variant="default" className="px-4 py-2">
            + Add New Module
          </Button>
        </Link>
      </div>

      <ul className="space-y-4">
        {modules.map((module) => (
          <li
            key={module.id}
            className="border p-4 rounded bg-white shadow-md flex justify-between items-center"
          >
            <span className="font-semibold">{module.name}</span>
            <div className="space-x-4">
              <Link href={`/dashboard/courses/${courseId}/modules/${module.id}`}>
                <Button variant="link" className="text-blue-500">
                  Manage Videos
                </Button>
              </Link>
              <Link href={`/dashboard/courses/${courseId}/modules/${module.id}/edit`}>
                <Button variant="link" className="text-yellow-500">
                  Edit
                </Button>
              </Link>
              <Button variant="link" className="text-red-500 hover:underline">
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
