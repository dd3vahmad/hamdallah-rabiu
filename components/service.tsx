import React from "react";
import { Glassmorphism } from "./ui/ui";
import Image, { StaticImageData } from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { placeholder } from "@/assets";

export interface IService {
  title: string;
  banner?: StaticImageData;
  description: string;
}

interface IProps {
  service: IService;
}

const Service = ({ service }: IProps) => {
  return (
    <Card
      className="w-[80vw] md:w-[350px] cursor-pointer"
      style={{ padding: 0, overflow: "hidden", borderRadius: "10px" }}
    >
      <Glassmorphism className="h-full">
        <Image
          src={(service.banner || placeholder).src}
          alt={service.title}
          width={100} // NextJs forced me to do this...
          height={100} // NextJs forced me to do this...
          style={{ height: "200px", width: "100%", objectFit: "cover" }}
          className="mb-3"
        />
        <CardHeader style={{ paddingInline: "10px", marginBottom: "10px" }}>
          <CardTitle>{service.title}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </CardHeader>
      </Glassmorphism>
    </Card>
  );
};

export default Service;
