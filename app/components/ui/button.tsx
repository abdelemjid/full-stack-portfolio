import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface Props {
  children: React.ReactNode;
  style?: "primary" | "muted" | "danger";
  Icon?: LucideIcon | IconType;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  style = "primary",
  Icon,
  className,
  onClick,
}: Props) {
  return (
    <button
      className={`flex flex-row gap-1 items-center text-sm rounded-sm px-5 py-3 cursor-pointer transition-all hover:-translate-y-0.5 ease-in-out ${style === "muted" ? "bg-gray-800 text-foreground hover:text-primary" : style === "danger" ? "bg-red-400/10 text-red-400 border border-red-400/30" : "bg-primary text-neutral hover drop-shadow-xl drop-shadow-primary/50 hover:drop-shadow-primary/70"} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon size={15} />}
      {children}
    </button>
  );
}
