import DropDownMenu from "./DropDown/DropDownMenu";
import { useLayout } from "./LayoutContext";
import DropDownItem from "./DropDown/DropDownItem";
import { AiOutlineProfile, AiOutlineLogout, AiOutlineMessage } from "react-icons/ai";
import { MdNotifications, MdSettingsAccessibility } from "react-icons/md";
import { useSession } from "./SessionContext";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { Suspense } from "react";


export const ProfileDropDown = ({username}: {username: string}) => {
    const router = useRouter();
    const layout = useLayout();
    return  <DropDownMenu id="Profile" title={`Hello, ${username}`}>
       <DropDownItem href="/profile" icon={<AiOutlineProfile className="text-2xl" />} >Profile</DropDownItem>
        <DropDownItem href="" icon={<MdSettingsAccessibility className="text-2xl" />}>Settings</DropDownItem>
        <DropDownItem href="" icon={<MdNotifications className="text-2xl" />} >Notifications</DropDownItem>
        <DropDownItem href="" icon ={<AiOutlineMessage className="text-2xl" />} >Chats</DropDownItem>
        
            <DropDownItem href="/" handler={async () => {
                await axios.post("/api/v1/auth/logout");
                 router.refresh();

            }} icon={<AiOutlineLogout className="text-2xl" />} >Logout</DropDownItem>  
      
    </DropDownMenu>;
};