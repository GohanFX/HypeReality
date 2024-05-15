import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ShoeCard from "./ShoeCard";
import { ShoeFrames } from "@/utils/contexts";


const ProfileShoeRow = () => {
  const shoes = ShoeFrames;
  return (
    <div id="row" className="flex flex-wrap h-100 w-full text-comms ">
      <div className=" w-auto  place-content-center justify-center">
        <div className=" w-full flex flex-col items-center justify-center  font-semibold space-y-2">
          <div className="flex text-3xl font-bold font-heading uppercase w-full justify-between">
            <h2 className="text-text ">My Wish List</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6  ">
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
