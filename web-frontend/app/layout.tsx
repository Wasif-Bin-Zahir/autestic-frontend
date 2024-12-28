import '../styles/globals.css';

export const metadata = {
  title: 'Frontend App',
  description: 'Frontend App with Next.js and Tailwind',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-800">{children}</body>
    </html>
  );
}
