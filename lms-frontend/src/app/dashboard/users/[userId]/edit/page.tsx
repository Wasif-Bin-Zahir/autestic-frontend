"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"; // Import Label component
import { useRouter } from 'nextjs-toploader/app';
import { useParams } from "next/navigation";

type UserForm = {
  name: string;
  email: string;
  location: string;
};

export default function EditUserPage() {
const { userId } = useParams(); // Extract `userId` from `params`

  const { register, handleSubmit } = useForm<UserForm>({
    defaultValues: {
      name: "John Doe", // Replace with data fetched from API
      email: "john@example.com", // Replace with data fetched from API
      location: "New York", // Replace with data fetched from API
    },
  });

  const router = useRouter();

  const onSubmit = (data: UserForm) => {
    console.log(`Edited User (${userId}):`, data);
    alert("User updated successfully!");
    router.push("/dashboard/users"); // Redirect back to user list
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit User</h1>
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
          Update User
        </Button>
      </form>
    </div>
  );
}
