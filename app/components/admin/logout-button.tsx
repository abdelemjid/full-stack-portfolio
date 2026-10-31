"use client";

import { LogOut } from "lucide-react";
import { logout } from "@/app/server-actions/admin.actions";
import { useTransition } from "react";

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      await logout();
    });
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isPending}
      className="w-full px-4 py-2 flex flex-row justify-center cursor-pointer gap-2 rounded-md border border-red-400/40 bg-red-400/10 text-red-400 text-xs transition-all duration-200 hover:-translate-y-1"
    >
      <LogOut size={16} /> {isPending ? "Logging Out" : "Logout"}
    </button>
  );
}
