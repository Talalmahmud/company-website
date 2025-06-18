"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when clicking on nav items
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold flex-shrink-0">
            TechCraft Solutions
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#services"
              className="hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>

            {/* Theme Toggle */}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="mr-2"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className=" w-full left-0 absolute top-[64px] bg-[#070124] z-20 md:hidden pb-4">
            <nav className="flex flex-col space-y-2 pt-2">
              <Link
                href="#services"
                onClick={closeMenu}
                className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                onClick={closeMenu}
                className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                onClick={closeMenu}
                className="px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
