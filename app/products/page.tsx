"use client";
import React, { Suspense } from "react";
import GridWrapper from "@/components/GridWrapper";
import ProductsSearch from "@/components/ProductsSearch";

const Placeholder = () => {
  return (
    <section className="container m-auto py-5 px-4 mb-16">
      <div className=" flex justify-center items-center gap-4 mb-10">
        <div className="animate-pulse w-full sm:w-1/2 px-4 py-2 ring-1 ring-gray-300 bg-gray-300 rounded-full" />
      </div>

      <GridWrapper
        id="products"
        className="w-full max-md:grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse bg-gray-300 rounded-md w-full"
          ></div>
        ))}
      </GridWrapper>
    </section>
  );
};

export default function ProductsPage( {searchParams }: { searchParams: { search: string } }) {
  return (
    <Suspense fallback={<Placeholder />}>
      <ProductsSearch initialSearch={searchParams.search} />
    </Suspense>
  );
}
