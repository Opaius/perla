"use client";

import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { usePathname } from "next/navigation";

type Props = {
  logo: React.ReactNode;
  tooltip: string;
  href: string;
};
export default function CTooltip({ logo, tooltip, href }: Props) {
  const isActive = usePathname() == href;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={`group flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${
              isActive && "bg-accent text-accent-foreground"
            }`}
          >
            <div className="*:h-5 *:w-5 group-hover:scale-110">{logo}</div>
            <span className="sr-only">{tooltip}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{tooltip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
