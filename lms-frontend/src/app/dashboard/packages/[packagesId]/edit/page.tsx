"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"; // Import Label component
import { useSearchParams } from "next/navigation";
import { useRouter } from 'nextjs-toploader/app';

type PackageForm = {
  name: string;
  price: string;
};

export default function EditPackagePage() {
  const { register, handleSubmit, setValue } = useForm<PackageForm>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const packageId = searchParams.get("packageId");

  useEffect(() => {
    if (packageId) {
      // Simulate fetching package details
      const packageDetails = { name: "Basic Plan", price: "$10/month" }; // Replace with API call
      setValue("name", packageDetails.name);
      setValue("price", packageDetails.price);
    }
  }, [packageId, setValue]);

  const onSubmit = (data: PackageForm) => {
    console.log("Package Updated:", data);
    alert("Package updated successfully!");
    router.push("/dashboard/packages");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Package</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-6 rounded shadow-md"
      >
        <div>
          <Label htmlFor="name">Package Name</Label>
          <Input
            {...register("name", { required: true })}
            id="name"
            placeholder="Enter package name"
          />
        </div>
        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            {...register("price", { required: true })}
            id="price"
            placeholder="Enter price"
          />
        </div>
        <Button type="submit" className="w-full">
          Update Package
        </Button>
      </form>
    </div>
  );
}
