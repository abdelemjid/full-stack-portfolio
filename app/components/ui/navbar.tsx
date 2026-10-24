"use client";

import { useActiveSection } from "@/app/hooks/useActiveSection";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

const ids = navLinks.map((link) => link.label.toLocaleLowerCase());

export default function Navbar() {
  const active = useActiveSection(ids);
  const [toggled, setToggled] = useState(false);

  return (
    <div className="sticky top-0 left-0 bg-background backdrop-blur-lg">
      {/* desktop menu */}
      <div className="mx-auto py-3 max-w-7xl flex flex-row justify-between items-center">
        {/* logo */}
        <div className="flex flex-row gap-5 justify-center items-center">
          <Link href="/">
            <div>
              <p className="text-lg text-primary">0X0061</p>
              <p className="text-xs text-muted">ALX SE DEVELOPER</p>
            </div>
          </Link>

          <div className="flex flex-row gap-1 justify-center items-center border border-secondary/20 rounded-full bg-secondary/5 px-2">
            {/* dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span className="text-secondary text-xs">Available for work</span>
          </div>
        </div>

        {/* links */}
        <div className="hidden md:flex flex-row gap-2 justify-center items-center p-1 rounded-sm bg-muted/10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`py-2 px-4 rounded-sm text-muted! hover:bg-muted/10 text-sm transition-all ${active === link.label.toLocaleLowerCase() ? "bg-muted/10 text-tertiary!" : "text-sm"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* picture */}
        <div className="hidden md:block w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50">
          <Image
            width={80}
            height={80}
            src="/me.jpg"
            alt="Me"
            className="object-cover"
          />
        </div>

        {/* burger menu button */}
        <button
          onClick={() => setToggled((prev) => !prev)}
          className={`md:hidden p-2 text-xl hover:text-tertiary transition-all cursor-pointer`}
        >
          <Menu size={25} />
        </button>
      </div>

      {/* mobile menu */}
      <div
        aria-hidden={!toggled}
        className={`absolute top-0 right-0 z-20 h-screen w-full flex flex-row overflow-hidden transition-[visibility] ${
          toggled ? "visible" : "invisible delay-300"
        }`}
      >
        {/* backdrop */}
        <div
          onClick={() => setToggled(false)}
          className={`w-full h-full bg-background/20 backdrop-blur-lg transition-opacity duration-300 ease-out ${
            toggled ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* menu */}
        <div
          className={`h-full w-100 flex flex-col p-5 bg-background transition-transform duration-300 ease-out ${
            toggled ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* close menu button */}
          <button
            onClick={() => setToggled(false)}
            className="self-end p-2 text-muted cursor-pointer hover:text-red-500 transition-all"
          >
            <X size={25} />
          </button>

          {/* links */}
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-1 py-2 hover:text-tertiary! ${active === link.label.toLocaleLowerCase() ? "text-tertiary!" : "text-muted!"}`}
              onClick={() => setToggled(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
