import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Lora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const lora = Lora({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Before or After",
  description: "Find my word",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen h-full bg-[#0A0A0D] ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
