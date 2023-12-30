"use client"
import DropDownMenu from "./DropDown/DropDownMenu";
import DropDownItem from "./DropDown/DropDownItem";
import {
  AiOutlineProfile,
  AiOutlineLogout,
  AiOutlineMessage,
} from "react-icons/ai";
import { MdNotifications, MdSettingsAccessibility } from "react-icons/md";
import { useNotifications } from "@/utils/useNotifications";
import { NotificationType } from "@/utils/utils";
import { User } from "@/utils";
import { handleLogout } from "@/utils/actions";

export const ProfileDropDown =  ({ user }: { user: User }) => {
  const notificationHandler = useNotifications();  

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
      <DropDownItem href="/" icon={<AiOutlineMessage className="text-2xl" />}>
        Chats
      </DropDownItem>

      <DropDownItem
        href="/"
        handler={async () => {
          await destroySess();
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
