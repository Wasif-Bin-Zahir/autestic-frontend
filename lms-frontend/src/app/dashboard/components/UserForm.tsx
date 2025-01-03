"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export type UserFormData = {
  name: string;
  email: string;
  location: string;
};

type UserFormProps = {
  initialValues?: UserFormData;
  onSubmit: (data: UserFormData) => void;
  submitButtonLabel?: string;
};

const UserForm: React.FC<UserFormProps> = ({
  initialValues,
  onSubmit,
  submitButtonLabel = "Save",
}) => {
  const { register, handleSubmit, setValue } = useForm<UserFormData>({
    defaultValues: initialValues || {},
  });

  useEffect(() => {
    if (initialValues) {
      Object.entries(initialValues).forEach(([key, value]) => {
        setValue(key as keyof UserFormData, value);
      });
    }
  }, [initialValues, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-6 rounded shadow-md"
    >
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          {...register("name", { required: true })}
          id="name"
          placeholder="Enter user name"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          {...register("email", { required: true })}
          id="email"
          placeholder="Enter user email"
        />
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          {...register("location", { required: true })}
          id="location"
          placeholder="Enter location"
        />
      </div>
      <Button type="submit" className="w-full">
        {submitButtonLabel}
      </Button>
    </form>
  );
};

export default UserForm;
