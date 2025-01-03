"use client";

import React, { useEffect, useState } from "react";
import ModuleForm, { ModuleFormData } from "@/app/dashboard/components/ModuleForm";
import { useRouter } from "nextjs-toploader/app";
import { useParams } from "next/navigation";

export default function EditModulePage() {
  const [initialValues, setInitialValues] = useState<ModuleFormData | null>(null);
  const router = useRouter();
  const params = useParams();
  const moduleId = params?.modulesId;
  const courseId = params?.courseId;

  useEffect(() => {
    if (moduleId) {
      console.log("Module ID:", moduleId); // Debugging
      // Simulate fetching module details (replace with an actual API call)
      const moduleDetails = {
        name: "Module 1",
        completionRequirement: "Complete all videos",
      };
      setInitialValues(moduleDetails); // Set mock data
    }
  }, [moduleId]);

  const handleEditModule = (data: ModuleFormData) => {
    console.log("Updated Module Data:", data);
    alert("Module updated successfully!");
    router.push(`/dashboard/courses/${courseId}/modules`);
  };

  // Fallback UI when loading
  if (!initialValues) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Edit Module</h1>
        <p>Loading module details...</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Module</h1>
      <ModuleForm
        initialValues={initialValues}
        onSubmit={handleEditModule}
        submitButtonLabel="Update Module"
      />
    </div>
  );
}
