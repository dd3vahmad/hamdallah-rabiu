"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Logo, MobileMenu } from "./ui/ui";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#resources", label: "Free Resources" },
    { href: "#contact", label: "Contact Me" },
  ];

  return (
    <div
      className={`fixed z-10 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/10 backdrop-blur-md shadow-md text-primary"
          : "bg-transparent"
      }`}
    >
      <header className="flex items-center md:w-[60vw] mx-auto justify-between p-3 md:p-6">
        <Logo />
        <nav className="hidden md:block mx-3">
          <ul className="flex list-none gap-4">
            {links.map(({ href, label }) => (
              <li
                key={`${href}${label}`}
                className="text-sm font-semibold hover:opacity-70 transition-colors duration-300"
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu />
      </header>
    </div>
  );
};

export default Header;
