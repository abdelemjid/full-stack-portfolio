import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface Props {
  children: React.ReactNode;
  style?: "primary" | "muted";
  Icon?: LucideIcon | IconType;
}

export default function Button({ children, style = "primary", Icon }: Props) {
  return (
    <button
      className={`flex flex-row gap-1 items-center text-sm rounded-sm px-5 py-3 cursor-pointer transition-all hover:-translate-y-0.5 ease-in-out ${style === "muted" ? "bg-gray-800 text-foreground hover:text-primary" : "bg-primary text-neutral hover drop-shadow-xl drop-shadow-primary/50 hover:drop-shadow-primary/70"}`}
    >
      {Icon && <Icon size={15} />}
      {children}
    </button>
  );
}
