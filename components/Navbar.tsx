// components/Navbar.js
import Link from "next/link";

import { FC } from "react";
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
    href: "#",
  },
  {
    title: "Products",
    href: "#",
  },
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Contact Us",
    href: "#",
  },
];

export const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 flex justify-between items-center space-x-1 px-4 md:px-8 lg:px-16  py-2 bg-white z-40">
      <div className="logo">
        <Image width={32} height={32} src="/favicon.ico" alt="Bacardi"  className="size-8 md:size-12"/>
      </div>
      <div className="flex justify-end items-center space-x-2">
        <NavItem
          title="Show Now"
          href="/products"
          className="sm:hidden px-2 py-1 ring-1 ring-gray-300"
        />
        <button className="sm:hidden flex justify-center items-center">
          <Icon name={"menu"} className="h-8 w-8" />
        </button>
      </div>

      <div className="max-sm:hidden fixed h-screen overflow-x-hidden overflow-y-auto top-0 right-0 w-56 sm:h-auto sm:w-auto sm:relative sm:flex-1 bg-white">
        <nav className="container m-auto flex flex-col space-y-2 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 w-full items-center">
          {navigationItems.map((item, index) => (
            <NavItem
              key={`nav-item-${index}`}
              title={item.title}
              href={item.href}
              onClick={item.onClick}
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
