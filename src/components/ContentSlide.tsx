"use client";
import { SlideableContent } from "@/utils/contexts";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { animate } from "motion";
import Image from "next/image";
const ContentSlide = () => {
  const [page, setPage] = useState<number>(0);
  const frames = SlideableContent;
  async function downPage() {
    setPage(page != 0 ? page - 1 : frames.length - 1);
    await animate("#page", {
      opacity: 0.0,
      x: -40,
    }, {duration: 1}).finished;
    await animate("#page", {
      opacity: 1.0,
      x: 0,
    }, {duration: 0}).finished;
    
  }
  async function upPage() {
    setPage(page != frames.length - 1 ? page + 1 : 0);
    await animate("#page", {
      opacity: 0.0,
      x: 40,
    }, {duration: 1}).finished;
    await animate("#page", {
      opacity: 1.0,
      x: 0,
    }, {duration: 0}).finished;
    

  }
  return (
    <div className="w-full sm:visible flex z-10">
      <div className="w-32 flex items-center">
          <div className="text-secondary" onClick={downPage}>
            <FaArrowLeft />
          </div>
      </div>
      <div className="w-full p-3">
          <div className="h-[400px] relative  min-w-[250px] w-full bg-gradient-to-tl from-primary  to-accent rounded-md">
            <div className="w-full flex h-full bg-gradient-to-tl from-primary  to-accent rounded-md" id="page">

            </div>

            <div className="absolute flex place-content-center space-x-2 bottom-0 h-8 w-full bg-red">
            {SlideableContent.map((item, index) => {
            return index == page ? <div key={index} className="rounded-full bg-secondary h-3 w-3"></div> : <div key={index} className="rounded-full bg-gray-200 h-3 w-3"></div>;
           })}
            </div>
          </div>

          
      </div>
      <div className="w-32 flex items-center place-content-end">
      <div className="text-secondary" onClick={upPage}>
            <FaArrowRight />
          </div>
      </div>
      
    </div>
  );
};

export default ContentSlide;
