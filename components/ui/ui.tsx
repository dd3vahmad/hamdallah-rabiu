import React, { ReactNode } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";
import Image from "next/image";
import { placeholder } from "@/assets";

interface GlassmorphismProps {
  children: ReactNode;
  className?: string;
}

export const GlassShadow = () => {
  return (
    <div className="w-[240px] h-[220px] bg-primary absolute top-[48%] left-[42%] blur-3xl"></div>
  );
};

export const Glassmorphism: React.FC<GlassmorphismProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`backdrop-blur-sm bg-white/4 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export const MeCard = () => {
  return (
    <Card
      className="w-[80vw] md:w-[350px]"
      style={{ padding: 0, overflow: "hidden", borderRadius: "10px" }}
    >
      <Glassmorphism className="h-full">
        <Image
          src={placeholder.src}
          alt={"Hamdallah Rabiu"}
          width={100} // NextJs forced me to do this...
          height={100} // NextJs forced me to do this...
          style={{ height: "200px", width: "100%", objectFit: "cover" }}
          className="mb-3"
        />
        <CardHeader style={{ paddingInline: "10px", marginBottom: "10px" }}>
          <CardTitle>Hamdallah Rabiu</CardTitle>
          <CardDescription>Direct-Response Copywriter</CardDescription>
        </CardHeader>
      </Glassmorphism>
    </Card>
  );
};
