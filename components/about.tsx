import React from "react";
import { AboutCard, GlassShadow, MeCard } from "./ui/ui";
import Animate from "./providers/animate";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:w-[60vw] mx-auto mb-28 relative flex flex-col pt-30"
    >
      <GlassShadow />
      <h2 className="text-3xl font-semibold w-full text-center my-5">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row flex-1 justify-center items-center md:items-none gap-5 md:gap-10 my-auto md:px-20">
        <Animate animationType="slideInLeft">
          <MeCard />
        </Animate>
        <Animate animationType="slideInRight">
          <AboutCard />
        </Animate>
      </div>
    </div>
  );
};

export default About;
