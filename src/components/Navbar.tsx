"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../utils/images/Logo.png";
import { NavbarItems } from "@/utils/utils";
import { it } from "node:test";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const path = usePathname();
  const [toggle, setToggle] = useState(false);
  return path !== "/login" ? (
    <div className="w-full flex py-2 justify-between items-center navbar">
      <div className="w-56 flex p-2 space-x-2">
        <div className=" object-contain">
          <Image src={Logo} alt="asd" height={500} width={170} />
        </div>
        <h2 className="text-secondary m-auto text-xl font-bold">
          <span className="text-primary">Hype</span>Reality
        </h2>
      </div>
      <div className="w-3/4 m-auto text-center">
        <input
          type="text"
          placeholder="Search"
          className="text-accent w-3/4 outline-0 transition-colors bg-transparent duration-750 border-b  focus:border-secondary"
        />
      </div>
      <div className="w-1/4 flex m-auto  text-secondary visible">
        <ul className="list-none space-x-2 sm:flex hidden justify-end items-center flex-1">
          {NavbarItems.map((item, index) => {
            return (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-[16px]`}
              >
                {item.text}
              </li>
            );
          })}

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? "close" : "open"}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            {/* Sidebar */}
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {NavbarItems.map((nav, index) => (
                  <li
                    key={index}
                    className={`font-poppins font-medium cursor-pointer text-[16px]`}
                  >
                    <a href={`#${nav.href}`}>{nav.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ul>
        <div className="flex mx-auto ml-2 space-x-2 ">
          <Link href={'/login'}>
            <button className="border rounded-sm border-secondary  h-6 w-12 text-sm">
              Login
            </button>
          </Link>
          <button className="border rounded-sm border-secondary  h-6 w-12 text-sm">
            Register
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full flex py-2 justify-center items-center navbar">
      <div className=" object-contain">
        <Image src={Logo} alt="asd" className="w-fit h-fit" />
      </div>
      <h2 className="text-2xl font-bold text-text">
        <span className="text-primary">Hype</span>Reality
      </h2>
    </div>
  );
};

export default Navbar;
