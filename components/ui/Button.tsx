import { Corners } from "./Corners";
import { RollText } from "./RollText";
import { SwapArrow } from "./Arrow";

type Props = {
  href: string;
  children: string;
  variant?: "solid" | "ghost" | "light";
  arrow?: boolean;
  className?: string;
  size?: "md" | "sm";
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

// Square button with corner ticks. On hover an orange hairline at the foot rises to fill it,
// the label rolls to its copy and the arrow swaps out diagonally.
export function Button({ href, children, variant = "solid", arrow = true, className = "", size = "md", onClick }: Props) {
  const external = /^(https?:|mailto:)/.test(href);
  const bg = variant === "solid" ? "bg-panel" : variant === "light" ? "bg-white/[0.08]" : "bg-card";
  const h = size === "md" ? "h-[54px] px-[22px]" : "h-12 px-5";
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
      className={`group relative inline-flex items-center justify-center gap-[15px] overflow-hidden ${bg} ${h} text-[14.4px] tracking-[-0.02em] text-white backdrop-blur-[2.5px] ${className}`}
    >
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-accent transition-[height] duration-500 ease-out-expo group-hover:h-full" />
      <Corners />
      <RollText className="relative leading-[1.2]">{children}</RollText>
      {arrow && <SwapArrow className="relative" />}
    </a>
  );
}
