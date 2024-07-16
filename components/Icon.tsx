import React from "react";

export const icons = {
  menu: () => import("@/assets/svg/menu.svg"),
  facebook: () => import("@/assets/svg/facebook.svg"),
  instagram: () => import("@/assets/svg/instagram.svg"),
  twitter: () => import("@/assets/svg/twitter.svg"),
  arrowDown: () => import("@/assets/svg/arrow-down.svg"),
  arrowUp: () => import("@/assets/svg/arrow-up.svg"),
  arrowLeft: () => import("@/assets/svg/arrow-left.svg"),
  arrowRight: () => import("@/assets/svg/arrow-right.svg"),
};

export type IconName = keyof typeof icons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const SvgIcon = React.lazy(icons[name]);

  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <SvgIcon {...props} />
    </React.Suspense>
  );
};
