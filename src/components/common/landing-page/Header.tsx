"use client";

import ActiveLink from "@/components/ui/costum-link";
import { cn } from "@/components/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const headerMenu = [
  { name: "Beranda", link: "/" },
  { name: "about stoic", link: "/about-stoic" },
  { name: "about psychology", link: "/psychology" },
];

interface HeaderProps {
  isHasBackground?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHasBackground }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const handleChangeBackground = (): void => {
    setShowBackground(window.scrollY >= 10);
  };

  const handleShowSidebar = (): void => {
    setShowSidebar((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChangeBackground);
    return () => window.removeEventListener("scroll", handleChangeBackground);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showSidebar ? "hidden" : "auto";
  }, [showSidebar]);

  const textColor =
    isHasBackground || showBackground ? "text-gray-900" : "text-white";
  const bgColor =
    isHasBackground || showBackground ? "bg-white shadow-md" : "bg-transparent";

  return (
    <header
      className={cn("fixed w-full z-40 transition-all duration-300", bgColor)}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 py-2.5">
        <Link className="flex items-center" href="/">
          <Image
            src="/images/logostoi.png"
            alt="logo"
            width={100}
            height={100}
            className="object-contain"
            priority
            quality={90}
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          {headerMenu.map((item, index) => (
            <ActiveLink
              key={index}
              href={item.link}
              isActive={isHasBackground || showBackground}
              className={cn(
                "text-base font-medium hover:text-red-600 transition-colors"
              )}
            >
              {item.name}
            </ActiveLink>
          ))}
        </div>

        <button onClick={handleShowSidebar} className="lg:hidden">
          <Menu className={cn("w-6 h-6", textColor)} />
        </button>

        {showSidebar && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
              onClick={handleShowSidebar}
            ></div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
