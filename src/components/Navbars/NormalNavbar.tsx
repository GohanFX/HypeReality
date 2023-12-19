"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../utils/images/Logo.png";
import { NavbarItems } from "@/utils/utils";

import { useSession } from "../Session/SessionContext";

import { ProfileDropDown } from "../ProfileDropDown";
import { useLayout } from "@/utils/useLayout";
import { useEffect } from "react";

export const NormalNavbar = async () => {

  const { user, isLoggedIn } = useSession();
  return (
    <div className="w-full flex py-2 font-heading justify-between items-center navbar">
      <div className="w-1/4 h-2/3 flex p-2 space-x-2">
        <Link href={"/"} className="flex">
          <div className=" object-contain">
            <Image src={Logo} alt="asd" />
          </div>
          <h2 className="text-secondary m-auto uppercase  text-2xl font-bold">
            <span className="text-primary">Hype</span> Reality
          </h2>
        </Link>
      </div>
      <div className="w-2/4 m-auto text-center">
        <input
          type="text"
          placeholder="Search"
          className="text-accent placeholder:text-xl text-lg md:visible invisible w-3/4 outline-0 transition-colors bg-transparent duration-750 border-b  focus:border-secondary"
        />
      </div>
      <div className="w-1/4 shrink flex m-auto   text-secondary ">
        <ul className="list-none space-x-2 md:flex hidden justify-center m-auto items-center lg:visible invisible flex-1">
          {NavbarItems.map((item, index) => {
            return (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer hover:text-primary transition-colors duration-500 text-lg`}
              >
                {item.text}
              </li>
            );
          })}
        </ul>

        <div className="shrink  mx-auto ml-2 ">
          {isLoggedIn ? (
              <ProfileDropDown username={`${user.username}`} />
          ) : (
            <div className="">
              <Link href={"/login"}>
                <button className="border mb-2 rounded-sm border-secondary w-16 p-1 text-md">
                  Login
                </button>
              </Link>
              <Link href={"/register"}>
                <button className="border rounded-sm border-secondary p-1  w-16 text-md">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
