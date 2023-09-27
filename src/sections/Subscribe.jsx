import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
const Subscribe = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div>
        <h1 className="text-center text-3xl font-palanquin">
          Sign Up for <span className="text-coral-red"> Updates</span> &
          Newsletter
        </h1>
      </div>
      <div className="flex justify-center pt-4 flex-col w-100 items-center">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="rounded-full w-[400px] px-3 border h-12"
        />
        <div className="flex justify-center items-center">
          <Button label="Sign up" iconURL={arrowRight} />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
