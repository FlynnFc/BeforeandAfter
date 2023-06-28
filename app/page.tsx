import Geuss from "@/components/Geuss";
import LetterHelper from "@/components/LetterHelper";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex flex-row items-center justify-center h-full w-full p-12 ">
      <Toaster position="bottom-center" />
      <section className="w-full h-full flex justify-center items-start gap-40">
        <Geuss />
      </section>
    </main>
  );
}
