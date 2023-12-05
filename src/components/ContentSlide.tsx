"use client";
import { SlideableContent } from "@/utils/utils";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const ContentSlide = () => {
  const [page, setPage] = useState<number>(0);
  const frames = SlideableContent;
  function downPage() {
    setPage(page != 0 ? page - 1 : frames.length - 1);
  }
  function upPage() {
    setPage(page != frames.length - 1 ? page + 1 : 0);
  }
  return (
    <div className="w-full sm:visible flex">
      <div className="w-32 flex items-center">
          <div className="text-secondary" onClick={downPage}>
            <FaArrowLeft />
          </div>
      </div>
      <div className="w-full p-3">
          <div className="h-[400px] relative  min-w-[250px] w-full bg-gradient-to-tl from-primary  to-accent rounded-md">
          

            <div className="absolute flex place-content-center space-x-2 bottom-0 h-8 w-full bg-red">
            {SlideableContent.map((item, index) => {
<<<<<<< HEAD
            return index == page ? <div key={index} className="rounded-full bg-secondary h-3 w-3"></div> : <div key={index} className="rounded-full bg-gray-200 h-3 w-3"></div>;
=======
            return index == page ? <div className="rounded-full bg-secondary h-3 w-3"></div> : <div className="rounded-full bg-gray-200 h-3 w-3"></div>;
>>>>>>> 34d53a0784fd69f5341ed95d37a4fda30d41823c
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
