import { BaseProps } from "@/types/common";
import { Icon } from "./Icon";
import Link from "next/link";

interface Props extends BaseProps {
  direction: "right" | "left" | "bottom" | "top";
  text: string;
  href?: string;
}
export default function ScrollTo({
  direction,
  text,
  href = "#",
  className,
  ...rest
}: Props) {
  return (
    <Link
      href={href}
      className={`relative flex justify-center items-center w-16 h-16 bg-white ring-2 ring-black rounded-full ${className}}`}
      {...rest}
    >
      <span className="text-xs">{text}</span>
      <Icon
        name={
          direction === "right"
            ? "arrowRight"
            : direction === "bottom"
            ? "arrowDown"
            : direction === "left"
            ? "arrowLeft"
            : "arrowUp"
        }
        className={`absolute w-12 h-12 p-0 ${
          direction === "right"
            ? " translate-x-1/2 top-1/2 -translate-y-1/2 -right-3"
            : direction === "bottom"
            ? " -bottom-3 left-1/2 -translate-x-1/2 translate-y-1/2 "
            : direction === "left"
            ? " -translate-x-1/2 top-1/2 -translate-y-1/2 -left-3 "
            : " -top-3 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        }`}
      />
    </Link>
  );
}
