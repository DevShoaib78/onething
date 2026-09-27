import { Corners } from "./Corners";
import { Meter } from "./Meter";

export function SectionTag({ label, lit = 1, className = "" }: { label: string; lit?: number; className?: string }) {
  return (
    <span className={`relative inline-flex h-[30px] items-center gap-[10px] bg-panel px-[15px] backdrop-blur-[2.5px] ${className}`}>
      <Corners />
      <Meter lit={lit} />
      <span className="text-tiny text-white">{label}</span>
    </span>
  );
}
