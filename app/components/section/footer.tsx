"use client";

import { ChevronsUp, ShieldLock } from "lucide-react";
import Link from "next/link";

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

export default function Footer() {
  return (
    <section className="mt-25 border-t border-muted/30">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:px-8 lg:px-12">
        <ul className="flex flex-col md:flex-row justify-between gap-10 flex-wrap">
          <li className="min-w-90 flex flex-col gap-5 justify-between">
            <div className="flex flex-row gap-2 items-center">
              <p className="text-xs text-tertiary">ALX STUDENT: #0X0061</p>
              <hr className="w-px h-3 bg-muted" />
              <p className="text-xs text-foreground/80">
                ALX Africa Alumni Code Registry
              </p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <p className="text-xs text-tertiary">0X0061</p>
              <p className="text-xs text-muted">
                // Engineered with ALX Africa foundation
              </p>
            </div>
          </li>

          {/* quick links */}
          <li className="min-w-90 flex flex-row gap-2 justify-between flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-muted"
              >
                {link.label}
              </Link>
            ))}
          </li>

          <li className="min-w-90 flex flex-col gap-5 justify-between">
            <div className="flex flex-row gap-3 items-center justify-between">
              <p className="flex flex-row gap-1 items-center text-muted text-xs">
                <ShieldLock size={16} /> Secure It As Much As Possible.
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-xs text-primary flex flex-row gap-1 items-center cursor-pointer hover:text-secondary transition-colors duration-200"
              >
                <ChevronsUp size={16} /> Top
              </button>
            </div>

            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} 0X0061. All Rights Reserved.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
