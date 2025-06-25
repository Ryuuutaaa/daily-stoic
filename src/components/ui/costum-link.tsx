"use client";

import Link from "next/link";
import { cn } from "../utils";
import { usePathname } from "next/navigation";
import { ReactNode, CSSProperties, AnchorHTMLAttributes } from "react";

interface ActiveLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  isActive?: boolean;
  style?: CSSProperties;
  className?: string;
}

const ActiveLink = ({
  href,
  children,
  isActive = false,
  style,
  className,
  ...props
}: ActiveLinkProps) => {
  const pathName = usePathname();
  const isCurrent = pathName === href;

  return (
    <Link
      href={href}
      {...props}
      style={style}
      className={cn(
        "font-semibold pr-3 underline-offset-[6px] transtiion-colors",
        className,
        {
          underline: isCurrent,
          "text-white hover:text-white/90": !isActive && isCurrent,
          "text-gray-400 hover:text-white/90": !isActive && !isCurrent,
          "text-gray-800 hover:underline": isActive && isCurrent,
          "text-gray-600 hover:text-gray-800 hover:underline":
            isActive && !isCurrent,
        }
      )}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
