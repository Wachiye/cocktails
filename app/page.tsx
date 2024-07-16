import AboutUs from "@/components/AboutUs";
import Flavors from "@/components/Flavours";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Statistics from "@/components/Statistics";
export default function Home() {
 
  return (
    <section className="flex min-h-screen flex-col items-center justify-start">
      <Hero />
      <Statistics />
      <Flavors />
      <Products/>
      <AboutUs />
    </section>
  );
}
