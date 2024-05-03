"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  logo: React.ReactNode;
  text: string;
};

export default function CLink({ href, logo, text }: Props) {
  const isActive = usePathname() == href;
  return (
    <Link
      href={href}
      className={`flex items-center gap-4 px-2.5  hover:text-foreground ${
        isActive ? "text-foreground" : "text-muted-foreground"
      }`}
    >
      <div className="*:h-5 *:w-5 group-hover:scale-110">{logo}</div>
      {text}
    </Link>
  );
}
