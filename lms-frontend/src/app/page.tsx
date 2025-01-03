// app/page.tsx (for example)
import { redirect } from "next/navigation";

export default function LandingPage() {
  // Immediately redirect to /login
  redirect("/login");
  
  // This return never renders, because redirect() forces navigation
  return null;
}
