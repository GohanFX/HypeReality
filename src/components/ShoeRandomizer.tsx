import React from "react";
import Yeezy from "../utils/images/yeezy.png";
import Button from "./Button";
import Image from "next/image";
import { Shoes } from "@/utils/utils";

const ShoeRandomizer = () => {
  let randomNumber = Math.floor(Math.random() * Shoes.length);
  console.log(randomNumber);
  const shoe = Shoes[randomNumber];

  return (
    <div className="w-full font-heading flex place-content-center h-auto">
      <div className="w-5/6 mx-auto justify-between  place-content-center p-3 h-auto bg-gradient-to-tl from-primary hover:bg-gradient-to-tr transition-all duration-150 to-accent rounded-md">
        <h2 className="w-full uppercase content-center font-heebo md:hidden text-center  text-2xl font-bold text-secondary block">
            Shoe Randomizer
          </h2>
        <div className="w-fit h-18 md:h-32 ">
          <h2 className="w-3/5 hidden md:block break-words text-2xl h-32 text-justify text-secondary font-bold">
            Don’t you know what shoe you would like to have? Or you would like
            to pick a shoe randomly?
          </h2>
          
        </div>
        <div className="flex w-full align-middle h-full">
          <div className="block md:flex text-center lg:text-left w-fit h-fit justify-center">
            <div className="w-full place-content-center flex h-full  md:w-1/2 md:h-auto md:flex ">
              <Image
                className="drop-shadow-xl w-4/5 h-4/5  "
                src={shoe.image}
                alt={"?"}
              />
            </div>
            <div className="md:w-1/2 space-y-2">
              <div className="flex space-x-20">
                <h3 className="text-2xl  font-heading font-bold text-secondary ">
                  {shoe.title}
                </h3>{" "}
                <h3 className="text-2xl drop-shadow-lg font-heading text-white font-medium">
                  {shoe.price}
                  <span className="text-secondary">$</span>
                </h3>
              </div>
              <p className="text-lg   font-medium text-secondary opacity-90">
                {shoe.description}
              </p>

              <div className="space-y-2 md:space-y-0 md:flex w-full h-1/3 md:space-x-8">
                <Button title="Add to watchlist" />
                <Button title="Search" />
                <Button title="Randomize" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeRandomizer;
