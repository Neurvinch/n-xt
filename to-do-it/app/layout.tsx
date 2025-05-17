import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "To Do It",
  description: " A simple to-do list app",
};


export default function RootLayout({
children,
} : {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  )
}
  

