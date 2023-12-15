"use client";

import { AiFillNotification } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useLayout } from "../LayoutContext";
import { MdKeyboardDoubleArrowUp, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Notifications } from "@/utils/utils";
import { Notification, NotificationProps } from "./Notification";

export const NotificationBar = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpened, setIsOpened] = useState<boolean>(false); 
  const { getState, handleClick } = useLayout();
  const [showNotifications, setShowNotifications] = useState<boolean>(
    getState("notifications")
  );

  return (
    <div
      id="Notifications"
      className=" sticky bottom-0 h-1/2 text-black w-full justify-end flex"
    >
        
      <div className="bg-zinc-800 max-h-[500px]  flex w-[260px] flex-col pt-2.5 pb-10 px-2 rounded-t-3xl  right-0 sticky">
        <div className=" self-center flex items-center gap-1.5 px-5">
          <div className="flex sticky top-0 rounded-b-xl text-indigo-50 text-xl grow ">
            Notifications
            <button className="text-2xl" onClick={() => setIsOpened(!isOpened)}>
                {isOpened ? <MdKeyboardDoubleArrowDown /> : <MdKeyboardDoubleArrowUp />}
              
            </button>
          </div>
        </div>
        <div className="overflow-y-auto flex-col space-y-2">
          {isOpened && Notifications.map((notification, index) => {
            return (
              <Notification
                key={index}
                image={notification.image}
                id={notification.id}
                title={notification.title}
                type={notification.type}
                message={notification.message}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

