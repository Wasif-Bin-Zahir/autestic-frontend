"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosError } from "axios";

type LoginForm = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    try {
      // Use the environment variable for the API URL
      const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/login`;

      const response = await axios.post(API_URL, data);

      // Handle successful login
      console.log("Login Successful:", response.data);
      alert("Login successful!"); // Show success message or redirect
    } catch (error) {
      // Handle error response
      const axiosError = error as AxiosError;
      console.error(
        "Login Failed:",
        axiosError.response?.data || axiosError.message
      );
      alert("Login failed: Invalid username or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 w-1/3 p-4 border rounded shadow-md bg-white"
      >
        <h1 className="text-2xl font-bold text-center mb-4">Admin Login</h1>
        <input
          {...register("username", { required: "Username is required" })}
          type="text"
          placeholder="Username"
          className="p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Password"
          className="p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
