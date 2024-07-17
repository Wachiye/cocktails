"use client";
import React, { Suspense, useEffect, useState } from "react";
import productActions from "@/features/productActions";
import { Drink } from "@/types/product";
import GridWrapper from "@/components/GridWrapper";
import ProductCard from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";

const Placeholder = () => {
  return (
    <section className="container m-auto py-5 px-4 mb-16">
      <div className=" flex justify-center items-center gap-4 mb-10">
        <div className="w-full sm:w-1/2 px-4 py-2 ring-1 ring-gray-300 bg-gray-300 rounded-full" />
      </div>

      <GridWrapper
        id="products"
        className="w-full max-md:grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="bg-gray-300 rounded-md w-full"></div>
        ))}
      </GridWrapper>
    </section>
  );
};

function ProductsContent() {
  const params = useSearchParams();
  const [search, setSearch] = useState<string>(params.get("search") ?? "");
  const { searchProducts } = productActions();
  const [products, setProducts] = useState<Drink[]>([]);

  useEffect(() => {
    const fetch = async () => {
      await searchProducts(search)
        .then((data) => {
          setProducts(data.drinks);
        })
        .catch((e) => {
          setProducts(products.length === 0 ? [] : products);
        });
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <section className="container m-auto py-5 px-4 mb-16">
      <div className=" flex justify-center items-center gap-4 mb-10">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value as string)}
          placeholder="Search cocktails..."
          className="w-full sm:w-1/2 px-4 py-2 ring-1 ring-gray-300 bg-white rounded-full"
        />
      </div>
      {products.length > 0 && (
        <GridWrapper
          id="products"
          className="w-full max-md:grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]"
        >
          {products.map((item) => (
            <ProductCard key={item.idDrink} product={item} />
          ))}
        </GridWrapper>
      )}
    </section>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<Placeholder />}>
      <ProductsContent />
    </Suspense>
  );
}
