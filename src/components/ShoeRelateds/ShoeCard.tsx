import { ShoeFrame } from "@/utils/contexts";
import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import {MdInfoOutline} from 'react-icons/md'
import {AiFillHeart} from 'react-icons/ai'
const ShoeCard = (card: ShoeFrame) => {
  return (
    <div className="h-[250px] font-heading w-48 md:w-52 lg:w-56 transition rounded-md hover:drop-shadow-sm bg-[#e7ecf3]">
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
      <div className="w-full p-1 flex space-x-2 ">
        <button className="w-1/2 text-[1.0rem] bg-primary border h-8 tracking-[1px]  rounded-md text-white ">Contact</button>
        <button className="w-1/2 text-[1.0rem] bg-transparent border hover:bg-accent transition duration-200 hover:border-0 hover:text-white border-secondary rounded-md text-text  ">View</button>
      </div>
    </div>
  );
};

export default ShoeCard;
