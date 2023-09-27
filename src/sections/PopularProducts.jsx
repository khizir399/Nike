import React from "react";
import { products } from "../constants";
import PopularProductsCard from "../components/PopularProductsCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 md:flex md:flex-col md:justify-center md:items-center">
      <div className="flex flex-col md:text-center md:text-xl">
        <h2 className="font-bold text-3xl">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p>Experience the best Quality and style with our selection </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 mt-10 mx-auto">
        {products.map((product) => [
          <PopularProductsCard key={product.name} {...product} />,
        ])}
      </div>
    </section>
  );
};

export default PopularProducts;
