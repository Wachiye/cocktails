import { NavItemProps } from "@/types/navbar";
import { NavItem } from "./Navbar";

import Facebook from "@/assets/svg/facebook.svg";
import Instagram from "@/assets/svg/instagram.svg";
import Twitter from "@/assets/svg/twitter.svg";
import { Icon, IconName } from "./Icon";
import Image from "next/image";

const footerLinks = {
  aboutUs: [
    {
      title: "About Bacardi",
      href: "#",
    },
    {
      title: "Contact Us",
      href: "#",
    },
    {
      title: "Media",
      href: "#",
    },
    {
      title: "Career",
      href: "#",
    },
    {
      title: "FAQ",
      href: "#",
    },
  ],
  otherLinks: [
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
      title: "About",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
  ],
  socialLinks: [
    {
      title: "Instagram",
      icon: "instagram",
      href: "#",
    },
    {
      title: "Facebook",
      icon: "facebook",
      href: "#",
    },
    {
      title: "Facebook",
      icon: "twitter",
      href: "#",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100/50 text-black py-5 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row">
        <div className="flex justify-center items-center w-auto md:w-64">
          <Image
            width={32}
            height={32}
            src="/favicon.ico"
            alt="Bacardi"
            className="size-8 md:size-12"
          />
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3">
          <div>
            <h3 className="font-bold mb-2 uppercase">About Us</h3>
            <nav className="flex flex-col space-y-2">
              {footerLinks.aboutUs.map((item: NavItemProps, index) => (
                <NavItem
                  key={`footer-about-${index}`}
                  title={item.title}
                  href={item.href}
                  className="hover:bg-inherit hover:text-black"
                />
              ))}
            </nav>
          </div>
          <div>
            <h3 className="font-bold mb-2 uppercase">LiNKS</h3>
            <nav className="flex flex-col space-y-2">
              {footerLinks.otherLinks.map((item: NavItemProps, index) => (
                <NavItem
                  key={`footer-about-${index}`}
                  title={item.title}
                  href={item.href}
                  className="hover:bg-inherit hover:text-black"
                />
              ))}
            </nav>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="font-bold mb-2 uppercase">Stay in the know</h3>

            <div className="space-y-2">
              <form className="flex justify-start flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="px-4 py-1 outline-none border-b text-black flex-1"
                />
                <button className="block lg:inline-flex px-4 py-1 ring-1 ring-black text-black hover:bg-black hover:text-white">
                  Subscribe
                </button>
              </form>

              <h3 className="font-bold mb-2 uppercase">Follow Us</h3>
              <nav className="flex justify-start items-center space-x-2">
                {footerLinks.socialLinks.map((item, index) => (
                  <a key={index} href={item.href}>
                    <Icon name={item.icon as IconName} className="size-6" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
