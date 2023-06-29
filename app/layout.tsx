import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Roboto_Slab } from "next/font/google";

const robslab = Roboto_Slab({ subsets: ["latin"], display: "swap" });

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "A over B",
  description: "Find my word",
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
