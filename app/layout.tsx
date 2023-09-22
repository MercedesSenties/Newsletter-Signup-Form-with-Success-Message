import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter Signup",
  description: "Trial task from Frontend Mentor community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-roboto-regular">{children}</body>
    </html>
  );
}
