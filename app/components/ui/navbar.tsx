"use client";

import { useActiveSection } from "@/app/hooks/useActiveSection";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const ids = navLinks.map((link) => link.label.toLowerCase());

export default function Navbar() {
  const active = useActiveSection(ids);
  const [toggled, setToggled] = useState(false);

  // lock page scroll while the menu is open + close on Escape
  useEffect(() => {
    if (!toggled) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setToggled(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [toggled]);

  return (
    <>
      {/* header bar */}
      <header className="sticky top-0 left-0 z-40 w-full bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl flex-row items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-12">
          {/* logo */}
          <div className="flex flex-row items-center justify-center gap-5">
            <Link href="/">
              <div>
                <p className="text-lg text-primary">0X0061</p>
                <p className="text-xs text-muted">ALX SE DEVELOPER</p>
              </div>
            </Link>

            <div className="flex flex-row items-center justify-center gap-1 rounded-full border border-secondary/20 bg-secondary/5 px-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              <span className="text-xs text-secondary">Available for work</span>
            </div>
          </div>

          {/* desktop links */}
          <nav className="hidden flex-row items-center justify-center gap-2 rounded-sm bg-muted/10 p-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-sm px-4 py-2 text-sm text-muted! transition-all hover:bg-muted/10 ${
                  active === link.label.toLowerCase()
                    ? "bg-muted/10 text-tertiary!"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* picture */}
          <div className="hidden h-10 w-10 overflow-hidden rounded-full border-2 border-primary/50 lg:block">
            <Image
              width={80}
              height={80}
              src="/me.jpg"
              alt="Me"
              className="object-cover"
            />
          </div>

          {/* burger button */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={toggled}
            onClick={() => setToggled(true)}
            className="cursor-pointer p-2 text-xl transition-all hover:text-tertiary lg:hidden"
          >
            <Menu size={25} />
          </button>
        </div>
      </header>

      {/* mobile menu overlay (sibling of header, NOT a child) */}
      <div
        aria-hidden={!toggled}
        className={`fixed inset-0 z-50 lg:hidden transition-[visibility] ${
          toggled ? "visible" : "invisible delay-300"
        }`}
      >
        {/* blurred backdrop: click anywhere outside the menu to close */}
        <div
          onClick={() => setToggled(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out ${
            toggled ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* menu panel */}
        <aside
          className={`absolute top-0 right-0 flex h-full w-full max-w-sm flex-col bg-background p-5 shadow-2xl transition-transform duration-300 ease-out ${
            toggled ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setToggled(false)}
            className="cursor-pointer self-end p-2 text-muted transition-all hover:text-red-500"
          >
            <X size={25} />
          </button>

          <nav className="mt-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setToggled(false)}
                className={`px-1 py-3 text-lg hover:text-tertiary! ${
                  active === link.label.toLowerCase()
                    ? "text-tertiary!"
                    : "text-muted!"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
