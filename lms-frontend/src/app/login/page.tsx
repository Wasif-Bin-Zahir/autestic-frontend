// Admin Login Page Layout

"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginApi } from "@/utils/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type LoginForm = {
  email: string;
  password: string;
};

export default function AdminLoginPage() {
  const { register, handleSubmit } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    try {
      const response = await loginApi(data.email, data.password);

      if (response.status === 200) {
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error(error);
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="admin@example.com"
              className="mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <Input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="********"
              className="mt-1"
            />
          </div>
          <div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
