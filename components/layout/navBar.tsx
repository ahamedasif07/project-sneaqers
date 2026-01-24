"use client"; // Required for useState in Next.js App Router

import { useState } from "react";
import { Search, Heart, CircleUserRound, Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import Container from "../ui/container";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Sneakers", href: "#" },
    { name: "Releases", href: "#", active: true },
    { name: "Aanbiedingen", href: "#" },
    { name: "Nieuws", href: "#" },
  ];

  return (
    <div className="relative bg-white border-b border-gray-100">
      <Container>
        <nav className="flex items-center justify-between p-4 md:p-4.5">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="SNEAQUERS"
              width={140} // Slightly smaller for mobile scaling
              height={50}
              className="md:w-[165px]"
              priority
            />
          </div>

          {/* Desktop Nav Links - Hidden on Mobile */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`${
                    link.active ? "text-[#f58220]" : "text-gray-400"
                  } hover:text-[#f58220] transition-colors`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Icons & Mobile Toggle */}
          <div className="flex items-center space-x-2 md:space-x-4 text-gray-800">
            <div className="hidden sm:flex items-center justify-center w-10 h-10 bg-[#F9F9F9] rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
              <Search className="w-5 h-5" />
            </div>

            <div className="flex items-center justify-center w-10 h-10 bg-[#F9F9F9] rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
              <Heart className="w-5 h-5" />
            </div>

            <div className="flex items-center justify-center w-10 h-10 bg-[#F9F9F9] rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
              <CircleUserRound className="w-5 h-5" />
            </div>

            {/* Hamburger Button - Visible only on Mobile */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white z-50 border-t shadow-lg animate-in slide-in-from-top duration-300">
            <ul className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)} // Close menu on click
                    className={`block text-lg font-medium ${
                      link.active ? "text-[#f58220]" : "text-gray-600"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {/* Mobile Search - if hidden in icons bar */}
              <li className="sm:hidden border-t pt-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </div>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
}
