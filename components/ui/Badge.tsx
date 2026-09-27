import { Corners } from "./Corners";
import { Arrow } from "./Arrow";

export function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`relative inline-flex h-[26px] items-center bg-panel px-[15px] text-tiny text-white ${className}`}>
      <Corners />
      {children}
    </span>
  );
}

// Small square with an arrow pointing right that turns up-right when its `group` is hovered.
export function ArrowBox({ size = 32 }: { size?: number }) {
  return (
    <span className="relative grid shrink-0 place-items-center bg-panel/90" style={{ width: size, height: size }}>
      <Corners />
      <Arrow className="rotate-45 transition-transform duration-500 ease-out-expo group-hover:rotate-0" />
    </span>
  );
}
