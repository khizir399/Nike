import React from "react";
import { customer1, customer2 } from "../assets/images";

const CustomerReviews = () => {
  return (
    <section>
      <div className="text-center text-3xl font-montserrat font-semibold">
        <h1>
          What Our <span className="text-coral-red"> Customer</span> Says
        </h1>
      </div>
      <div id="card-container" className="pt-4 flex justify-evenly md:flex md:flex-1 md:gap-4">
        <div className="w-[150px] border flex flex-col justify-center items-center">
          <img
            src={customer1}
            alt=""
            width={104}
            height={104}
            className="rounded-full flex justify-center items-center align-middle "
          />
          <h1 className="text-center text-2xl">Alex</h1>
          <p className="text-center text-xl font-palanquin">
            The Shoes are very great.
          </p>
        </div>
        <div className="w-[150px] border flex flex-col justify-center items-center">
          <img
            src={customer2}
            alt=""
            width={104}
            height={104}
            className="rounded-full flex justify-center items-center align-middle "
          />
          <h1 className="text-center text-2xl">Katherine</h1>
          <p className="text-center text-xl font-palanquin">
            Indredible Shoes.
          </p>
        </div>
        <div className="w-[150px] border flex flex-col justify-center items-center">
          <img
            src={customer1}
            alt=""
            width={104}
            height={104}
            className="rounded-full flex justify-center items-center align-middle "
          />
          <h1 className="text-center text-2xl">Alex</h1>
          <p className="text-center text-xl font-palanquin">
            The Shoes are very great.
          </p>
        </div>
        <div className="w-[150px] border flex flex-col justify-center items-center">
          <img
            src={customer2}
            alt=""
            width={104}
            height={104}
            className="rounded-full flex justify-center items-center align-middle "
          />
          <h1 className="text-center text-2xl">Catilin</h1>
          <p className="text-center text-xl font-palanquin">
            Exceptionally good.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
