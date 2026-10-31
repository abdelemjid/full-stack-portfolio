import type { Metadata } from "next";
import Sidebar from "../admin/sidebar";
import Navbar from "../admin/navbar";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

interface Props {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <>
      <main className="w-screen h-full min-h-screen">
        <Navbar />
        <div className="w-full h-[calc(100vh-66px)] flex flex-row">
          <Sidebar />
          <div className="w-full flex flex-col">
            <div className="mx-auto w-full h-[calc(100vh-66px)] px-6 py-4">
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
