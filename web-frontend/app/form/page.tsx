"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  username: string;
  email: string;
  password: string;
  rememberMe: boolean;
};

export default function ExampleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 w-1/3 p-4 border rounded shadow-md bg-white"
      >
        <h1 className="text-2xl font-bold text-center mb-4">Register</h1>
        
        {/* Username Input */}
        <div>
          <input
            {...register("username", { required: "Username is required" })}
            type="text"
            placeholder="Username"
            className={`p-2 border rounded w-full ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.username && (
            <span className="text-red-500 text-sm">{errors.username.message}</span>
          )}
        </div>

        {/* Email Input */}
        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Email"
            className={`p-2 border rounded w-full ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Password Input */}
        <div>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            type="password"
            placeholder="Password"
            className={`p-2 border rounded w-full ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password.message}</span>
          )}
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            {...register("rememberMe")}
            type="checkbox"
            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="rememberMe" className="text-gray-700">
            Remember Me
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
