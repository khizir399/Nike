import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { bigShoe3 } from "../assets/images";

const SpecialOffers = () => {
  return (
    <section className="flex flex-col flex-1 justify-center items-center gap-9 md:flex md:flex-col md:justify-center md:items-center">
      <div className="img_container border rounded-5 w-4/5 h-90 align-middle items-center ml-14">
        <img
          src={bigShoe3}
          alt="collection"
          className="bg-center justify-center rounded-5 items-center mt-46 bg-cover"
        />
      </div>
      <div id="text-container" className="w-2/5 pl-10 flex-col flex-wrap md:text-center md:w-full ">
        <h1 className="font-bold font-montserrat text-3xl">
          {" "}
          <span className="text-coral-red"> Special</span> Offers
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
          necessitatibus maxime cumque perspiciatis officia itaque, enim
          provident consequuntur sit rerum nesciunt officiis aut ullam in
          voluptates quibusdam libero excepturi tenetur? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Corrupti, enim architecto ipsa id
          assumenda possimus consequuntur velit repudiandae modi expedita
          incidunt eos fugit culpa soluta quae ea. Odit, suscipit inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          incidunt delectus dolor fuga eos est repudiandae! At tempore iusto
          quod doloribus nam, totam architecto ducimus, commodi, dolorum sequi
          in fugit.
        </p>
        <div className="md:flex md:justify-center">
        <Button
          label="Learn more"
          iconURL={arrowRight}
          className="flex items-center ml-9 md:text-center "
        />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
