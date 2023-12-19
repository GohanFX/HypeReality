"use client";
import { MdEdit, MdEditNote } from "react-icons/md";
import { User } from "@/utils";
import Yeezy from "@/utils/images/Yeezy.png";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
export default function HomePage({user}: {user: User}) {

  const handleProfileAnimationShow = () => {
    const edit = document.getElementById("edit");
    edit!.classList.remove("hidden");
  };

  const handleProfileAnimationExit = () => {
    const edit = document.getElementById("edit");
    edit!.classList.add("hidden");
  };
    return (
        <div className="w-full h-auto mx-auto flex items-center justify-center">
        <div className=" w-3/4 place-content-center flex max-md:flex-col max-md:items-stretch  max-md:gap-0">
        <div className="flex flex-col items-stretch md:w-1/3  max-md:ml-0">
          <button style={
            {
              backgroundImage: `url(${Yeezy.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }
          
          } onMouseEnter={handleProfileAnimationShow} onMouseLeave={handleProfileAnimationExit} className="border flex w-[300px] shrink-0 max-w-full h-[300px]  place-content-center items-center  hover:bg-slate-300 hover:opacity-60 flex-col mx-auto rounded-[50%] border-solid border-secondary max-md:mt-9" >
            
            <MdEdit id="edit" className="text-6xl hidden text-secondary"/>
            
          </button>

        </div>
        <div className="flex flex-col items-stretch w-[73%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col mt-6 px-5 items-start max-md:max-w-full max-md:mt-10 -space-y-1">
            <div className="self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-stone-900 flex text-6xl font-semibold uppercase grow shrink basis-auto max-md:text-4xl">
               
                <div className="flex font-bold gap-4"><span className=" first-letter:text-primary">{user.username}</span>
                  <Link href="/profile/modifie">
                  <button className="  fill-black fill-opacity-0 overflow-hidden shrink-0  self-start">
                    <MdEdit/>
                  </button>
                  </Link>
                </div>
              
              </div>
            </div>
            <div className="text-text w-3/4 h-auto text-opacity-60 text-2xl font-light leading-[30px] self-stretch mt-5  max-md:text-4xl max-md:leading-[53px]">
              <p className="w-full h-auto break-words">{user.description}</p>
            </div>
          </div>
            <div className="flex space-x-2 text-secondary text-3xl ml-2">
            <FaFacebook />
            <FaInstagram />
            </div>
        </div>
      </div>
      </div>
    )    
}