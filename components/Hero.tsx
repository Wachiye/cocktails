import Image from "next/image";
import Breezer from "./Breezer";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden h-screen relative bg-cover bg-center text-center bg-white invert-0 bg-opacity-5 py-20">
      <Breezer />
      <Image
        width={100}
        height={100}
        src="/images/glass-2.png"
        alt="Bacardi"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  -rotate-[15deg] -ml-24 w-full max-w-[320px]"
      />
      <Image
        width={100}
        height={100}
        src="/images/glass.png"
        alt="Bacardi"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2  -translate-y-1/2 rotate-[15deg] ml-24 w-full max-w-[320px]"
      />

      <Image
        width={100}
        height={100}
        src="/images/orange.png"
        alt="Bacardi"
        className="absolute right-5 top-5 transform -translate-x-1/2  -translate-y-1/2 rotate-[15deg] ml-24 w-24 -z-1"
      />
      <Image
        width={100}
        height={100}
        src="/images/watermelon.png"
        alt="Bacardi"
        className="absolute left-5 bottom-10 transform -translate-x-1/2  -translate-y-1/2 rotate-[15deg] ml-24 w-24 -z-1"
      />
      <Image
        width={100}
        height={100}
        src="/images/blue-berries.png"
        alt="Bacardi"
        className="absolute right-5 bottom-10 transform -translate-x-1/2  -translate-y-1/2 rotate-[15deg] ml-24 w-24 -z-1"
      />
    </section>
  );
}
