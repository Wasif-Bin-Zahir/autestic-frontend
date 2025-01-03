"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { loginApi } from "@/utils/api";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader"; 

type LoginForm = {
  email: string;
  password: string;
};

export default function AdminLoginPage() {
  const { register, handleSubmit, formState } = useForm<LoginForm>();
  const { errors } = formState;
  const router = useRouter();
  const [alert, setAlert] = useState<{ type: "error" | "success"; message: string } | null>(null);
  const [loading, setLoading] = useState(false); 
  const [pageLoading, setPageLoading] = useState(false); 

  const onSubmit = async (data: LoginForm) => {
    setLoading(true); // Start form submission loading
    try {
      const res = await loginApi(data.email, data.password);

      if (res.status === 200) {
        localStorage.setItem("authToken", res.data.token); // Store token
        setPageLoading(true); // Start page transition loading
        router.push("/dashboard");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ errors?: { field: string; message: string }[] }>;
        if (axiosError.response?.status === 401) {
          setAlert({
            type: "error",
            message: "Incorrect username or password.",
          });
        } else {
          setAlert({
            type: "error",
            message: "Something went wrong. Please try again later.",
          });
        }
      } else {
        console.error("Unexpected Error:", error);
        setAlert({
          type: "error",
          message: "An unexpected error occurred.",
        });
      }
    } finally {
      setLoading(false); // Stop form submission loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      {pageLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Loader />
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Admin Login</h2>

        {/* Alert Message */}
        {alert && (
          <div
            className={`p-4 mb-4 text-sm rounded-lg ${
              alert.type === "error" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
            } flex items-center`}
          >
            <span className="font-medium flex-grow">{alert.message}</span>
            <button
              onClick={() => setAlert(null)}
              className="text-red-500 hover:text-red-700 ml-4 font-bold"
            >
              &times;
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="email">Username or email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@example.com"
              {...register("email", { required: "Email is required" })}
              disabled={loading} 
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              {...register("password", { required: "Password is required" })}
              disabled={loading} 
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader /> 
                <span>Signing in...</span>
              </div>
            ) : (
              "Sign in"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
