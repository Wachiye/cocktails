import { BaseProps } from "@/types/common";

export default function Breezer({className, ...props}: BaseProps) {
  return (
    <div className={`stroke stretch text-7xl font-bold text-white backdrop-opacity-5 backdrop-invert bg-white invert-0 bg-opacity-5 w-full m-auto whitespace-nowrap  overflow-ellipsis ${className}`} {...props}>
      BREEZER
    </div>
  );
}
