import React from "react";

const Hero = () => {
  return (
    <main
      id="#home"
      className="flex justify-center items-center md:grid grid-cols-[2fr_1fr] min-h-[70vh] md:w-[60vw] mx-auto md:justify-items-center mt-25 font-[family-name:var(--font-geist-sans)]"
    >
      <div className="flex flex-col gap-8 row-start-2 h-full">
        <p className="px-4 py-2 md:mb-3 w-fit rounded-full font-semibold text-sm border-2 border-purple-700 -rotate-10">
          Welcome!
        </p>
        <h3 className="text-xl md:text-3xl font-semibold">
          Oh, you found me? How lovely!
        </h3>
        <h3 className="text-xl md:text-2xl font-semibold">
          Let me introduce myself
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold">
          I am <span className="text-purple-800">Hamdallah Rabiu</span>
        </h2>

        <p className="text-sm font-semibold text-center sm:text-left">
          Nice to meet you! 😊
        </p>
      </div>

      <div className="hidden md:blockflex flex-col gap-8 row-start-2 h-full sm:items-start"></div>
    </main>
  );
};

export default Hero;
