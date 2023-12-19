import { NotificationProps } from "@/components/Notification/Notification";
import { NotificationType, Notifications } from "./utils";
import { useEffect, useState } from "react";

export const useNotifications = () => {
    const [notifications, setNotifications] = useState<NotificationProps[]>([]);
    if(typeof window !== "undefined") {
        useEffect(() => {
            const notificationString = localStorage.getItem("notifications");
            if (notificationString) {
                const notificList = JSON.parse(notificationString);
                setNotifications(notificList);
            }
        }, [localStorage.getItem("notifications")]);    
    }

    

    const getLastId = () => {
        if (notifications.length === 0) {
            return 0;
        }
        return notifications[notifications.length - 1].id;
    };

    const addNotification = (notification: NotificationProps) => {
        const updatedNotifications = [...notifications, notification];
        setNotifications(updatedNotifications);
        localStorage.setItem("notifications", JSON.stringify(updatedNotifications));
    };

    const loadDefaultNotifications = () => {
        Notifications.forEach((notification) => {
            addNotification(notification);
        });
    };

    const getNotifications = () => {
        return notifications;
    };

    const removeNotification = (id: number) => {
        const updatedNotifications = notifications.filter((notiElement) => notiElement.id !== id);
        setNotifications(updatedNotifications);
        localStorage.setItem("notifications", JSON.stringify(updatedNotifications));
    };

    const removeAllNotifications = () => {
        const updatedNotifications: NotificationProps[] = [];
        setNotifications(updatedNotifications);
        localStorage.setItem("notifications", JSON.stringify(updatedNotifications));
    };

    return {
        addNotification,
        loadDefaultNotifications,
        getNotifications,
        getLastId,
        removeNotification,
        removeAllNotifications
    };
};