import React from "react";
import Service from "./service";
import { services } from "@/lib/data";

const Services = () => {
  return (
    <div className="md:w-fit mx-auto grid md:grid-cols-3 gap-5 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {services.map((service, i) => (
        <Service key={i} service={service} />
      ))}
    </div>
  );
};

export default Services;
