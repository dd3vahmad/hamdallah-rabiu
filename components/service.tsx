import React from "react";
import Glassmorphism from "./glassmorphism";
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
      className="w-[350px]"
      style={{ padding: 0, overflow: "hidden", borderRadius: "10px" }}
    >
      <Glassmorphism className="h-full">
        <Image
          src={(service.banner || placeholder).src}
          alt={service.title}
          objectFit="cover"
          width={400}
          height={600}
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
