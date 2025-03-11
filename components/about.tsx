import React from "react";
import { AboutCard, Glassmorphism, GlassShadow, MeCard } from "./ui/ui";

const About = () => {
  return (
    <div className="w-full md:w-[60vw] min-h-[50vh] mx-auto mb-15 relative flex flex-col">
      <GlassShadow />
      <h2 className="text-3xl font-semibold w-full text-center mb-5">
        About Me
      </h2>

      <div className="flex-1 flex justify-center gap-10 my-auto px-20">
        <MeCard />
        <AboutCard />
      </div>
    </div>
  );
};

export default About;
