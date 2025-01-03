"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export type PackageFormData = {
  name: string;
  price: string;
};

export default function PackageForm({
  initialValues,
  onSubmit,
  submitButtonLabel = "Save Package",
}: {
  initialValues?: PackageFormData;
  onSubmit: (data: PackageFormData) => void;
  submitButtonLabel?: string;
}) {
  const { register, handleSubmit } = useForm<PackageFormData>({
    defaultValues: initialValues, // Automatically populate the form
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded shadow-md">
      <div>
        <Label htmlFor="name">Package Name</Label>
        <Input {...register("name", { required: true })} id="name" placeholder="Enter package name" />
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input {...register("price", { required: true })} id="price" placeholder="Enter price" />
      </div>
      <Button type="submit" className="w-full">
        {submitButtonLabel}
      </Button>
    </form>
  );
}
