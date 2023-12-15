"use client"
import { getIronSessionData } from "@/utils/session";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../utils/images/Logo.png";
import { NavbarItems } from "@/utils/utils";
import { IronSessionData } from "iron-session";
import { useSession } from "../Session/SessionContext";
import DropDownMenu from "../DropDown/DropDownMenu";
import DropDownItem from "../DropDown/DropDownItem";
import { useLayout } from "../LayoutContext";
import { ProfileDropDown } from "../ProfileDropDown";
import { User } from "@/utils";
export const NormalNavbar = async () => {
  const {user, getIsLoggedIn} = useSession();
  return (
    <div className="w-full flex py-2 font-heading justify-between items-center navbar">
      <div className="w-1/4 h-2/3 flex p-2 space-x-2">
        <Link href={"/"} className="flex">
          <div className=" object-contain">
            <Image src={Logo} alt="asd"  />
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
      <div className="w-1/6 flex m-auto   text-secondary ">
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

        <div className="flex  mx-auto ml-2 space-x-2 ">
          {getIsLoggedIn() ? (
            <>
              <ProfileDropDown username={`${user.username}`} />
            </>
          ) : (
            <>
              <Link href={"/login"}>
                <button className="border rounded-sm border-secondary w-16 p-1 text-md">
                  Login
                </button>
              </Link>
              <Link href={"/register"}>
                <button className="border rounded-sm border-secondary p-1  w-16 text-md">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
