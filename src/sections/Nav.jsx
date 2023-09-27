import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggle = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <a
            href="/"
            className="font-montserrat leading-normal text-lg text-slate-gray"
          >
            <li>Home</li>
          </a>
          <a
            href="/"
            className="font-montserrat leading-normal text-lg text-slate-gray"
          >
            <li>About Us</li>
          </a>
          <a
            href="/"
            className="font-montserrat leading-normal text-lg text-slate-gray "
          >
            <li>Products</li>
          </a>
          <a
            href="/"
            className="font-montserrat leading-normal text-lg text-slate-gray"
          >
            <li>Contact Us</li>
          </a>
        </ul>
        <div className="max-lg:inline-block min-xl:hidden">
          <button
            onClick={toggle}
            className="bg-blue-100 text-white py-2 px-4 rounded hover:bg-blue-300 w-full"
          >
            <img
              src={hamburger}
              alt="Hamburger"
              width={25}
              height={25}
              className=""
            />
            {menuVisible && (
              <div className="max-xl:hidden max-lg:block fixed top-0 left-0 w-screen h-screen bg-white border border-gray-300 z-50 py-6">
                <ul>
                  <a
                    href="/"
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    <li className="hover:bg-gray-100 py-1 px-3 cursor-pointer">
                      Home
                    </li>
                  </a>
                  <a
                    href="/"
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    <li className="hover:bg-gray-100 py-1 px-3 cursor-pointer">
                      About Us
                    </li>
                  </a>
                  <a
                    href="/"
                    className="font-montserrat leading-normal text-lg text-slate-gray "
                  >
                    <li className="hover:bg-gray-100 py-1 px-3 cursor-pointer">
                      Products
                    </li>
                  </a>
                  <a
                    href="/"
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    <li className="hover:bg-gray-100 py-1 px-3 cursor-pointer">
                      Contact Us
                    </li>
                  </a>
                </ul>
              </div>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
