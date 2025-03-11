import Link from "next/link";
import React from "react";
import { Glassmorphism, Logo } from "./ui/ui";

const Header = () => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#resources", label: "Free Resources" },
    { href: "#contact", label: "Contact Me" },
  ];

  return (
    <Glassmorphism className="flex justify-between w-full items-center fixed z-10">
      <header className="flex items-center md:w-[60vw] mx-auto justify-between p-6">
        <Logo />
        <nav className="mx-3">
          <ul className="flex list-none gap-4">
            {links.map(({ href, label }) => (
              <li
                key={`${href}${label}`}
                className="text-sm font-semibold hover:text-purple-800 transition-colors duration-300"
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
