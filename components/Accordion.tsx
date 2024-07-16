"use client"
import { BaseProps } from "@/types/common";
import { FC, useState } from "react";

interface AccordionProps extends BaseProps {
  title: string;
  open?: boolean;
}

const Accordion: FC<AccordionProps> = ({
  title,
  open = false,
  children,
  className,
  ...props
}) => {
  const [show, setShow] = useState<boolean>(open);

  const toggleAccordion = () => {
    setShow(!show);
  };

  return (
    <div className={`group flex flex-col gap-2 rounded-lg ${className}`} {...props}>
      <div
        className="flex cursor-pointer items-center justify-between border-b py-2"
        onClick={() => toggleAccordion()}
      >
        <h3 className="font-bold text-xl">{title} </h3>
        <span className="font-bold text-xl h-2 w-3 transition-all duration-500">
          {show ? "+" : "-"}
        </span>
      </div>
      <div
        className={`${
          show ? "block " : "hidden"
        } h-auto items-center transition-all duration-500 ease-in-out`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
