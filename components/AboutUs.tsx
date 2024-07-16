import Image from "next/image";
import ScrollTo from "./ScrollTo";
import FlavorCard from "./FlavourCard";
import GridWrapper from "./GridWrapper";
import Breezer from "./Breezer";
import Accordion from "./Accordion";

const descriptions = [
  {
    title: "We Bacardi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Our Products",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "How We Work",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Our Businesses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Contact Us",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];
export default function AboutUs() {
  return (
    <section className="container m-auto py-5 px-4 mb-16">
      <div className=" flex flex-col justify-start md:justify-between md:flex-row gap-4 mb-10">
        <div className=" px-4 md:px-6 py-5 md:w-1/2 space-y-5">
          <Image
            width={96}
            height={96}
            alt=""
            src={"/images/glass.png"}
            className="h-24 w-24"
          />
          <h3 className="text-black font-bold text-2xl">About Us</h3>
          <p className="text-base">
            <strong>Every cocktail tells a story</strong>. Our journey began
            with a passion for mixology and a desire to share the joy of
            crafting exquisite drinks with the world. Founded in Jan 2024, we
            have grown from a small team of enthusiasts into a vibrant community
            of cocktail lovers.
          </p>
          <p className="text-base">
            Our mission is to inspire and empower you to create memorable
            cocktail experiences.
          </p>
        </div>
        <div className="flex-1 space-x-2">
          <Image
            width={500}
            height={500}
            alt=""
            src={"/images/drinks.png"}
            className="w-full"
          />
        </div>
      </div>

      <div className=" flex flex-col justify-start md:justify-between md:flex-row gap-4 mb-10">
        <div className="space-x-2 max-w-md">
          <Image
            width={2000}
            height={2000}
            alt=""
            src={"/images/about.png"}
            className="w-full h-auto object-cover object-bottom"
          />
        </div>
        <div className="flex-1 flex-shrink-0 px-4 md:px-6 py-5 md:w-1/2 space-y-2">
          {descriptions.map((desc, index) => (
            <Accordion
              key={`desc-${index}`}
              title={desc.title}
              open={index === 0}
              tabIndex={1}
            >
              {desc.description}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
