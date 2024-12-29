"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input"; // Adjust path as per your project
import { Button } from "@/components/ui/button"; // Adjust path as per your project
import { Textarea } from "@/components/ui/textarea"; // Adjust path as per your project

type CourseForm = {
  name: string;
  description: string;
};

export default function CreateCoursePage() {
  const { register, handleSubmit } = useForm<CourseForm>();
  const router = useRouter();

  const onSubmit: SubmitHandler<CourseForm> = (data) => {
    console.log("New Course Data:", data);
    // Simulate course creation
    alert("Course created successfully!");

    // Redirect back to the courses page
    router.push("/dashboard/courses");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Course</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-6 rounded shadow-md"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Course Name
          </label>
          <Input
            {...register("name", { required: "Course name is required" })}
            type="text"
            placeholder="Enter course name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <Textarea
            {...register("description", { required: "Description is required" })}
            placeholder="Enter course description"
          />
        </div>

        <Button type="submit" variant="default">
          Create Course
        </Button>
      </form>
    </div>
  );
}
