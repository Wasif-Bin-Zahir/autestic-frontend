"use client";

import React from "react";
import CourseForm, { CourseFormData } from "@/app/dashboard/components/CourseForm"
import { useRouter } from 'nextjs-toploader/app';

export default function AddCoursePage() {
  const router = useRouter();

  const handleAddCourse = (data: CourseFormData) => {
    console.log("Course Added:", data);
    alert("Course added successfully!");
    router.push("/dashboard/courses");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Course</h1>
      <CourseForm
        onSubmit={handleAddCourse}
        submitButtonLabel="Save Course"
      />
    </div>
  );
}
