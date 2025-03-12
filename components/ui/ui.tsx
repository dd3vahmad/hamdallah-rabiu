import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { logo, milkyway, placeholder } from "@/assets";
import { Menu } from "lucide-react";
import Link from "next/link";

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

export const MilkyWay = () => {
  return (
    <img
      src={milkyway.src}
      alt="Milkyway"
      width={"100%"}
      height={milkyway.height}
    />
  );
};

export const Copyright = () => {
  return (
    <p className="w-full text-center text-sm font-semibold text-gray-700 py-3">
      &copy; Hamdallah A. Rabiu 2025
    </p>
  );
};

export function MobileMenu() {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Menu size={"36px"} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>About Hamdallah</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link className="w-full" href={"#about"}>
                About Me
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" href={"#services"}>
                Services
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" href={"#testimonials"}>
                Testimonials
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" href={"#resources"}>
                Free Resources
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link className="w-full" href={"#contact"}>
              Contact Me
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="w-full" href={"#support"}>
              Support
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>Newsletter</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
