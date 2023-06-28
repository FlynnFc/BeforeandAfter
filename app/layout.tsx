import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Rules",
  description: "Explore the roles of before and after",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen h-full  ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
