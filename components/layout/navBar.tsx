"use client";

import { useState, useEffect, useMemo, ChangeEvent } from "react";
import {
  Search,
  Heart,
  CircleUserRound,
  X,
  ArrowRight,
  Star,
} from "lucide-react";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import Container from "../ui/container";
import Link from "next/link";
import { productsData, Product } from "@/data/data"; // নিশ্চিত করুন path ঠিক আছে

// --- Types ---
interface Promo {
  title: string;
  label: string;
  btn: string;
  img: string;
}

interface Section {
  title: string;
  links: string[];
}

interface MenuData {
  sections: Section[];
  promos: Promo[];
}

const MENU_CONTENT: Record<string, MenuData> = {
  Sneakers: {
    sections: [
      {
        title: "Brands",
        links: ["Nike", "Adidas", "Jordan", "New Balance", "Asics", "Yeezy"],
      },
      {
        title: "Trending",
        links: ["Air Jordan 4", "Dunk Low", "Gazelle", "Samba", "Vomero 5"],
      },
      { title: "Gender", links: ["Men", "Women", "Kids", "Unisex"] },
    ],
    promos: [
      {
        title: "Jordan Retro",
        label: "MUST HAVE",
        btn: "Explore",
        img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=500",
      },
      {
        title: "Limited Stock",
        label: "HOT NOW",
        btn: "Shop now",
        img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=500",
      },
    ],
  },
  Releases: {
    sections: [
      {
        title: "Shop",
        links: [
          "Shop all",
          "Nike Air Max 1",
          "Nike Dunk",
          "Nike P-6000",
          "Nike Air Max 90",
        ],
      },
      {
        title: "Collections",
        links: ["Elite", "Tango", "Wildside", "Chamarel", "Messina"],
      },
      {
        title: "Categories",
        links: ["Running", "Basketball", "Lifestyle", "Skateboarding"],
      },
    ],
    promos: [
      {
        title: "Best Sellers",
        label: "CLASSICS",
        btn: "Shop now",
        img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=500",
      },
      {
        title: "New Arrivals",
        label: "HOLIDAY SHOP",
        btn: "Shop new",
        img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=500",
      },
    ],
  },
};

export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // --- Filtering Logic (Matches your Product Interface) ---
  const filteredProducts = useMemo(() => {
    if (searchQuery.trim() === "") return [];
    return (productsData as Product[]).filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const navLinks = [
    { name: "Sneakers", href: "/products" },
    { name: "Releases", href: "#" },
    { name: "Aanbiedingen", href: "#" },
    { name: "Nieuws", href: "#" },
  ];

  return (
    <header className="relative w-full bg-white font-sans border-b border-gray-100">
      <div className="relative z-[1000] bg-white">
        <Container>
          <div className="flex items-center justify-between py-4 md:py-6">
            <Link href="/">
              <Image
                src={logo}
                alt="SNEAQUERS"
                width={160}
                height={45}
                priority
                className="w-[120px] md:w-[160px]"
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setActiveMenu(link.name)}
                  className="text-[15px] font-medium transition-colors hover:text-[#f58220]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-2 md:space-x-4">
              <button
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  setSearchQuery("");
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {isSearchOpen ? (
                  <X className="w-5 h-5 text-gray-700" />
                ) : (
                  <Search className="w-5 h-5 text-gray-700" />
                )}
              </button>

              {/* Heart and User Icons as requested */}
              <Link
                href="/wishlist"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Heart className="w-5 h-5 text-gray-700" />
              </Link>

              <Link
                href="/profile"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <CircleUserRound className="w-5 h-5 text-gray-700" />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* --- SEARCH AREA --- */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white pb-12 pt-6 border-b border-gray-100 shadow-xl z-[950] animate-in fade-in slide-in-from-top-2 duration-300">
          <Container>
            <div className="relative max-w-3xl mx-auto mb-10">
              <div className="flex items-center border border-gray-200 rounded-full px-6 py-2 focus-within:border-[#f58220] transition-all">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  placeholder="Zoek op merk, model..."
                  className="w-full py-2 outline-none text-gray-600"
                  autoFocus
                />
                <button className="flex items-center space-x-2 bg-black text-white px-5 py-2.5 rounded-full ml-2">
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-sm font-bold">Zoeken</span>
                </button>
              </div>
            </div>

            {searchQuery.trim() !== "" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="border border-gray-100 rounded-[24px] p-4 hover:shadow-lg transition-all group"
                    >
                      <div className="relative aspect-square bg-[#F5F5F5] rounded-[18px] overflow-hidden mb-4">
                        <Image
                          src={product.images[0]} // Using images array from your data
                          alt={product.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm line-clamp-1">
                        {product.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg font-black text-[#f58220]">
                          {product.price}
                        </span>
                        {product.originalPrice !== "$00.00" && (
                          <span className="text-gray-400 text-xs line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-[11px] text-gray-500">
                        <Star className="w-3 h-3 text-[#f58220] fill-[#f58220] mr-1" />
                        <span>{product.rating}</span>
                        <span className="mx-2 text-gray-200">|</span>
                        <span>{product.soldCount} sold</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-12 text-center text-gray-400">
                    Geen producten gevonden.
                  </div>
                )}
              </div>
            )}
          </Container>
        </div>
      )}

      {/* --- MEGA MENU --- */}
      {!isSearchOpen && activeMenu && MENU_CONTENT[activeMenu] && (
        <div
          className="absolute left-0 w-full bg-white border-t shadow-2xl z-[900] hidden md:block"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <Container>
            <div className="grid grid-cols-12 gap-8 py-10">
              <div className="col-span-8 grid grid-cols-3 gap-6">
                {MENU_CONTENT[activeMenu].sections.map((section, idx) => (
                  <div key={idx}>
                    <h4 className="text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-6">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link}>
                          <Link
                            href="#"
                            className="text-sm font-semibold text-gray-700 hover:text-[#f58220]"
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="col-span-4 flex gap-4">
                {MENU_CONTENT[activeMenu].promos.map((promo, idx) => (
                  <div
                    key={idx}
                    className="relative w-1/2 aspect-[3/4] rounded-2xl overflow-hidden group"
                  >
                    <Image
                      src={promo.img}
                      alt={promo.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-5 text-white">
                      <p className="text-[10px] font-bold text-[#f58220] uppercase mb-1">
                        {promo.label}
                      </p>
                      <h5 className="font-bold text-base mb-4">
                        {promo.title}
                      </h5>
                      <button className="bg-white text-black text-[10px] font-extrabold py-2 px-4 rounded-full">
                        {promo.btn}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
