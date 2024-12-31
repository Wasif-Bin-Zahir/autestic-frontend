"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ModuleForm = {
  name: string;
  description: string;
};

export default function AddModulePage() {
  // 1. Retrieve the dynamic `courseId` from the URL.
  const { courseId } = useParams();

  // 2. Access Next.js navigation for redirects.
  const router = useRouter();

  // 3. Set up react-hook-form for handling form data.
  const { register, handleSubmit } = useForm<ModuleForm>();

  // 4. Handle form submission (replace with your API call).
  const onSubmit = (data: ModuleForm) => {
    console.log("New Module Data:", data);
    alert(`Module "${data.name}" added successfully to course ${courseId}!`);

    // Navigate back to the course's module listing page.
    router.push(`/dashboard/courses/${courseId}/modules`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Add New Module for Course: {courseId}
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-6 rounded shadow-md max-w-md"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Module Name
          </label>
          <Input
            {...register("name", { required: true })}
            placeholder="Enter module name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <Textarea
            {...register("description", { required: true })}
            placeholder="Enter module description"
          />
        </div>
        <Button type="submit" className="w-full">
          Save Module
        </Button>
      </form>
    </div>
  );
}
