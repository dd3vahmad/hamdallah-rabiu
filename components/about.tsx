import React from "react";
import { GlassShadow } from "./ui/ui";

const About = () => {
  return (
    <div className="w-full md:w-[60vw] min-h-[70vh] mx-auto relative">
      <GlassShadow />
      <h2 className="text-3xl font-semibold w-full text-center mb-5">
        About Me
      </h2>
    </div>
  );
};

export default About;
