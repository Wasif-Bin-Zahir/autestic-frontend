"use client";

import React, { useEffect, useState } from "react";
import PackageForm, { PackageFormData } from "@/app/dashboard/components/PackageForm";
import { useRouter } from "nextjs-toploader/app";
import { useParams } from "next/navigation";

export default function EditPackagePage() {
  const [initialValues, setInitialValues] = useState<PackageFormData | null>(null);
  const router = useRouter();
  const params = useParams();
  const packagesId = params?.packagesId;
  

  useEffect(() => {
    if (packagesId) {
      const packageDetails: PackageFormData = {
        name: "Basic Plan",
        price: "$10/month",
      };
      setInitialValues(packageDetails);
    }
  }, [packagesId]);

  const handleEditPackage = (data: PackageFormData) => {
    console.log("Package Updated:", data);
    alert("Package updated successfully!");
    router.push("/dashboard/packages");
  };

  if (!initialValues) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Package</h1>
            <PackageForm
        initialValues={initialValues}
        onSubmit={handleEditPackage}
        submitButtonLabel="Update Package"
      />
    </div>
  );
}

