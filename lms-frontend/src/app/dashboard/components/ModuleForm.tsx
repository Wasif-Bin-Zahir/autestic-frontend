"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export type ModuleFormData = {
  name: string;
  description?: string;
  completionRequirement?: string;
};

type ModuleFormProps = {
  initialValues?: ModuleFormData;
  onSubmit: (data: ModuleFormData) => void;
  submitButtonLabel: string;
};

export default function ModuleForm({
  initialValues,
  onSubmit,
  submitButtonLabel,
}: ModuleFormProps) {
  const { register, handleSubmit, setValue } = useForm<ModuleFormData>();

  // Populate form with initial values for edit mode
  useEffect(() => {
    if (initialValues) {
      setValue("name", initialValues.name);
      setValue("description", initialValues.description || "");
      setValue("completionRequirement", initialValues.completionRequirement || "");
    }
  }, [initialValues, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded shadow-md"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Module Name</label>
        <Input
          {...register("name", { required: "Module name is required" })}
          placeholder="Enter module name"
        />
      </div>
      {initialValues?.description !== undefined && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <Textarea
            {...register("description")}
            placeholder="Enter module description"
          />
        </div>
      )}
      {initialValues?.completionRequirement !== undefined && (
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Completion Requirement
          </label>
          <Textarea
            {...register("completionRequirement")}
            placeholder="Define the completion requirement (e.g., 'Complete all videos')"
          />
        </div>
      )}
      <Button type="submit" className="w-full">
        {submitButtonLabel}
      </Button>
    </form>
  );
}
