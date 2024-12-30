"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter, useParams } from "next/navigation";

type ModuleForm = {
  name: string;
  completionRequirement: string;
};

export default function EditModulePage() {
  const { register, handleSubmit, setValue } = useForm<ModuleForm>();
  const router = useRouter();
  const params = useParams();
  const moduleId = params?.moduleId;
  const courseId = params?.courseId;

  useEffect(() => {
    if (moduleId) {
      // Simulate fetching module details
      const moduleDetails = {
        name: "Module 1",
        completionRequirement: "Complete all videos",
      }; // Replace with API call
      setValue("name", moduleDetails.name);
      setValue("completionRequirement", moduleDetails.completionRequirement);
    }
  }, [moduleId, setValue]);

  const onSubmit = (data: ModuleForm) => {
    console.log("Updated Module Data:", data);
    alert("Module updated successfully!");
    router.push(`/dashboard/courses/${courseId}/modules`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Module</h1>
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
          Update Module
        </Button>
      </form>
    </div>
  );
}
