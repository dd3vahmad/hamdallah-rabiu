import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import Image from "next/image";
import { logo, placeholder } from "@/assets";

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
      className="w-[80vw] md:w-[400px] h-fit"
      style={{ padding: 0, overflow: "hidden", borderRadius: "10px" }}
    >
      <Glassmorphism className="h-full">
        <Image
          src={placeholder.src}
          alt={"Hamdallah Rabiu"}
          width={100} // NextJs forced me to do this...
          height={100} // NextJs forced me to do this...
          style={{ height: "400px", width: "100%", objectFit: "cover" }}
          className="mb-3"
        />
        <CardHeader style={{ paddingInline: "10px", marginBottom: "10px" }}>
          <CardTitle>Hamdallah A. Rabiu</CardTitle>
          <CardDescription>
            <p className="font-light text-sm">
              Direct-Response Marketer & Copywriter
            </p>
          </CardDescription>
        </CardHeader>
      </Glassmorphism>
    </Card>
  );
};

export const AboutCard = () => {
  return (
    <Card
      className="w-[80vw] md:w-[400px]"
      style={{ padding: 0, overflow: "hidden", borderRadius: "10px" }}
    >
      <Glassmorphism className="h-full py-10">
        <CardHeader style={{ paddingInline: "10px", marginBottom: "10px" }}>
          <CardTitle style={{ fontSize: "42px", paddingInline: "10px" }}>
            Who am I?
          </CardTitle>
          <CardContent style={{ paddingInline: "10px", marginTop: "20px" }}>
            <p className="mb-3 font-semibold">
              I am a Direct-Response Marketing and Copywriting expert, with a
              knack for writing high-converting sales copy. I have a passion for
              writing and I believe that words have the power to change the
              world.
            </p>
            <p className="mb-3">
              I’m known for leveraging deep psychology and persuasive techniques
              to help global brands sell their products and services
              effectively.
            </p>
            <p className="mb-3 font-light">
              I am the{" "}
              <span className="font-semibold">Princess Of Kukumbia</span> (An
              imaginary nation where communication is through writing.)
            </p>
            <h2 className="font-semibold">I am HAMDALLAH A. RABIU.</h2>
          </CardContent>
        </CardHeader>
      </Glassmorphism>
    </Card>
  );
};

export const Logo = () => {
  return (
    <Image
      src={logo.src}
      alt="Hamdallah's logo"
      width={60}
      height={logo.height}
      priority
    />
  );
};
