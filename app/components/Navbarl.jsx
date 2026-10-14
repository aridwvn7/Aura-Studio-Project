
"use client";

import React, { useState } from "react";

const Navbarl = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 shadow-sm backdrop-blur-md">
      <nav className="relative flex items-center justify-between px-6 py-5 md:px-16">

        {/* Logo */}
        <a href="#top" className="text-2xl font-bold tracking-tight">
          aura<span className="text-[#C08A6E]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="font-bold text-[#8A857C] transition hover:text-[#C08A6E]">
            About
          </a>

          <a href="#services" className="font-bold text-[#8A857C] transition hover:text-[#C08A6E]">
            Services
          </a>

          <a href="#contact" className="font-bold text-[#8A857C] transition hover:text-[#C08A6E]">
            Contact
          </a>
        </div>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="hidden rounded-full border border-[#2B2925] px-5 py-2.5 text-sm transition hover:bg-[#2B2925] hover:text-[#F6F3ED] md:inline-flex"
        >
          Let's Talk <span className="ml-1 font-bold" aria-hidden="true">↗</span>
        </a>

        {/* Hamburger / Close Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <img
            src={menuOpen ? "/image/closeb.png" : "/image/ham.png"}
            alt=""
            className="h-10 w-10 object-contain"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-[#E5DED4] bg-white/60 shadow-sm px-6 py-6 backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-5">
            <a
              href="#about"
              onClick={closeMenu}
              className="font-bold text-[#8A857C] transition hover:text-[#C08A6E]"
            >
              About
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="font-bold text-[#8A857C] transition hover:text-[#C08A6E]"
            >
              Services
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="font-bold text-[#8A857C] transition hover:text-[#C08A6E]"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex w-fit rounded-full border border-[#2B2925] px-5 py-2.5 text-sm transition hover:bg-[#2B2925] hover:text-[#F6F3ED]"
            >
              Let's Talk <span className="ml-1 font-bold" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbarl;