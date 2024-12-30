"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type ModuleForm = {
  name: string;
  completionRequirement: string;
};

export default function AddModulePage({ params }: { params: { courseId: string } }) {
  const { register, handleSubmit } = useForm<ModuleForm>();
  const router = useRouter();

  const onSubmit = (data: ModuleForm) => {
    console.log("New Module Data:", data);
    alert("Module added successfully!");
    router.push(`/dashboard/courses/${params.courseId}/modules`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Module</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-6 rounded shadow-md"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Module Name</label>
          <Input {...register("name", { required: true })} placeholder="Enter module name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Completion Requirement</label>
          <Textarea
            {...register("completionRequirement", { required: true })}
            placeholder="Define the completion requirement (e.g., 'Complete all videos')"
          />
        </div>
        <Button type="submit" className="w-full">
          Save Module
        </Button>
      </form>
    </div>
  );
}
