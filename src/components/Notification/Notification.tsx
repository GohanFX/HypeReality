import { useNotifications } from "@/utils/useNotifications";
import { NotificationType } from "@/utils/utils";

import { FaTrash } from "react-icons/fa";

export type NotificationProps = {
  title: string;
  message: string;
  image: any;
  id: number;
  type: NotificationType;
  color?: string;
  trashEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Notification = ({
  title,
  message,
  id,
  image,
  trashEvent
}: NotificationProps) => {
  return (
    <div className="bg-primary w-[97%]  self-stretch flex items-stretch justify-between gap-5 px-2 rounded-xl">
      <div className="flex justify-between gap-1.5 items-start">
        <div className="text-2xl drop-shadow-md text-secondary h-full flex items-center">
          {image}
        </div>
        <div className="self-stretch  leading-5 flex grow basis-[0%] flex-col items-stretch">
          <div className="text-white truncate static drop-shadow-md font-semibold uppercase  text-lg whitespace-nowrap">
            <h2 className="truncate">{title}</h2>
          </div>
          <div className="text-white text-md">
            <p>{message}</p>
          </div>
        </div>
        <div className="shrink place-content-center grow h-full flex items-center">
          <button className="text-secondary" onClick={trashEvent}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};
