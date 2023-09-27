import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <div >
    <button className="flex ml-5 h-5 mt-5 font-montserrat justify-center items-center bg-coral-red px-7 py-5 border rounded-full align-center text-white hover:text-black">
      {label}{" "}
      <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5" />
    </button>
    </div>
  );
};

export default Button;
