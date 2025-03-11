import React from "react";
import Service from "./service";
import { services } from "@/lib/data";
import { GlassShadow } from "./ui/ui";

const Services = () => {
  return (
    <div id="services" className="w-full">
      <h2 className="text-3xl font-semibold w-full text-center mb-5">
        My Services
      </h2>
      <div className="md:w-fit mx-auto grid md:grid-cols-3 gap-5 px-20 font-[family-name:var(--font-geist-sans)] relative">
        <GlassShadow />
        {services.map((service, i) => (
          <Service key={i} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
