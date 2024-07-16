import Image from "next/image";
import { Icon } from "./Icon";
import ScrollTo from "./ScrollTo";

interface Stat {
  title: string;
  count: string;
}

const stats: Stat[] = [
  { title: "More than Flavors", count: "10+" },
  { title: "Year old CanDrink", count: "21+" },
  { title: "Alcohol Contain", count: "4%" },
];

export default function Statistics() {
  return (
    <section className="w-full py-5 px-4 bg-yellow-50/5 mb-16">
      <div className="container m-auto flex flex-col justify-start md:justify-between md:flex-row gap-4 mb-10">
        <div className="w-full max-w-md px-4 md:px-6 py-5">
          <p className="text-base">
            Bacardi Breezer, Breezer for short, is a fruit-based alcoholic drink
            which comes in many flavours.
          </p>
        </div>
        <div className="relative flex-1  max-md:order-3">
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -mb-10">
            <ScrollTo text="Scroll" direction="bottom" className="mt-10" />
          </div>
        </div>
        <div className="w-full grid gap-5 grid-cols-3 max-w-md">
          {stats.map((item) => (
            <div
              key={item.title}
              className="px-4 py-5 overflow-hidden sm:p-6 text-center"
            >
              <p className="mt-1 text-2xl md:text-3xl font-bold text-gray-900">
                {item.count}
              </p>
              <p className="text-xs md:text-sm lg:text-base text-gray-500">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
