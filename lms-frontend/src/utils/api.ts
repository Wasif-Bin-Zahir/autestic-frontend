import axios from "axios";

export const loginApi = async (email: string, password: string) => {
  try {
    const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/admin/login`;
    const response = await axios.post(API_URL, { email, password });
    return response; // Return the response for handling in the component
  } catch (error) {
    throw error; // Rethrow the error to handle it in the component
  }
};
