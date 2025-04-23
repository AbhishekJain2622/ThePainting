import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Google Font
const inter = Inter({ subsets: ["latin"] });

// Metadata including favicon
export const metadata: Metadata = {
  title: "The Panting Company - Premium Pet Care Services",
  description:
    "Professional dog walking, pet sitting, and training services for your furry friends.",
  generator: "v0.dev",
  icons: {
    icon: "/logo1.png", // Ensure this file exists in your /public folder
  },
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
