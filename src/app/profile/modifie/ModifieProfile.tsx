"use client";
import { MdEdit, MdEditNote } from "react-icons/md";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
export default function ModifyPage({user}: {user: User}) {
    const [characters, setScharecters] = useState(user.description!.length);
    const [description, setDescription] = useState(user.description);
    const router = useRouter();
    const handleDescriptionChange = async () => {
        const modifieRequest = await axios.post("/api/v1/user/description/modify", { description: description });
        if(modifieRequest.status === 200) {
            console.log("Sikeresen módosítottad a leírást!");
            router.push("/profile");
            router.refresh();
        }
    };
    const handleTypingIntoDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
        setScharecters(e.target.value.length);
    };
    return (
        <div className="w-full h-auto flex items-center justify-center">
        <div className=" w-3/4 place-content-center flex max-md:flex-col max-md:items-stretch  max-md:gap-0">
        <div className="flex flex-col items-stretch md:w-1/3  max-md:ml-0">
          <div className="border flex w-[300px] shrink-0 max-w-full h-[300px] flex-col mx-auto rounded-[50%] border-solid border-zinc-700 max-md:mt-9" style={{
                backgroundImage: `url('http://localhost:8080/user/profile/${user.userId}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}/>
        </div>
        <div className="flex flex-col items-stretch w-[73%] ml-5 max-md:w-full space-y-2 max-md:ml-0">
          <div className="flex grow flex-col mt-6 px-5 items-start max-md:max-w-full max-md:mt-10 ">
            <div className="self-stretch flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-stone-900 flex text-6xl font-semibold uppercase grow shrink basis-auto max-md:text-4xl">
                <div className="flex font-bold gap-4">
                    <span className=" first-letter:text-primary">{user.username}</span>
                </div>
              </div>
            </div>
            <div className="text-text mb-2 h-auto text-opacity-60 text-xl font-light leading-[30px] self-stretch mt-5  max-md:text-4xl max-md:leading-[53px]">
              <textarea maxLength={600}  className="w-3/4 bg-transparent resize-none focus:bg-transparent border-b overflow-y-hidden border-b-secondary outline-none" onChange={handleTypingIntoDescription} defaultValue={user.description!}/>
              <h3 className="text-sm -mt-2">Legfeljebb 600 karakter {'(Jelenleg: ' + characters + ')'}</h3>
            </div>
            
                <button className="w-1/4 bg-background border font-semibold border-secondary text-secondary h-10 rounded-md" onClick={handleDescriptionChange}>SAVE</button>
            
          </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/648749823de48ef38859435e7069af9686796b91045ece6e12cf7bd718c8a706?"
              className="aspect-[2.23]  object-contain object-center w-[78px] overflow-hidden max-w-full"
            />
        </div>
      </div>
      </div>
    )    
}