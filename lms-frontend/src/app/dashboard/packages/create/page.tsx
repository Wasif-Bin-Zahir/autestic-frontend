"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"; // Import Label component
import { useRouter } from "next/navigation";

type PackageForm = {
  name: string;
  price: string;
};

export default function CreatePackagePage() {
  const { register, handleSubmit } = useForm<PackageForm>();
  const router = useRouter();

  const onSubmit = (data: PackageForm) => {
    console.log("Package Created:", data);
    alert("Package created successfully!");
    router.push("/dashboard/packages");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Create Package</h1>
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
          Save Package
        </Button>
      </form>
    </div>
  );
}
