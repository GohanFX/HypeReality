import DropDownMenu from "./DropDown/DropDownMenu";

import DropDownItem from "./DropDown/DropDownItem";
import {
  AiOutlineProfile,
  AiOutlineLogout,
  AiOutlineMessage,
} from "react-icons/ai";
import { MdNotifications, MdSettingsAccessibility } from "react-icons/md";
import { useSession } from "./Session/SessionContext";
import { useRouter } from "next/navigation";
import axios from "axios";

export const ProfileDropDown = ({ username }: { username: string }) => {
  const router = useRouter();
  const { user, isLoggedIn, setIsLoggedIn, logout } = useSession();
  return (
    <DropDownMenu id="profile" title={`Hello, ${username? username : ''}`}>
      <DropDownItem
        href="/profile"
        icon={<AiOutlineProfile className="text-2xl" />}
      >
        Profile
      </DropDownItem>
      <DropDownItem
        href=""
        icon={<MdSettingsAccessibility className="text-2xl" />}
      >
        Settings
      </DropDownItem>
      <DropDownItem href="" icon={<MdNotifications className="text-2xl" />}>
        Notifications
      </DropDownItem>
      <DropDownItem href="" icon={<AiOutlineMessage className="text-2xl" />}>
        Chats
      </DropDownItem>

      <DropDownItem
        href="/"
        handler={async () => {
          await logout();
        }}
        icon={<AiOutlineLogout className="text-2xl" />}
      >
        Logout
      </DropDownItem>
    </DropDownMenu>
  );
};
