import "../styles/globals.css";
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: "Admin Login | LMS",
  description: "Admin Login Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <NextTopLoader />
        {children}
      </body>
    </html>
  );
}
