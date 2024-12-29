"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button"; 

type ModuleForm = {
  name: string;
};

export default function CreateModulePage() {
  const { register, handleSubmit } = useForm<ModuleForm>();
  const router = useRouter();
  const courseId = "1"; 

  const onSubmit: SubmitHandler<ModuleForm> = (data) => {
    console.log("New Module:", data);
    // Add API call 
    alert("Module created successfully!");

    // Navigate back to the module listing page
    router.push(`/dashboard/courses/${courseId}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Module</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-6 rounded shadow-md"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Module Name
          </label>
          <Input
            {...register("name", { required: "Module name is required" })}
            type="text"
            placeholder="Enter module name"
            className="mt-1"
          />
        </div>
        <Button type="submit" className="w-full">
          Create Module
        </Button>
      </form>
    </div>
  );
}
