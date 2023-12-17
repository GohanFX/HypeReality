import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ShoeCard from "./ShoeCard";
import { ShoeFrames } from "@/utils/utils";

interface RowParameters {
  title: string,
  filter: string | "",
}

const ShoeRow = ({title, filter}: RowParameters) => {
  const shoes = ShoeFrames;
  return (
    <div id="row" className="flex flex-wrap  h-100 w-full text-comms place-content-center ">
      <div className="w-5/6">
        <div className=" w-full  font-semibold space-y-2">
          <div className="flex w-full justify-between">
            <h2 className="text-text">{title}</h2>
            <h2 className="flex transition  duration-700  hover:translate-x-2  cursor-pointer">
              <span className=" text-primary">More</span>{" "}
              <span className="pt-1 text-text">
                <AiOutlineArrowRight />
              </span>
            </h2>
          </div>

          <div className="flex  pb-1  md:space-x-16 space-x-2 snap-x overflow-x-auto row gap-0  w-full  ">
            {shoes.map((item, index) => {
              return item.ShoeName.includes(filter) ?  <div  key={index} className=""><ShoeCard  {...item} /></div> : <></>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeRow;
