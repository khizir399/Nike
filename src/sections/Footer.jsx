import React from "react";
import { footerLogo } from "../assets/images";

const Footer = () => {
  return (
    <div>
      <div>
        <a href="/">
          <img src={footerLogo} alt="" />
        </a>
        <p className="mt-7 leading-5 text-slate-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam
          animi, deleniti aliquid ipsum unde. Deleniti, nesciunt? Repellat
          consectetur quas pariatur, doloribus odit recusandae soluta sequi iste
          natus, aperiam sed?
        </p>
      </div>
    </div>
  );
};

export default Footer;
