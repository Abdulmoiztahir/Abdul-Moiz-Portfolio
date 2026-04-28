"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 18) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 px-4 md:px-8">
      <nav
        className={`container-shell relative overflow-hidden flex items-center justify-between rounded-2xl border px-4 py-3 shadow-[0_14px_38px_rgba(3,8,20,0.35)] transition-all duration-300 md:px-6 ${
          isScrolled
            ? "border-white/20 bg-slate-900/55 backdrop-blur-xl"
            : "border-white/10 bg-slate-900/35 backdrop-blur-lg"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-white/[0.06] to-transparent" />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/65 to-transparent" />
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-lg border border-white/20 bg-white/5">
            <Image src="/images/myLogo.png" alt="Portfolio Logo" fill className="object-contain p-1" />
          </div>
          <p className="font-[family-name:var(--font-sora)] text-sm font-semibold tracking-[0.16em] text-slate-200 md:text-base">
            ABDUL MOIZ
          </p>
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <ul className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-slate-200 shadow-[0_8px_22px_rgba(2,8,18,0.28)] backdrop-blur-md transition duration-300 hover:bg-white/15 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {(isOpen || isClosing) && (
        <ul className={`container-shell relative mt-3 flex flex-col gap-2 overflow-hidden rounded-2xl border border-white/15 bg-slate-900/55 p-4 shadow-[0_16px_42px_rgba(2,8,20,0.35)] backdrop-blur-xl lg:hidden duration-300 ${
          isClosing
            ? 'animate-out fade-out slide-out-to-top-2'
            : 'animate-in fade-in slide-in-from-top-2'
        }`}>
          {navLinks.map((link) => (
            <li key={link.href} className={`duration-300 ${
              isClosing
                ? 'animate-out fade-out slide-out-to-left-4'
                : 'animate-in fade-in slide-in-from-left-4'
            }`}>
              <Link
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:bg-white/10 hover:text-cyan-100"
                onClick={() => toggleMenu()}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
