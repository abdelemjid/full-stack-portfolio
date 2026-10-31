import React from "react";
import Navbar from "../ui/navbar";
import Footer from "../section/footer";

interface Props {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: Props) {
  return (
    <main className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-7xl">{children}</main>
      <Footer />
    </main>
  );
}
