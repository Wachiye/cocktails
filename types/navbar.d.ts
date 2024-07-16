import { BaseProps } from "./common";

interface NavItemProps extends BaseProps {
    title: string;
    href: string | "#";
    onClick?: () => void;
  }