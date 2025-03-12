import React from "react";
import Animate from "./providers/animate";
import { GlassShadow } from "./ui/ui";
import { resources } from "@/lib/data";
import Resource from "./resource";

const Resources = () => {
  return (
    <Animate animationType="slideUp">
      <div id="resources" className="w-full pt-30">
        <h2 className="text-3xl font-semibold w-full text-center my-5">
          My <span className="text-primary">Resources</span>
        </h2>
        <div className="w-fit mx-auto grid md:grid-cols-3 gap-5 md:px-20 font-[family-name:var(--font-geist-sans)] relative">
          <GlassShadow />
          {resources.map((resource, i) => (
            <Resource key={i} resource={resource} />
          ))}
        </div>
      </div>
    </Animate>
  );
};

export default Resources;
