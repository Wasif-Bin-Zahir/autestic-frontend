import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Frontend</h1>
      <div className="space-x-4">
        <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded">
          Go to Login
        </Link>
        <Link href="/tables" className="px-4 py-2 bg-green-500 text-white rounded">
          View Tables
        </Link>
        <Link href="/form" className="px-4 py-2 bg-purple-500 text-white rounded">
          Fill Form
        </Link>
      </div>
    </main>
  );
}
