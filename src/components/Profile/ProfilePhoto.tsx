"use client"
import { MouseEventHandler, useState } from "react";
import { MdEdit } from "react-icons/md";

const ProfilePhoto = ({profilePhoto, hoverProfileAnimation, clickProfileEvent, mouseLeaveAnimation }: {profilePhoto: {avatar: string}, hoverProfileAnimation: MouseEventHandler, clickProfileEvent: MouseEventHandler, mouseLeaveAnimation: MouseEventHandler}) => {
    const pht = {
        avatar: profilePhoto.avatar
    };
     console.log(profilePhoto === pht)


    return (<button
        style={{
          backgroundImage: `url('${profilePhoto.avatar}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        onMouseEnter={hoverProfileAnimation}
        onClick={clickProfileEvent}
        onMouseLeave={mouseLeaveAnimation}
        className="border flex w-[300px] shrink-0 max-w-full h-[300px]  place-content-center items-center  hover:bg-slate-300 hover:opacity-60 flex-col mx-auto rounded-[50%] border-solid border-secondary max-md:mt-9"
      >
        <MdEdit id="edit" className="text-6xl outline-6 outline-red hidden text-secondary" />
      </button>)
};

export default ProfilePhoto