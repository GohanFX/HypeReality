import React from "react";
import Yeezy from "../utils/images/yeezy.png";
import Button from "./Button";
<<<<<<< HEAD
import Image from "next/image";
import { Shoes } from "@/utils/utils";

const ShoeRandomizer = () => {

  let randomNumber = Math.floor(Math.random() * Shoes.length);
  console.log(randomNumber)
  const shoe = Shoes[randomNumber];

=======

const ShoeRandomizer = () => {
>>>>>>> 34d53a0784fd69f5341ed95d37a4fda30d41823c
  return (
    <div className="w-full flex place-content-center h-auto">
      <div className="w-5/6 mx-auto justify-between  place-content-center p-3 h-auto bg-gradient-to-tl from-primary hover:bg-gradient-to-tr transition-all duration-150 to-accent rounded-md">
        <div className="w-fit h-18 md:h-32 ">
          <h2 className="w-3/5 hidden md:block break-words text-2xl h-32 text-justify text-secondary font-bold">
            Don’t you know what shoe you would like to have? Or you would like
            to pick a shoe randomly?
          </h2>
          <h2 className="w-full uppercase font-heebo  text-2xl font-bold text-secondary text-center md:invisible">
            Shoe Randomizer
          </h2>
        </div>
        <div className="flex w-full align-middle h-full">
          <div className="block md:flex text-center lg:text-left w-fit h-fit justify-center">
            <div className="w-full place-content-center flex h-full  md:w-1/2 md:h-auto md:flex ">
<<<<<<< HEAD
              <Image
                className="drop-shadow-xl w-4/5 h-4/5  "
                src={shoe.image}
=======
              <img
                className="drop-shadow-xl w-4/5 h-4/5  "
                src={Yeezy.src}
>>>>>>> 34d53a0784fd69f5341ed95d37a4fda30d41823c
                alt={"?"}
              />
            </div>
            <div className="md:w-1/2 space-y-2">
              <h3 className="text-xl text-secondary font-medium">
<<<<<<< HEAD
                {shoe.title}
              </h3>
              <p className="text-lg text-secondary opacity-90">
                {shoe.description}
=======
                Yeezy Boost 350v2
              </h3>
              <p className="text-lg text-secondary opacity-90">
                A Kanye West neve fémjelezte YEEZY sorozat legkedveltebb
                modellje egyértelműen a Yeezy Boost 350 v2. Sikere töretlen az
                első Beluga megjelenése óta: több tucat színváltozata látott már
                napvilágot: vannak a korábbi, SPLY350 feliratos és az átlátszó
                csíkos, a pull-tabes és a pull tab nélküli változatok, de ami
                mindegyikben megegyezik: a kényelmes Boost talp és a rugalmas
                Primeknit felsőrész.
>>>>>>> 34d53a0784fd69f5341ed95d37a4fda30d41823c
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
