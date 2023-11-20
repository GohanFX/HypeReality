import { ShoeFrame } from "@/utils/utils";
import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import {MdInfoOutline} from 'react-icons/md'
import {AiFillHeart} from 'react-icons/ai'
const ShoeCard = (card: ShoeFrame) => {
  return (
    <div className="h-[250px] w-48 md:w-52 lg:w-56 rounded-md bg-[#e7ecf3]">
      <div className="w-full container  justify-between h-32 flex items-center place-content-center  mx-auto">
        <div className="w-full ">
          
          <img className="drop-shadow-xl mr-2 w-3/4 h-3/4 mx-auto "  src={card.banner.src} alt={"?"} />
        </div>
        <span 
         className=" text-text items-start h-full   p-2 relative top-2 right-1 justify-end flex ">
            <AiOutlineHeart  />
          </span>
      </div>
      <div className=" inline-flex w-full">
        <div className="w-full p-2">
          <h1 className="font-bold text-text truncate">{card.ShoeName}</h1>
          <h2 className="text-secondary text-lg opacity-alts">{card.Seller}</h2>
        </div>
        <div className="relative text-text top-3 right-3 "><MdInfoOutline /></div>
      </div>
      <div className="w-full p-1 flex space-x-2">
        <button className="w-1/2 bg-transparent transition-colors hover:bg-loginButton duration-300 hover:text-white border h-8 border-secondary text-sm font-light rounded-sm text-black">Contact</button>
        <button className="w-1/2 bg-primary border h-8  text-sm rounded-md text-white font-ligh">View</button>
      </div>
    </div>
  );
};

export default ShoeCard;
