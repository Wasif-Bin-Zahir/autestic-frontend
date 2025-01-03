"use client";

import React, { useEffect, useState } from "react";
import CourseForm, { CourseFormData } from "@/app/dashboard/components/CourseForm"
import { useRouter } from 'nextjs-toploader/app';
import { useParams } from "next/navigation"

export default function EditCoursePage() {
  const [initialValues, setInitialValues] = useState<CourseFormData | null>(null);
  const router = useRouter();
  const params = useParams();
  const courseId = params?.courseId;

  useEffect(() => {
    if (courseId) {
      console.log(courseId)
      const courseDetails = {
        name: "Course 1",
        description: "This is the first course",
        thumbnail: "https://via.placeholder.com/150",
        metadata: { level: "Beginner", duration: "4 weeks" },
      };
      setInitialValues(courseDetails);
    }
  }, [courseId]);

  const handleEditCourse = (data: CourseFormData) => {
    console.log("Course Updated:", data);
    alert("Course updated successfully!");
    router.push("/dashboard/courses");
  };

  if (!initialValues) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Course</h1>
      <CourseForm
        initialValues={initialValues}
        onSubmit={handleEditCourse}
        submitButtonLabel="Update Course"
      />
    </div>
  );
}
