import React from "react";
import { Glassmorphism } from "./ui/ui";
import Image, { StaticImageData } from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { placeholder } from "@/assets";
import { ArrowBigRight } from "lucide-react";

export interface IResource {
  title: string;
  banner?: StaticImageData;
  description: string;
}

interface IProps {
  resource: IResource;
}

const Resource = ({ resource }: IProps) => {
  return (
    <Card
      className="w-[80vw] md:w-[350px] cursor-pointer"
      style={{ padding: 0, overflow: "hidden", borderRadius: "10px" }}
    >
      <Glassmorphism className="h-full">
        <Image
          src={(resource.banner || placeholder).src}
          alt={resource.title}
          width={100} // NextJs forced me to do this...
          height={100} // NextJs forced me to do this...
          style={{ height: "200px", width: "100%", objectFit: "cover" }}
          className="mb-3"
        />
        <CardHeader style={{ paddingInline: "10px", marginBottom: "10px" }}>
          <div className="w-full flex items-start justify-between gap-2">
            <CardTitle className="text-lg flex-1">{resource.title}</CardTitle>
            <ArrowBigRight
              className="bg-primary p-1 rounded-full"
              width={"30px"}
              height={"30px"}
            />
          </div>
          <CardDescription>{resource.description}</CardDescription>
        </CardHeader>
      </Glassmorphism>
    </Card>
  );
};

export default Resource;
