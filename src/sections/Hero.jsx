import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons/index";
import { bigShoe1 } from "../assets/images/index";
import ShoeCard from "../components/ShoeCard";
import { shoes } from "../constants";

const Hero = () => {
  return (
    <section id="home" className="flex justify-center items-center xl:flex-row md:flex-col md:w-full sm:w-full sm:flex-col">
      <div className="flex justify-center items-start flex-col mt-[200px] md:w-full md:flex md:justify-center md:h-full md:pt-4 md:items-center pb-10 ">
        <p className="ml-10 text-xl text-coral-red font-montserrat md:text-3xl">
          Our Summer Collection
        </p>
        <h1 className="mt-10 text-4xl max-sm:text=[72px] font-palanquin ml-6 text-center">
          <span className="font-bold">The New Arrival</span> <br />
          <span className="text-coral-red ">Nike</span> Shoes
        </h1>
        <p className="mt-4 text-center ml-4 md:text-xl">
          Discover stylish Nike arrivals, quality comfort, and <br /> innovation
          for your active life
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div
          id="stats"
          className="flex justify-start items-start flex-end w-1 mt-12 ml-5 gap-9 h-20 md:flex md:justify-center"
        >
          <h5 className="leading-7 text-center text-xl">
            1k+ <br /> <p className="font-bold">Shops</p>
          </h5>
          <h5 className="leading-7 text-center text-xl">
            500+ <br /> <p className="font-bold">Brands</p>
          </h5>
          <h5 className="leading-7 text-center text-xl">
            250k+ <br /> <p className="font-bold">Customers</p>
          </h5>
        </div>
      </div>
      <div className="flex justify-end bg-cover md:pt-11 bg-center w-3/5 bg-hero bg-primary mt-20 ml-6 md:flex md:justify-center md:items-center md:align-middle md:place-content-center md:w-full md:h-full">
        <img src={bigShoe1} alt="shoe collection" />
        {/* <div>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={() => {}}
                bigShoeImg=""
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
