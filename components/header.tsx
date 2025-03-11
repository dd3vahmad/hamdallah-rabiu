import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Glassmorphism } from "./ui/ui";

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
    <Glassmorphism className="flex justify-between w-full items-center border-b border-dashed border-primary">
      <header className="flex items-center md:w-[60vw] mx-auto justify-between pt-10 pb-6">
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
      </header>
    </Glassmorphism>
  );
};

export default Header;
