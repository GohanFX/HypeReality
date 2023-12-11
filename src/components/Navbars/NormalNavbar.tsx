  import { getIronSessionData } from "@/utils/session";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../utils/images/Logo.png";  
import { NavbarItems } from "@/utils/utils";
import { IronSessionData } from "iron-session";
import { useSession } from "../SessionContext";
import DropDownMenu from "../DropDown/DropDownMenu";
import DropDownItem from "../DropDown/DropDownItem";
import { useLayout } from "../LayoutContext";
import { ProfileDropDown } from "../ProfileDropDown";
import { User } from "@/utils";
export const NormalNavbar = async ({user}: {user: User}) => {
    


    return <div className="w-full flex py-2 justify-between items-center navbar">
    <div className="w-1/4 h-2/3 flex p-2 space-x-2">
      <div className=" object-contain">
        <Image src={Logo} alt="asd" height={200} width={100} />
      </div>
      <h2 className="text-secondary m-auto text-xl font-bold">
        <span className="text-primary">Hype</span>Reality
      </h2>
    </div>
    <div className="w-2/4 m-auto text-center">
      <input
        type="text"
        placeholder="Search"
        className="text-accent md:visible invisible w-3/4 outline-0 transition-colors bg-transparent duration-750 border-b  focus:border-secondary"
      />
    </div>
    <div className="w-1/4 flex m-auto  text-secondary ">
      <ul className="list-none space-x-2 md:flex hidden justify-end items-center lg:visible invisible flex-1">
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
  
      
      <div className="flex w-full mx-auto ml-2 space-x-2 ">
        {user ? (<><ProfileDropDown username={`${user.username}`} /></>) : (<><Link href={'/login'}>
          <button className="border rounded-sm border-secondary  h-6 w-12 text-sm">
            Login
          </button>
        </Link>
        <Link href={'/register'}> 
        <button className="border rounded-sm border-secondary  h-6 w-12 text-sm">
          Register
        </button>
        </Link></>)}
      </div>
    </div>
  </div>
  };
  