import { LayoutMenus } from "@/utils/useLayout";
import Navbar from "../Navbars/Navbar";
import { NotificationBar } from "@/components/Notification/NotificationBar";

export const LayoutComponent = ({
  children,
  menuStates,
  clickEvent,
}: {
  children: React.ReactNode;
  menuStates: LayoutMenus;
  clickEvent: React.MouseEventHandler<HTMLElement>;
}) => {
  return (
    <div onClick={clickEvent}>
      <Navbar />
      {children}
      <div className=" relative bottom-0 text-center text-comms h-screen">
        <h3>
          Made by <span className="text-firstPart">Szücs</span> Levente
        </h3>
      </div>
      <NotificationBar state={menuStates["notifications"]} />
    </div>
  );
};
