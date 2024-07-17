import Image from "next/image";
import Breezer from "./Breezer";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden h-screen relative bg-cover bg-center text-center bg-white bg-[url(/images/hero-sm.jpg)] bg-opacity-5">
      <div
        className={`w-full h-full flex flex-col justify-center items-center space-y-2  backdrop-opacity-5 backdrop-invert bg-black/20 text-white invert-0 bg-opacity-5 m-auto whitespace-nowrap  overflow-ellipsis`}
      >
        <h3 className="stroke text-3xl md:text-7xl font-bold text-white">Cocktails</h3>
        <span className="font-bold capitalize px-4 py-2 ring-1 ring-gray-300 rounded-full">Every cocktail tells a story</span>
      </div>
    </section>
  );
}
