import React from "react";

const Hero = () => {
  return (
    <main
      id="#"
      className="grid grid-cols-[2fr_1fr] min-h-[70vh] md:w-[60vw] mx-auto justify-items-center mt-25 font-[family-name:var(--font-geist-sans)]"
    >
      <div className="flex flex-col gap-8 row-start-2 h-full sm:p-20 sm:items-start">
        <p className="px-4 py-2 mb-3 rounded-full font-semibold text-sm border-2 border-purple-700 -rotate-10">
          Welcome!
        </p>
        <h3 className="text-3xl font-semibold">
          Oh, you found me? How lovely!
        </h3>
        <h3 className="text-2xl font-semibold">Let me introduce myself</h3>
        <h2 className="text-5xl font-bold">
          I am <span className="text-purple-800">Hamdallah Rabiu</span>
        </h2>

        <p className="text-sm font-semibold text-center sm:text-left">
          Direct-Response{" "}
          <span className="text-purple-800">
            Copywriter - Nice to meet you! 😊
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-8 row-start-2 h-full sm:p-20 sm:items-start"></div>
    </main>
  );
};

export default Hero;
