"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useLayout } from "@/utils/useLayout";
import {
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";
import { Notification, NotificationProps } from "./Notification";
import { useNotifications } from "@/utils/useNotifications";
export const NotificationBar = ({ state }: { state: boolean }) => {
  
    const notificationHandler = useNotifications();
    const { getState, toggleMenu } = useLayout();
    const [update, setUpdate] = useState<boolean>(false);
    const [showState, setShowState] = useState<boolean>(state);


    const handleClick = () => {
      setShowState(!showState);
      console.log(notificationHandler.getNotifications());
    };

    return (
      <div id="Notifications" className="fixed bottom-0 right-0 text-black">
        <div className="bg-zinc-800 max-h-[500px] start-0  flex w-[260px] flex-col pt-2.5 pb-10 px-2 rounded-t-3xl  ">
          <div className=" self-center flex items-center gap-1.5 px-5">
            <div className="flex sticky top-0 rounded-b-xl text-indigo-50 text-xl grow ">
              Notifications
              <button className="text-2xl" onClick={handleClick}>
                {showState ? (
                  <MdKeyboardDoubleArrowDown />
                ) : (
                  <MdKeyboardDoubleArrowUp />
                )}
              </button>
            </div>
          </div>
          <div className="overflow-y-auto flex-col space-y-2">
            {showState &&
              notificationHandler.getNotifications().map(
                (notification, index) => {
                  return (
                    notification && (
                      <Notification
                        key={index}
                        notificationType={notification.notificationType}
                        id={notification.id}
                        title={notification.title}
                        message={notification.message}
                        trashEvent={(e: React.MouseEvent<HTMLButtonElement>) => {
                          notificationHandler.removeNotification(notification.id);
                          setUpdate(!update);
                        }}
                      />
                    )
                  );
                }
              )}
          </div>
        </div>
      </div>
    );
  
};
