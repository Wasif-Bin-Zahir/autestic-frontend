"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter, useParams } from "next/navigation";

type CourseForm = {
  name: string;
  description: string;
  thumbnail: string;
  metadata: {
    level: string;
    duration: string;
  };
};

export default function EditCoursePage() {
  const { register, handleSubmit, setValue } = useForm<CourseForm>();
  const router = useRouter();
  const params = useParams();
  const courseId = params?.courseId;

  useEffect(() => {
    if (courseId) {
      // Simulate fetching course details
      const courseDetails = {
        name: "Course 1",
        description: "This is the first course",
        thumbnail: "https://via.placeholder.com/150",
        metadata: { level: "Beginner", duration: "4 weeks" },
      }; // Replace with API call
      setValue("name", courseDetails.name);
      setValue("description", courseDetails.description);
      setValue("thumbnail", courseDetails.thumbnail);
      setValue("metadata.level", courseDetails.metadata.level);
      setValue("metadata.duration", courseDetails.metadata.duration);
    }
  }, [courseId, setValue]);

  const onSubmit = (data: CourseForm) => {
    console.log("Course Updated:", data);
    alert("Course updated successfully!");
    router.push("/dashboard/courses");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Course</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded shadow-md">
        <div>
          <label className="block text-sm font-medium text-gray-700">Course Name</label>
          <Input {...register("name", { required: true })} placeholder="Enter course name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <Textarea {...register("description", { required: true })} placeholder="Enter description" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Thumbnail URL</label>
          <Input {...register("thumbnail", { required: true })} placeholder="Enter thumbnail URL" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Level</label>
          <Input {...register("metadata.level", { required: true })} placeholder="Enter course level" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Duration</label>
          <Input {...register("metadata.duration", { required: true })} placeholder="Enter course duration" />
        </div>
        <Button type="submit" className="w-full">
          Update Course
        </Button>
      </form>
    </div>
  );
}
