import { BaseProps } from "@/types/common";

export default function GridWrapper({
  className,
  children,
  ...props
}: BaseProps) {
  return (
    <section
      className={`grid justify-items-start gap-4 h-fit sm:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
