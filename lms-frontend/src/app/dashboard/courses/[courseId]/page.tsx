"use client";

import React from "react";
import { useParams } from "next/navigation";

export default function CourseDetailsPage() {
  const params = useParams();
  const courseId = params?.courseId;

  const course = {
    id: courseId,
    name: "Course 1",
    description: "This is the first course",
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Course Details</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <p>
          <strong>Course Name:</strong> {course.name}
        </p>
        <p>
          <strong>Description:</strong> {course.description}
        </p>
      </div>
    </div>
  );
}
