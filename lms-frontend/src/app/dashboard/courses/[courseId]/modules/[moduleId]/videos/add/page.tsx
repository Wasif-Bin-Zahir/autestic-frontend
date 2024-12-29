"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type VideoForm = {
  title: string;
  description: string;
  videoFile: FileList;
};

export default function AddVideoPage() {
  const { register, handleSubmit, watch } = useForm<VideoForm>();
  const router = useRouter();
  const courseId = "1"; // Replace with dynamic query from router
  const moduleId = "1-1"; // Replace with dynamic query from router

  // Watching form fields
  const title = watch("title");
  const description = watch("description");

  const onSubmit: SubmitHandler<VideoForm> = async (data) => {
    console.log("New Video Data:", data);
    alert("Video added successfully!");
    router.push(`/dashboard/courses/${courseId}/modules/${moduleId}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Video</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-6 rounded shadow-md"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Video Title
          </label>
          <Input
            {...register("title", { required: true })}
            type="text"
            placeholder="Enter video title"
            className="mt-1"
          />
          {/* Example of watching the title */}
          {title && (
            <p className="text-sm text-gray-500 mt-1">Preview: {title}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <Textarea
            {...register("description", { required: true })}
            placeholder="Enter video description"
            className="mt-1"
          />
          {/* Example of watching the description */}
          {description && (
            <p className="text-sm text-gray-500 mt-1">Preview: {description}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Video
          </label>
          <Input
            {...register("videoFile", { required: true })}
            type="file"
            accept="video/*"
            className="mt-1"
          />
        </div>

        <Button type="submit" className="w-full">
          Save Video
        </Button>
      </form>
    </div>
  );
}
