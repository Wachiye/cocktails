import Image from "next/image";
import GridWrapper from "./GridWrapper";
import productActions from "@/features/productActions";
import ProductCard from "./ProductCard";
import ScrollTo from "./ScrollTo";
import { Drink } from "@/types/product";

const fetch = async (): Promise<Drink[]> => {
  const products = await productActions
    .getProducts()
    .then((data) => {
      return data.drinks.slice(0, 6);
    })
    .catch((e) => {
      return [];
    });

  return products;
};

export default async function Products() {
  const products = await fetch();

  return (
    <section id="products" className="container m-auto py-5 px-4 mb-16">
      <div className=" flex flex-col justify-start md:justify-between md:flex-row gap-4 mb-10">
        <div className="flex-1 space-x-2">
          <Image
            width={500}
            height={500}
            alt=""
            src={"/images/drinks.png"}
            className="w-full"
          />
        </div>
        <div className=" px-4 md:px-6 py-5 md:w-1/2 space-y-5">
          <Image
            width={96}
            height={96}
            alt=""
            src={"/images/glass.png"}
            className="h-24 w-24"
          />
          <h3 className="text-black font-bold text-2xl">Our Product</h3>
          <p className="text-base">
            Everything you need to craft the perfect cocktails. Each kit
            includes premium spirits, mixers, garnishes, and a step-by-step
            recipe card.
          </p>
          <p className="text-base">
            Shop our exclusive collection of rare and limited-edition spirits,
            perfect for collectors, distributors, retailers and at home
            consumers
          </p>
        </div>
      </div>
      {products.length > 0 && (
        <GridWrapper className="w-full max-md:grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]">
          {products.map((item) => (
            <ProductCard key={item.idDrink} product={item} />
          ))}
          <div className="relative w-full">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2">
              <ScrollTo
                href="/products"
                text="View all"
                direction="right"
                className="mt-10"
              />
            </div>
          </div>
        </GridWrapper>
      )}
    </section>
  );
}
