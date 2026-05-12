import { type LucideIcon } from "lucide-react";

type SoftGlassIconProps = {
  Icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  tone?: "dark" | "light";
};

export function SoftGlassIcon({
  Icon,
  className = "",
  iconClassName = "size-4",
  tone = "light",
}: SoftGlassIconProps) {
  const isDark = tone === "dark";

  return (
    <span
      className={`relative inline-flex size-8 shrink-0 items-center justify-center rounded-2xl ${
        isDark ? "bg-white/10" : "bg-[#0875f5]"
      } shadow-[0_12px_26px_rgba(37,99,235,0.18)] ${className}`}
    >
      <span
        className={`absolute -left-0.5 -top-0.5 size-8 rounded-2xl border ${
          isDark ? "border-white/18" : "border-white/70"
        } bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(219,234,254,0.92)_48%,rgba(122,184,255,0.72)_100%)]`}
      />
      <span className="absolute -right-1 -top-1 size-2 rounded-full bg-[#93c5fd]/45 blur-[1px]" />
      <Icon
        className={`relative text-[#2563eb] ${iconClassName}`}
        strokeWidth={2.25}
      />
    </span>
  );
}
