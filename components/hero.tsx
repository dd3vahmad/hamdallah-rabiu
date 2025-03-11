import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      id="#"
      className="grid grid-columns-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="px-4 py-2 rounded-full font-semibold text-sm border-2 border-purple-700 -rotate-10">
          Welcome!
        </p>
        <h3 className="text-3xl font-semibold">
          Oh no, you found me already?!
        </h3>
        <h3 className="text-2xl font-semibold">
          Well, I suppose it’s time for another introduction.
        </h3>
        <h4 className="text-2xl font-semibold">Alright, here we go.</h4>
        <h2 className="text-5xl font-bold">
          I am <span className="text-purple-800">Hamdallah Rabiu</span>
        </h2>

        <p className="text-sm font-semibold text-center sm:text-left">
          Direct-Response{" "}
          <span className="text-purple-800">
            Copywriter - Nice to meet you! 😊
          </span>
        </p>
        {/* <Image src={logo.src} alt="Hamdallah's logo" width={60} height={60} /> */}
      </main>
    </div>
  );
};

export default Hero;
