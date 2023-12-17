import { NotificationProps } from "@/components/Notification/Notification";
import { NotificationType, Notifications } from "./utils";
import { useEffect, useState } from "react";

export const useNotifications = () => {
    const [notifications, setNotifications] = useState<NotificationProps[]>(Notifications);
   
    const addNotification = (notification: NotificationProps) => {
        notifications.push(notification);
        setNotifications(notifications);
    };
    const loadDefaultNotifications = () => {
        Notifications.map((notification) => {
            notifications.push(notification);

        });
    };
    const getNotifications = () => {
        return notifications;
    };
    const removeNotification = (id: number) => {
        const index = notifications.findIndex((notiElement) => notiElement.id === id);
        notifications.splice(index, 1);
       
    };
    const removeAllNotifications = () => {
        notifications.splice(0, notifications.length);
        setNotifications(notifications);
        
    };

    return {
        addNotification,
        loadDefaultNotifications,
        getNotifications,
        removeNotification,
        removeAllNotifications
    }
};