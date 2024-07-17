// components/Navbar.js
"use client";
import Link from "next/link";

import { FC, useState } from "react";
import { NavItemProps } from "@/types/navbar";
import { Icon } from "./Icon";
import Image from "next/image";

const navigationItems: NavItemProps[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Flavours",
    href: "/#flavors",
  },
  {
    title: "Products",
    href: "#products",
  },
  {
    title: "About Us",
    href: "/#about",
  },
  {
    title: "Contact Us",
    href: "#",
  },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full sticky top-0 flex justify-between items-center space-x-1 px-4 md:px-8 lg:px-16  py-2 bg-white z-40">
      <div className="logo">
        <Image
          width={32}
          height={32}
          src="/favicon.ico"
          alt="Bacardi"
          className="size-8 md:size-12"
        />
      </div>
      <div className="flex justify-end items-center space-x-2">
        <NavItem
          title="Show Now"
          href="/products"
          className="sm:hidden px-2 py-1 ring-1 ring-gray-300"
        />
        <button
          className="sm:hidden flex justify-center items-center"
          onClick={toggleMobileMenu}
        >
          <Icon
            name={isMobileMenuOpen ? "close" : "menu"}
            className="h-8 w-8"
          />
        </button>
      </div>

      <div
        className={`max-sm:flex flex-col fixed top-0 right-0 bg-white z-50 transition-transform transform ${
          isMobileMenuOpen
            ? "translate-x-0 top-16 w-48 min-h-screen flex-col justify-start"
            : "translate-x-full"
        } sm:h-auto sm:w-auto sm:relative sm:flex-1 sm:flex-row sm:justify-center sm:space-x-4 sm:items-center sm:translate-x-0`}
      >
        <nav className="container sm:m-auto flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 w-full items-center">
          {navigationItems.map((item, index) => (
            <NavItem
              key={`nav-item-${index}`}
              title={item.title}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ))}
        </nav>
      </div>
      <NavItem
        title="Show Now"
        href="/products"
        className="max-sm:hidden px-2 py-1 ring-1 ring-gray-300"
      />
    </nav>
  );
};

export const NavItem: FC<NavItemProps> = ({
  title,
  href,
  className = "",
  ...rest
}) => {
  return (
    <Link
      href={href}
      className={`px-2 py-1 text-xs md:text-sm lg:text-base w-full sm:w-auto rounded-sm text-gray-400 hover:bg-gray-50 hover:text-black ${className}`}
      {...rest}
    >
      {title}
    </Link>
  );
};
