import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ShoeCard from "./ShoeCard";
import { ShoeFrames } from "@/utils/utils";


const ProfileShoeRow = () => {
  const shoes = ShoeFrames;
  return (
    <div id="row" className="flex flex-wrap  h-100 w-full text-comms place-content-center ">
      <div className="w-5/6">
        <div className=" w-full  font-semibold space-y-2">
          <div className="flex text-3xl font-bold font-heading uppercase w-full justify-between">
            <h2 className="text-text ">My Wish List</h2>
          </div>
          <div className="flex flex-wrap pb-1 snap-x overflow-x-auto row gap-4  w-full  ">
            {shoes.map((item, index) => {
              return item.ShoeName.includes("") ?  <div  key={index} className=""><ShoeCard  {...item} /></div> : <></>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileShoeRow;
