"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

type CourseForm = {
  name: string;
  description: string;
  thumbnail: string;
  metadata: {
    level: string;
    duration: string;
  };
};

export default function AddCoursePage() {
  const { register, handleSubmit } = useForm<CourseForm>();
  const router = useRouter();

  const onSubmit = (data: CourseForm) => {
    console.log("Course Added:", data);
    alert("Course added successfully!");
    router.push("/dashboard/courses");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Course</h1>
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
          Save Course
        </Button>
      </form>
    </div>
  );
}
