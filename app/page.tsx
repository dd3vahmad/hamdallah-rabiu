import { logo } from "@/assets";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image src={logo.src} alt="Hamdallah's logo" width={60} height={60} />
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Hamdallah Rabiu
        </h1>
        <p className="text-lg text-center sm:text-left">
          Direct-Response Copywriter
        </p>
      </main>
    </div>
  );
}
