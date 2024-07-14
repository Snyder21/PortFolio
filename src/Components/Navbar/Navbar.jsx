import React, { useId, useState } from "react";
import pic from "/pankaj.avif";
import { TiThMenuOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";
function Navbar() {
  const [select, Onselect] = useState(false);

  const navItems = [
    { key: 1, text: "Home" },
    { key: 2, text: "About" },
    // { key: 3, text: "PortFolio" },
    { key: 4, text: "Experience" },
    { key: 5, text: "Contact" },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white">
        <div className=" flex justify-between  items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className=" h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Pankaj <span>Kumar</span>
              <p className="text-sm">Competetive Programmer,Web Developer</p>
            </h1>
          </div>
          {/* Desctop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer"
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div onClick={() => Onselect(!select)} className="md:hidden">
            {select ? <RxCross2 size={24} /> : <TiThMenuOutline size={24} />}
          </div>
        </div>
        {/* Mobile Navbar */}
        {select && (
          <div>
            <ul className="bg-white md:hidden  flex flex-col items-center h-screen justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200  font-semibold cursor-pointer"
                >
                  <Link
                    onClick={() => Onselect(!select)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
