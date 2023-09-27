import React from "react";
import { star } from "../assets/icons";
const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className="felx flex-1 flex-col w-full max-sm:w-full">
      <a href="">
      <img src={imgURL} alt="name" className="w-[280px] h-[280px]" />
      </a>
      <div className="mt-2 ml-1 flex items-center">
        <a href="">
        <img src={star} alt="rating" width={20} height={20} />
        </a>
        <p className="mt-2 ml-2 font-palanquin">4.6</p>
      </div>
      <a href="" className="hover:text-coral-red"><h3>{name}</h3></a>
      <p className="font-bold text-coral-red">{price}</p>
    </div>
  );
};

export default PopularProductsCard;
