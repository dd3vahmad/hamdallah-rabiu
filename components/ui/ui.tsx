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
import { hamdallah, logo, milkyway, placeholder } from "@/assets";
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
          src={hamdallah.src || placeholder.src}
          alt={"Hamdallah Rabiu"}
          width={100} // NextJs forced me to do this...
          height={100} // NextJs forced me to do this...
          style={{ height: "400px", width: "100%", objectFit: "cover" }}
          className="mb-3"
        />
        <CardHeader style={{ paddingInline: "10px", marginBottom: "10px" }}>
          <CardTitle>Hamdallah A. Rabiu</CardTitle>
          <CardDescription>
            <p className="text-sm">Direct-Response Marketing Consultant</p>
          </CardDescription>
        </CardHeader>
      </Glassmorphism>
    </Card>
  );
};

export const AboutCard = () => {
  return (
    <Card
      className="w-[80vw] md:w-[700px]"
      style={{ padding: 0, overflow: "hidden", borderRadius: "10px" }}
    >
      <Glassmorphism className="h-full py-10">
        <CardHeader style={{ paddingInline: "10px", marginBottom: "10px" }}>
          <CardTitle style={{ fontSize: "42px", paddingInline: "10px" }}>
            Who am I?
          </CardTitle>
          <CardContent style={{ paddingInline: "10px", marginTop: "20px" }}>
            <p className="mb-3">
              I’m Hamdallah, and I help businesses attract more customers,
              increase sales, and keep them coming back—all through the power of
              strategic marketing and persuasive messaging.
            </p>

            <p className="mb-3">
              Great products don’t sell themselves. If your offers aren’t
              getting the attention (or sales) they deserve, it’s not about what
              you’re selling but about how you’re selling it.
            </p>

            <p className="mb-3">And that’s where I come in.</p>

            <p className="mb-3">
              As a Direct-Response Marketing Consultant, I help businesses craft
              sales strategies, optimize their messaging, and create copy that
              turns casual browsers into paying customers. From
              conversion-driven landing pages to high-impact email campaigns and
              ad funnels, I make sure every touch-point in your marketing works
              together to drive revenue.
            </p>

            <p className="mb-3">
              I don’t just write. I strategize, optimize, and scale. Whether you
              need to refine your brand voice, or boost conversions, or map out
              a high-converting sales funnel, I’ll help you turn more leads into
              long-term customers.
            </p>

            <p className="mb-3">
              Oh, and I’m also the Princess of Kukumbia — a (totally legit)
              imaginary nation where writing is our superpower. But in the real
              world, I use that same power to help brands like yours{" "}
              <span className="font-semibold">
                sell smarter, faster, and more effectively
              </span>
            </p>

            <p className="mb-3">What are you waiting for?</p>

            <h2 className="font-semibold">
              Let’s build a marketing strategy that brings in results!.
            </h2>
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
