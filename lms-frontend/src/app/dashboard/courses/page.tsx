"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const initialCourses = [
  {
    id: "1",
    name: "Course 1",
    description: "This is the first course",
    thumbnail: "https://via.placeholder.com/150",
    metadata: { level: "Beginner", duration: "4 weeks" },
  },
  {
    id: "2",
    name: "Course 2",
    description: "This is the second course",
    thumbnail: "https://via.placeholder.com/150",
    metadata: { level: "Intermediate", duration: "8 weeks" },
  },
];

export default function CourseListPage() {
  const [courses, setCourses] = useState(initialCourses);

  const handleDelete = (courseId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (confirmDelete) {
      setCourses((prev) => prev.filter((course) => course.id !== courseId));
      alert("Course deleted successfully!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Course Management</h1>
      <Link href="/dashboard/courses/addCourse">
        <Button className="mb-4">+ Add New Course</Button>
      </Link>
      {courses.map((course) => (
        <div
          key={course.id}
          className="border p-4 rounded bg-white shadow-md flex justify-between items-center mb-4"
        >
          <div className="flex items-center space-x-4">
            <Image
              src={course.thumbnail}
              alt={course.name}
              width={64}
              height={64}
              className="rounded-md"
            />
            <div>
              <h2 className="text-lg font-bold">{course.name}</h2>
              <p className="text-sm text-gray-500">{course.description}</p>
              <p className="text-sm text-gray-400">
                <strong>Level:</strong> {course.metadata.level} |{" "}
                <strong>Duration:</strong> {course.metadata.duration}
              </p>
            </div>
          </div>
          <div className="space-x-2">
            <Link href={`/dashboard/courses/${course.id}/modules`}>
              <Button variant="outline" size="sm">
                Manage Modules
              </Button>
            </Link>
            <Link href={`/dashboard/courses/${course.id}/editCourse`}>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </Link>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleDelete(course.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
