// components/NavBar.tsx
import { Search, Heart, User, CircleUserRound } from "lucide-react";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import Container from "../ui/container";
import Button from "../ui/button";

export default function NavBar() {
  const navLinks = [
    { name: "Sneakers", href: "#" },
    { name: "Releases", href: "#", active: true },
    { name: "Aanbiedingen", href: "#" },
    { name: "Nieuws", href: "#" },
  ];

  return (
    <div>
      <Container>
        <nav className="flex items-center justify-between p-4.5 bg-white">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="SNEAQUERS"
              width={165}
              height={58}
              priority
            />
          </div>

          {/* Nav Links */}
          <ul className="flex space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`${link.active ? "text-[#f58220]" : "text-gray-400"} hover:text-[#f58220] transition-colors`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-4 text-gray-800">
            {/* Search Icon Container */}
            <div className="flex items-center justify-center w-10 h-10 bg-[#F9F9F9] rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
              <Search className="w-5 h-5" />
            </div>

            {/* Heart/Favorite Icon Container */}
            <div className="flex items-center justify-center w-10 h-10 bg-[#F9F9F9] rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
              <Heart className="w-5 h-5" />
            </div>

            {/* User/Profile Icon Container */}
            <div className="flex items-center justify-center w-10 h-10 bg-[#F9F9F9] rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
              <CircleUserRound className="w-5 h-5" />
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
}
