"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; 

const courses = [
  { id: "1", name: "Course 1" },
  { id: "2", name: "Course 2" },
];

export default function CoursesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Courses</h1>
      <div className="mb-4">
        <Link href="/dashboard/courses/createCourse">
          <Button variant="default" className="px-4 py-2">
            + Add New Course
          </Button>
        </Link>
      </div>

      <ul className="space-y-4">
        {courses.map((course) => (
          <li
            key={course.id}
            className="border p-4 rounded bg-white shadow-md flex justify-between items-center"
          >
            <span className="font-semibold">{course.name}</span>
            <div className="space-x-4">
              <Link href={`/dashboard/courses/${course.id}`}>
                <Button variant="link" className="text-blue-500">
                  Manage Modules
                </Button>
              </Link>
              <Link href={`/dashboard/courses/${course.id}/edit`}>
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
