"use client";

import React from "react";
import UserForm, { UserFormData } from "@/app/dashboard/components/UserForm";
import { useRouter } from "nextjs-toploader/app";

export default function AddUserPage() {
  const router = useRouter();

  const handleAddUser = (data: UserFormData) => {
    console.log("New User Data:", data);
    alert("User added successfully!");
    router.push("/dashboard/users");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New User</h1>
      <UserForm onSubmit={handleAddUser} submitButtonLabel="Create User" />
    </div>
  );
}
