import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Glassmorphism from "./glassmorphism";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  const links = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#free-resources", label: "Free Resources" },
    { href: "#newsletter", label: "Newsletter" },
  ];

  return (
    // <Glassmorphism className="flex justify-between w-full items-center">
    <header className="flex items-center w-full gap-[100px] justify-center pt-10 pb-6 border-b">
      <Image
        src={logo.src}
        alt="Hamdallah's logo"
        width={60}
        height={logo.height}
        priority
      />
      <nav className="mx-3">
        <ul className="flex list-none gap-4">
          {links.map(({ href, label }) => (
            <li
              key={`${href}${label}`}
              className="text-sm font-semibold hover:text-purple-800"
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* <ThemeToggle /> */}
    </header>
    // </Glassmorphism>
  );
};

export default Header;
