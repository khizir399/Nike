import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="h-full">
        <h1 className="text-3xl font-montserrat font-bold">
          We Provide You <span className="text-coral-red"> Super</span>{" "}
          <span className="text-coral-red">Quality</span> Shoes
        </h1>
        <p className="text-slate-gray text-start">
          Ensuring Premium Comfort and style. Our meticulously crafted is
          designed to <br /> elevate your experience, providing you with
          unmatched quality, innovation <br /> and a touch of elegance.
        </p>
        <Button label="View details" iconURL={arrowRight} />
      </div>
      <div className="flex items-center justify-center">
        <img src={shoe8} alt="" className="bg-cover bg-center" />
      </div>
    </section>
  );
};

export default SuperQuality;
