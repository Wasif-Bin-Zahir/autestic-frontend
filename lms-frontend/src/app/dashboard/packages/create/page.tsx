"use client";

import React from "react";
import PackageForm, { PackageFormData } from "@/app/dashboard/components/PackageForm";
import { useRouter } from "nextjs-toploader/app";

export default function CreatePackagePage() {
  const router = useRouter();

  const handleCreatePackage = (data: PackageFormData) => {
    console.log("Package Created:", data);
    alert("Package created successfully!");
    router.push("/dashboard/packages");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Create Package</h1>
      <PackageForm onSubmit={handleCreatePackage} submitButtonLabel="Create Package" />
    </div>
  );
}
