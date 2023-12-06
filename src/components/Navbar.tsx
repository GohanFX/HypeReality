
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../utils/images/Logo.png";
import { IronOptions, NavbarItems } from "@/utils/utils";
import { it } from "node:test";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IronSessionData, getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { User } from "@/utils";

async function getIronSessionData( ) {
  return await getIronSession<IronSessionData>(cookies(), IronOptions);
}


const Navbar = async () => {
  const session = (await getIronSessionData()).user;
  return <div className="w-full flex py-2 justify-between items-center navbar">
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
          </ul>

        
        <div className="flex mx-auto ml-2 space-x-2 ">
          {session ? (<div>
            Hello! {session.username}
          </div>) : (<><Link href={'/login'}>
            <button className="border rounded-sm border-secondary  h-6 w-12 text-sm">
              Login
            </button>
          </Link>
          <button className="border rounded-sm border-secondary  h-6 w-12 text-sm">
            Register
          </button></>)}
        </div>
      </div>
    </div>
  ;
};

const LoginNavbar = () => {
  return <div className="w-full flex py-2 justify-center items-center navbar">
      <div className=" object-contain">
        <Image src={Logo} alt="asd" className="w-fit h-fit" />
      </div>
      <h2 className="text-2xl font-bold text-text">
        <span className="text-primary">Hype</span>Reality
      </h2>
    </div>
}

export default Navbar;
