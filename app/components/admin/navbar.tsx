"use client";

import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full px-8 py-3 bg-background/20 backdrop-blur-md border-b border-muted/10">
      <div className="w-full max-w-7xl mx-auto flex flex-row items-center justify-between">
        <div className="flex flex-row gap-3 items-center">
          <button className="md:hidden cursor-pointer p-2 rounded-md border border-muted/30 bg-background/15 backdrop-blur-md transition-colors hover:border-muted/60">
            <Menu size={18} />
          </button>
          <h3 className="text-xl text-foreground">Administrator</h3>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image src="/me.jpg" alt="My Picture" width={50} height={50} />
        </div>
      </div>
    </div>
  );
}
