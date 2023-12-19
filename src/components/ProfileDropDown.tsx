import DropDownMenu from "./DropDown/DropDownMenu";

import DropDownItem from "./DropDown/DropDownItem";
import {
  AiOutlineProfile,
  AiOutlineLogout,
  AiOutlineMessage,
} from "react-icons/ai";
import { MdNotifications, MdSettingsAccessibility } from "react-icons/md";
import { useSession } from "./Session/SessionContext";
import { useNotifications } from "@/utils/useNotifications";
import { NotificationType } from "@/utils/utils";

export const ProfileDropDown = ({ username }: { username: string }) => {
  const { user, isLoggedIn, setIsLoggedIn, logout } = useSession();
  const notificationHandler = useNotifications();
  
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
          notificationHandler.addNotification({
            title: "Logout",
            message: "Sikeresen kijelentkeztél!",
            notificationType: NotificationType.Message,
            id: notificationHandler.getLastId() + 1,
          });
          
        }}
        icon={<AiOutlineLogout className="text-2xl" />}
      >
        Logout
      </DropDownItem>
    </DropDownMenu>
  );
};
