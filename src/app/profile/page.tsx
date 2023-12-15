"use client";
import { useSession } from "@/components/Session/SessionContext";
import { ShoeFrames } from "@/utils/utils";
import { redirect } from "next/navigation";
import { MdEdit, MdEditNote } from "react-icons/md";

export default function ProfilePage() {
  const { user } = useSession();
  if (!user) {
    redirect("/");
  }

  return (
    <div className="w-full h-auto flex items-center justify-center">
    <div className=" w-3/4 place-content-center flex max-md:flex-col max-md:items-stretch  max-md:gap-0">
    <div className="flex flex-col items-stretch md:w-1/3  max-md:ml-0">
      <div className="border flex w-[300px] shrink-0 max-w-full h-[300px] flex-col mx-auto rounded-[50%] border-solid border-zinc-700 max-md:mt-9" />
    </div>
    <div className="flex flex-col items-stretch w-[73%] ml-5 max-md:w-full max-md:ml-0">
      <div className="flex grow flex-col mt-6 px-5 items-start max-md:max-w-full max-md:mt-10 -space-y-1">
        <div className="self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="text-stone-900 flex text-6xl font-semibold uppercase grow shrink basis-auto max-md:text-4xl">
           
            <div className="flex font-bold gap-4"><span className=" first-letter:text-primary">{user.username}</span>
              <button className="  fill-black fill-opacity-0 overflow-hidden shrink-0  self-start">
                <MdEdit/>
              </button>
            </div>
          
          </div>
        </div>
        <div className="text-text w-3/4 text-opacity-60 text-2xl font-light leading-[30px] self-stretch mt-5  max-md:text-4xl max-md:leading-[53px]">
          {user.description}
        </div>
      </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/648749823de48ef38859435e7069af9686796b91045ece6e12cf7bd718c8a706?"
          className="aspect-[2.23]  object-contain object-center w-[78px] overflow-hidden max-w-full"
        />
    </div>
  </div>
  </div>
  );
}
