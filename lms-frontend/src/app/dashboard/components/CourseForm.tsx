"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export type CourseFormData = {
  name: string;
  description: string;
  thumbnail: string;
  metadata: {
    level: string;
    duration: string;
  };
};

type CourseFormProps = {
  initialValues?: CourseFormData;
  onSubmit: (data: CourseFormData) => void;
  submitButtonLabel: string;
};

export default function CourseForm({
  initialValues,
  onSubmit,
  submitButtonLabel,
}: CourseFormProps) {
  const { register, handleSubmit, setValue } = useForm<CourseFormData>();

  // Populate form with initial values for edit mode
  useEffect(() => {
    if (initialValues) {
      setValue("name", initialValues.name);
      setValue("description", initialValues.description);
      setValue("thumbnail", initialValues.thumbnail);
      setValue("metadata.level", initialValues.metadata.level);
      setValue("metadata.duration", initialValues.metadata.duration);
    }
  }, [initialValues, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded shadow-md"
    >
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
        <Input
          {...register("metadata.duration", { required: true })}
          placeholder="Enter course duration"
        />
      </div>
      <Button type="submit" className="w-full">
        {submitButtonLabel}
      </Button>
    </form>
  );
}
