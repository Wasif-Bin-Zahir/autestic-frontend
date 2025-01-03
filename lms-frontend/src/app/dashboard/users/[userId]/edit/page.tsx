"use client";

import React, { useEffect, useState } from "react";
import UserForm, { UserFormData } from "@/app/dashboard/components/UserForm";
import { useRouter } from "nextjs-toploader/app";
import { useParams } from "next/navigation";

export default function EditUserPage() {
  const [initialValues, setInitialValues] = useState<UserFormData | null>(null);
  const router = useRouter();
  const params = useParams();
  const userId = params?.userId;

  useEffect(() => {
    if (userId) {
      const userDetails: UserFormData = {
        name: "John Doe",
        email: "john@example.com", 
        location: "New York", 
      };
      setInitialValues(userDetails);
    }
  }, [userId]);

  const handleEditUser = (data: UserFormData) => {
    console.log(`Edited User (${userId}):`, data);
    alert("User updated successfully!");
    router.push("/dashboard/users");
  };

  if (!initialValues) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit User</h1>
      <UserForm
        initialValues={initialValues}
        onSubmit={handleEditUser}
        submitButtonLabel="Update User"
      />
    </div>
  );
}
