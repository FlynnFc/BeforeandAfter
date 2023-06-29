import { Toaster } from "react-hot-toast";
import "../globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

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
      <body className={`min-h-screen h-full ${inter.className}`}>
        <main className="flex flex-col items-center justify-center h-full w-full  gap-36 ">
          <Navbar />
          <Toaster position="bottom-center" />
          {children}
        </main>
      </body>
    </html>
  );
}
