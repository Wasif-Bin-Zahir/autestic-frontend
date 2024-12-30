"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

type UserForm = {
  name: string;
  email: string;
  location: string;
};

export default function AddUserPage() {
  const { register, handleSubmit } = useForm<UserForm>();
  const router = useRouter();

  const onSubmit = (data: UserForm) => {
    console.log("New User Data:", data);
    alert("User added successfully!");
    router.push("/dashboard/users"); // Redirect back to user list
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New User</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded shadow-md">
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
          Create User
        </Button>
      </form>
    </div>
  );
}
