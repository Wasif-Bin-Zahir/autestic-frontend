"use client";

import React from "react";
import ModuleForm, { ModuleFormData } from "@/app/dashboard/components/ModuleForm";
import { useParams } from "next/navigation";
import { useRouter } from 'nextjs-toploader/app';

export default function AddModulePage() {
  const { courseId } = useParams();
  const router = useRouter();

  const handleAddModule = (data: ModuleFormData) => {
    console.log("New Module Data:", data);
    alert(`Module "${data.name}" added successfully to course ${courseId}!`);
    router.push(`/dashboard/courses/${courseId}/modules`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Module for Course: {courseId}</h1>
      <ModuleForm
        onSubmit={handleAddModule}
        submitButtonLabel="Save Module"
        initialValues={{ name: "", description: "" }}
      />
    </div>
  );
}
