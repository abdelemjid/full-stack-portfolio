"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return <div className="w-full text-center text-3xl">Hello world!</div>;
}
