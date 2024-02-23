"use client"
import DropDownMenu from "./DropDown/DropDownMenu";
import DropDownItem from "./DropDown/DropDownItem";
import {
  AiOutlineProfile,
  AiOutlineLogout,
  AiOutlineMessage,
} from "react-icons/ai";
import { MdNotifications, MdSettingsAccessibility } from "react-icons/md";

import { handleLogout } from "@/utils/actions";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

export const ProfileDropDown =  ({ user }: { user: User }) => {


  async function destroySess() {
    await handleLogout();
  };

  return (
    <DropDownMenu id="profile" title={`Hello, ${user? user.username : ''}`}>
      <DropDownItem
        href="/profile"
        icon={<AiOutlineProfile className="text-2xl" />}
      >
        Profile
      </DropDownItem>
      <DropDownItem
        href="/"
        icon={<MdSettingsAccessibility className="text-2xl" />}
      >
        Settings
      </DropDownItem>
      <DropDownItem href="/" icon={<MdNotifications className="text-2xl" />}>
        Notifications
      </DropDownItem>
      <DropDownItem href="/chats" icon={<AiOutlineMessage className="text-2xl" />}>
        Chats
      </DropDownItem>

      <DropDownItem
        href="/"
        handler={async () => 
          signOut()
        }
        icon={<AiOutlineLogout className="text-2xl" />}
      >
        Logout
      </DropDownItem>
    </DropDownMenu>
  );
};
