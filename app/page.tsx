import Geuss from "@/components/Geuss";
import LetterHelper from "@/components/LetterHelper";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import banner from "@/public/banner.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-full  gap-36 ">
      <Image
        src={banner}
        alt="bg"
        draggable={false}
        className="fixed -top-24 w-[90rem] select-none z-0"
      />
      <Navbar />
      <Toaster position="bottom-center" />
      <section className="w-full z-10 h-full flex justify-center items-start">
        <Geuss />
      </section>
    </main>
  );
}
