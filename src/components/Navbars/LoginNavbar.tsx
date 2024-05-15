import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../utils/images/Logo.png";
export const LoginNavbar = () => {
  return (
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
  );
};
