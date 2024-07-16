import Image from "next/image";
import ScrollTo from "./ScrollTo";
import FlavorCard from "./FlavourCard";
import GridWrapper from "./GridWrapper";
import Breezer from "./Breezer";

interface Flavor {
  title: string;
  link: string;
  imageUrl?: string;
}

export default function Flavors() {
  return (
    <section className="container m-auto py-5 px-4 mb-16">
      <div className=" flex flex-col justify-start md:justify-between md:flex-row gap-4 mb-10">
        <div className="w-full max-w-lg px-4 md:px-6 py-5  space-y-5">
          <Image
            width={96}
            height={96}
            alt=""
            src={"/images/orange.png"}
            className="h-24 w-24"
          />
          <h3 className="text-black font-bold text-2xl">Breezer Flavors</h3>
          <p className="text-base">
          Celebrate the flavors of the season with our limited-time offerings. Fresh ingredients and innovative twists make these cocktails a must-try.
          </p>
        </div>
        <div className="md:w-1/2 flex space-x-2">
          <Image
            width={96}
            height={96}
            alt=""
            src={"/images/glass-2.png"}
            className="w-1/2"
          />
          <Image
            width={96}
            height={96}
            alt=""
            src={"/images/glass-2.png"}
            className="w-1/2"
          />
        </div>
      </div>
      <GridWrapper className="w-full max-md:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]">
        <FlavorCard />
        <FlavorCard />
        <FlavorCard />
        <FlavorCard />

        <div className="relative w-full">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2">
            <ScrollTo text="View all" direction="right" className="mt-10" />
          </div>
        </div>
      </GridWrapper>
    </section>
  );
}
