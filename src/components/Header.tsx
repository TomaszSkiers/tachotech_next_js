"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Wrench, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Tag = "h1";

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-red-700 to-red-900 shadow-xl">
      <div className="container mx-auto max-w-4xl px-4 ">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              aria-label="Tacho-Tech - Serwis Tachografów Cyfrowych"
            >
              <Wrench className="w-8 h-8 text-white group-hover:text-red-300 transition-colors" />
              <Tag className="text-3xl font-bold text-white tracking-wider font-goldman">
                Tacho-Tech
              </Tag>
            </Link>
          </div>

          {/* NAWIGACJA DESKTOP */}
          <nav className="hidden md:flex space-x-8">
            {/* <Link href="/uslugi-dodatkowe" className="text-white hover:text-red-200 font-semibold transition duration-150">
              Wszystkie usługi
            </Link> */}
            <Link
              href="/"
              className="text-white hover:text-red-200 font-semibold transition duration-150"
            >
              tachografy
            </Link>
            <Link href="/etoll" className="text-white hover:text-red-200 font-semibold transition duration-150">
              e-toll
            </Link>
            <Link
              href="/kontakt"
              className="text-white hover:text-red-200 font-semibold transition duration-150"
            >
              kontakt
            </Link>
          </nav>

          {/* PRZYCISK MENU (MOBILE) */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Otwórz menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* MENU MOBILNE Z ANIMACJĄ */}
      <div
        className={`md:hidden bg-gray-900/95 shadow-inner overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {/* <li>
            <Link
              href="/uslugi-dodatkowe"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-red-300 font-semibold transition duration-150"
            >
              Wszystkie usługi
            </Link>
          </li>
           */}
          <li>
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-red-300 font-semibold transition duration-150"
            >
              Tachografy
            </Link>
          </li>
          <li>
            <Link
              href="/etoll"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-red-300 font-semibold transition duration-150"
            >
              e-toll
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-red-300 font-semibold transition duration-150"
            >
              Kontakt
            </Link>
          </li>
          
        </ul>
      </div>
    </header>
  );
};

export default Header;
