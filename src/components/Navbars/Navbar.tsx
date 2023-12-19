"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../utils/images/Logo.png";
import { IronOptions, NavbarItems } from "@/utils/utils";
import { it } from "node:test";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { User } from "@/utils";
import { getIronSessionData } from "@/utils/session";
import { headers } from "next/headers";
import { NormalNavbar } from "./NormalNavbar";
import { IronSessionData } from "iron-session";
import { useSession } from "../Session/SessionContext";

const Navbar = () => {
  const path = usePathname();
  const { isLoggedIn, user } = useSession();
  switch (path) {
    case "/login":
      return <LoginNavbar />;
    case "/register":
      return <LoginNavbar />;
    default:
      return <NormalNavbar />;
  }
};

const LoginNavbar = () => {
  return (
    <>
      <div className="w-full font-heading  flex cursor-pointer py-2 justify-center items-center navbar">
        <Link href={"/"} className="flex items-center">
          <div className=" object-fit">
            <Image src={Logo} alt="asd" className="w-fit h-fit " />
          </div>
          <h2 className="text-2xl font-bold font-heading text-text ">
            <span className="text-primary">Hype</span>Reality
          </h2>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
