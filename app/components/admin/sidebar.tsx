"use client";

import {
  CodeXml,
  FolderBookmark,
  GraduationCap,
  LayoutDashboard,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./logout-button";

const navLinks = [
  { label: "Dashboard", href: "/admin", Icon: LayoutDashboard },
  { label: "Skills", href: "/admin/skills", Icon: CodeXml },
  { label: "Education", href: "/admin/education", Icon: GraduationCap },
  { label: "Projects", href: "/admin/projects", Icon: FolderBookmark },
  { label: "Messages", href: "/admin/messages", Icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full w-60 flex flex-col gap-2 justify-between px-3 py-5 border-r border-muted/15 bg-background/20 backdrop-blur-md">
      {/* links */}
      <div className="flex flex-col gap-2">
        <p className="text-muted text-[11px] uppercase">CMS Core</p>

        {navLinks.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex flex-row items-center gap-2 text-sm py-2 px-4 rounded-xs hover:bg-primary/15 transition-colors duration-300 ${active ? "bg-primary text-background hover:bg-primary/90" : "text-foreground"}`}
            >
              <link.Icon size={16} /> {link.label}
            </Link>
          );
        })}
      </div>

      {/* logout button */}
      <LogoutButton />
    </div>
  );
}
