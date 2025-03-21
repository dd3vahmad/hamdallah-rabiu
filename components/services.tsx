import React from "react";
import Service from "./service";
import { services } from "@/lib/data";
import { GlassShadow } from "./ui/ui";
import Animate from "./providers/animate";

const Services = () => {
  return (
    <Animate animationType="slideUp">
      <div id="services" className="w-full mt:20 pt-30">
        <h2 className="text-3xl font-semibold w-full text-center my-5">
          My <span className="text-primary">Services</span>
        </h2>
        <div className="w-fit mx-auto grid md:grid-cols-3 gap-5 md:px-20 font-[family-name:var(--font-geist-sans)] relative">
          <GlassShadow />
          {services.map((service, i) => (
            <Service key={i} service={service} />
          ))}
        </div>
      </div>
    </Animate>
  );
};

export default Services;
