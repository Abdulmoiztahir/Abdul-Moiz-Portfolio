"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 shadow-lg transition-all duration-300 ${isScrolled ? 'bg-background/60 backdrop-blur-lg' : 'bg-background'}`}>
      <nav className="flex justify-between px-6 items-center">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Portfolio Logo"
            height={120}
            width={180}
            className="invert dark:invert-0"
          />
        </div>

        <div className="flex items-center space-x-4">
          {/* Links for Large Screens */}
          <ul className="hidden lg:flex space-x-6">
            <li>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          <ThemeToggle />

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-foreground focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Visible Only When Open) */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col space-y-4 mt-2 px-6 pb-4 bg-background text-muted-foreground">
          <li>
            <Link href="#about" className="hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
