"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/container";
import logo from "../../public/assets/images/logo.png";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function FooterSection() {
  const paymentMethods = [
    {
      name: "Visa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
    },
    {
      name: "Mastercard",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
    },
    {
      name: "Paypal",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    },
    {
      name: "ApplePay",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg",
    },
  ];

  return (
    <footer className="mt-20 border-t border-gray-100 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-16">
          {/* 1. Brand Logo & About */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="SNEAQERS Logo"
                width={150}
                height={40}
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Discover the ultimate collection of premium sneakers. We bring
              style, comfort, and performance right to your doorstep.
            </p>
            <div className="flex gap-4 text-gray-400">
              <Facebook
                size={20}
                className="hover:text-[#f58220] cursor-pointer transition-colors"
              />
              <Instagram
                size={20}
                className="hover:text-[#f58220] cursor-pointer transition-colors"
              />
              <Twitter
                size={20}
                className="hover:text-[#f58220] cursor-pointer transition-colors"
              />
              <Linkedin
                size={20}
                className="hover:text-[#f58220] cursor-pointer transition-colors"
              />
            </div>
          </div>

          {/* 2. Menu Links */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-gray-900 mb-6">Menu</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-[#f58220] transition-colors">
                <Link href="/men">Men</Link>
              </li>
              <li className="hover:text-[#f58220] transition-colors">
                <Link href="/women">Women</Link>
              </li>
              <li className="hover:text-[#f58220] transition-colors">
                <Link href="/tracking">Order Tracking</Link>
              </li>
              <li className="hover:text-[#f58220] transition-colors">
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* 3. Support Links */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-gray-900 mb-6">Support</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="hover:text-[#f58220] transition-colors">
                <Link href="/faq">FAQ</Link>
              </li>
              <li className="hover:text-[#f58220] transition-colors">
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li className="hover:text-[#f58220] transition-colors">
                <Link href="/terms">Terms Of Conditions</Link>
              </li>
            </ul>
          </div>

          {/* 4. Payment Methods */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-gray-900 mb-6">Payment Method</h4>
            <p className="text-gray-500 text-xs mb-4">
              Secure payment processed via:
            </p>
            <div className="flex flex-wrap gap-3">
              {paymentMethods.map((pay) => (
                <div
                  key={pay.name}
                  className="relative w-14 h-10 border border-gray-100 rounded-md flex items-center justify-center p-2 hover:border-gray-300 transition-all bg-gray-50/50 overflow-hidden"
                  title={pay.name}
                >
                  <Image
                    src={pay.logo}
                    alt={pay.name}
                    fill
                    className="p-2 object-contain   transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Area */}
        <div className="flex flex-col md:flex-row justify-between items-center py-10 border-t border-gray-100 gap-4">
          <div className="text-gray-400 text-xs">
            © 2026 SNEAQERS Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-gray-400 text-xs">
            <Link href="#" className="hover:text-gray-600">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-600">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-600">
              Cookies Settings
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
