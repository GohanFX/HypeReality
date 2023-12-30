"use client";
import { MdEdit, MdEditNote } from "react-icons/md";
import { User } from "@/utils";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import ProfileShoeRow from "@/components/ShoeRelateds/ProfileRow";
import { redirect, useRouter } from "next/navigation";
import {  useEffect, useState } from "react";
import { useUploadProfilePicture } from "@/utils/useUploadProfilePicture";


export default function ProfilePageComponent({ user }: { user: User }) {
  const { updatePicture } = useUploadProfilePicture();
  const router = useRouter();
  const [profilePicture, setProfilePicture] = useState<File>();
  const [showMore, setShowMore] = useState(false);
  if (!user) {
    redirect("/");
  }
  const [profilePictureName, setProfilePictureName] = useState<string>(`http://localhost:8080/user/profile/${user.id}`);
  
  const handlePictureChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      setProfilePicture(e.currentTarget.files[0]);
      await updatePicture(e.currentTarget.files[0]);
      setProfilePictureName(profilePictureName+ "?");
    }
  };

  useEffect(() => {
    setProfilePictureName(`http://localhost:8080/user/profile/${user.id}`);
    console.log("WTF");
  }, [profilePicture]);

  const handleProfileAnimationShow = () => {
    const edit = document.getElementById('edit');
    edit!.classList.remove('hidden');
  };
  const handleProfileAnimationExit = () => {
    const edit = document.getElementById('edit');
    edit!.classList.add('hidden');
  };
  const handleProfileClick = () => {
    const input = document.getElementById('pictureUpdate');
    input!.click();
  };
  
  return (
    <div className="w-full h-auto space-y-10">

      <div className="h-auto w-3/4 mx-auto flex items-center justify-center">
        <div className=" w-3/4 place-content-center flex max-md:flex-col max-md:items-stretch  max-md:gap-0">
          <div className="flex flex-col items-stretch md:w-1/3  max-md:ml-0">
            <button
              style={{
                backgroundImage: `url('${profilePictureName}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              onMouseEnter={handleProfileAnimationShow}
              onClick={handleProfileClick}
              onMouseLeave={handleProfileAnimationExit}
              className="border flex w-[300px] shrink-0 max-w-full h-[300px]  place-content-center items-center  hover:bg-slate-300 hover:opacity-60 flex-col mx-auto rounded-[50%] border-solid border-secondary max-md:mt-9"
            >
              <MdEdit id="edit" className="text-6xl hidden text-secondary" />
            </button>
            <input
              multiple={false}
              type="file"
              id="pictureUpdate"
              className="hidden"
              
              onChange={handlePictureChange}
            />
          </div>
          <div className="flex flex-col items-stretch w-[73%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col mt-6 px-5 items-start max-md:max-w-full max-md:mt-10 -space-y-1">
              <div className="self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-stone-900 flex text-6xl font-semibold uppercase grow shrink basis-auto max-md:text-4xl">
                  <div className="flex font-bold gap-4">
                    <span className=" first-letter:text-primary">
                      {user.username}
                    </span>
                    <Link href="/profile/modifie">
                      <button className="  fill-black fill-opacity-0 overflow-hidden shrink-0  self-start">
                        <MdEdit />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-text w-3/4 h-auto text-opacity-60 text-2xl font-light leading-[30px] self-stretch mt-5  max-md:text-4xl max-md:leading-[53px]">
                <p className="w-full h-1/6 text-wrap break-all text-xl">{user.description.slice(0, showMore ? user.description.length : 180)} <span className="hover:underline italic p-2" onClick={() => setShowMore(!showMore)}>Show {showMore ? 'less' : 'more'}..</span></p>
              </div>
            </div>
            <div className="flex space-x-2 text-secondary text-3xl ml-2">
              <FaFacebook />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-background">
        <div className="w-3/5 p-2">
          <ProfileShoeRow />
        </div>
      </div>
    </div>
  );
}
