"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Heart,
  CircleUserRound,
  Menu,
  X,
  ArrowRight,
  Star,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import Container from "../ui/container";

// --- DATA ---
const MENU_CONTENT = {
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
  Aanbiedingen: {
    sections: [
      {
        title: "Sale %",
        links: ["50% Off", "30% Off", "Last Sizes", "Outlet"],
      },
      {
        title: "Under €100",
        links: ["Men's Sale", "Women's Sale", "Kids' Sale"],
      },
      { title: "Accessories", links: ["Socks", "Cleaning Kits", "Shoelaces"] },
    ],
    promos: [
      {
        title: "Clearance",
        label: "FINAL CHANCE",
        btn: "Grab deal",
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500",
      },
      {
        title: "Member Exclusive",
        label: "VIP ONLY",
        btn: "Join now",
        img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=500",
      },
    ],
  },
  Nieuws: {
    sections: [
      {
        title: "Articles",
        links: [
          "Sneaker Care",
          "Style Guide",
          "History of Air",
          "Upcoming Drops",
        ],
      },
      {
        title: "Events",
        links: ["Sneaker Con", "In-store Raffle", "Giveaways"],
      },
      { title: "Socials", links: ["Instagram", "TikTok", "YouTube"] },
    ],
    promos: [
      {
        title: "The Blog",
        label: "READ NOW",
        btn: "Read articles",
        img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=500",
      },
      {
        title: "Newsletter",
        label: "STAY UPDATED",
        btn: "Sign up",
        img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=500",
      },
    ],
  },
} as const;

type MenuKey = keyof typeof MENU_CONTENT;

const SEARCH_DEMO_PRODUCTS = [
  {
    id: 1,
    name: "Nike Zoom Vomero 5",
    price: 25.99,
    oldPrice: 50.0,
    rating: "5.0/5.0",
    sold: 300,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400",
  },
  {
    id: 2,
    name: "Nike Air Max 1 'Grey & Black'",
    price: 25.99,
    oldPrice: 50.0,
    rating: "5.0/5.0",
    sold: 300,
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400",
  },
  {
    id: 3,
    name: "Nike Air Force",
    price: 25.99,
    oldPrice: 50.0,
    rating: "5.0/5.0",
    sold: 300,
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=400",
  },
  {
    id: 4,
    name: "Nike Zoom Vomero 5",
    price: 25.99,
    oldPrice: 50.0,
    rating: "5.0/5.0",
    sold: 300,
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=400",
  },
];

export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Default open for demonstration based on screenshot
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Sneakers", href: "#" },
    { name: "Releases", href: "#" },
    { name: "Aanbiedingen", href: "#" },
    { name: "Nieuws", href: "#" },
  ];

  return (
    <header className="relative w-full bg-white font-sans">
      {/* Top Navbar */}
      <div className="relative border-b border-gray-100 z-[1000]">
        <Container>
          <div className="flex items-center justify-between py-4 md:py-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={logo}
                alt="SNEAQUERS"
                width={160}
                height={45}
                priority
                className="w-[120px] md:w-[160px]"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setActiveMenu(link.name as MenuKey)}
                  className={`text-[15px] font-medium transition-colors hover:text-orange-400 duration-200 ease-in-out`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-full">
                <Heart className="w-5 h-5 text-gray-700" />
              </button>
              <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-full">
                <CircleUserRound className="w-5 h-5 text-gray-700" />
              </button>
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center bg-[#f58220] rounded-full text-white"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* --- MOBILE OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-white z-[999] p-6 animate-in slide-in-from-right duration-300 md:hidden">
          <div className="flex space-x-4 mt-5">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
              <Search className="w-5 h-5" />
            </div>
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
              <CircleUserRound className="w-5 h-5" />
            </div>
          </div>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex justify-between items-center text-xl font-medium text-gray-400 hover:text-black border-b border-gray-50 pb-4"
              >
                <span
                  className={link.name === "Releases" ? "text-[#f58220]" : ""}
                >
                  {link.name}
                </span>
                <ChevronRight className="w-5 h-5" />
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* --- SEARCH AREA (Desktop Screenshot_24 Style) --- */}
      {isSearchOpen && (
        <div className="w-full bg-white pb-12 pt-6">
          <Container>
            {/* Search Input Box */}
            <div className="relative max-w-7xl mx-auto mb-10">
              <div className="flex items-center border border-gray-200 rounded-full px-6 py-2 shadow-sm">
                <input
                  type="text"
                  placeholder="Zoek op merk, model of stijlcode"
                  className="w-full py-2 outline-none text-gray-600 text-sm md:text-base"
                />
                <button className="flex items-center space-x-2 bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full hover:bg-black transition-all ml-2">
                  <div className="bg-[#f58220] p-1 rounded-full">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-bold">Zoeken</span>
                </button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {SEARCH_DEMO_PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-100 rounded-[30px] p-5 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-gray-800 mb-4 text-[15px]">
                    {product.name}
                  </h3>
                  <div className="relative aspect-[16/10] bg-[#F5F5F5] rounded-[20px] overflow-hidden mb-4 flex items-center justify-center">
                    <Image
                      src={product.img}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover 
                       transition-transform duration-500 group-hover:scale-110"
                      priority={product.id <= 4} // প্রথম ৪টি ইমেজ দ্রুত লোড হওয়ার জন্য
                    />
                  </div>
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-xl font-bold">${product.price}</span>
                    <span className="text-gray-400 text-sm line-through">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 font-medium">
                    <Star className="w-3 h-3 text-[#f58220] fill-[#f58220] mr-1" />
                    <span>{product.rating}</span>
                    <span className="mx-2 text-gray-300">|</span>
                    <span>{product.sold} sold</span>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-10 flex justify-center">
              <button className="flex items-center space-x-2 border border-gray-300 px-6 py-2.5 rounded-full hover:bg-gray-50 transition-all text-[12px] font-bold tracking-tight uppercase">
                <div className="bg-[#f58220] p-1 rounded-full">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
                <span>VIEW ALL</span>
              </button>
            </div>
          </Container>
        </div>
      )}

      {/* --- MEGA MENU (Hover) --- */}
      {!isSearchOpen && activeMenu && (
        <div
          className="absolute left-0 w-full bg-white border-t border-gray-100 shadow-xl z-[900] hidden md:block"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <Container>
            <div className="grid grid-cols-12 gap-8 py-10">
              <div className="col-span-8 grid grid-cols-3 gap-6">
                {MENU_CONTENT[activeMenu].sections.map((section, idx) => (
                  <div key={idx}>
                    <h4 className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-6">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-md font-semibold text-gray-700 hover:text-[#f58220] transition-colors"
                          >
                            {link}
                          </a>
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
                    <img
                      src={promo.img}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-4 text-white">
                      <p className="text-[9px] font-bold tracking-tighter uppercase mb-1">
                        {promo.label}
                      </p>
                      <h5 className="font-bold text-lg leading-tight mb-3">
                        {promo.title}
                      </h5>
                      <button className="bg-white text-black text-[10px] font-bold py-2 rounded-full hover:bg-[#f58220] hover:text-white transition-colors">
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
