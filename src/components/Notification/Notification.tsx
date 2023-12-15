import { NotificationType } from "@/utils/utils";
import { type } from "os";
import { FaTrash } from "react-icons/fa";

export type NotificationProps = {
  title: string;
  message: string;
  image: any;
  id: number;
  type: NotificationType;
  color?: string;
};


export const Notification = ({
  title,
  message,
  id,
  image,
}: NotificationProps) => {
  return (
     <div className="bg-primary w-[97%]  self-stretch flex items-stretch justify-between gap-5 px-2 rounded-xl">
        <div className="flex justify-between gap-1.5 items-start">
          <div className="text-2xl drop-shadow-md text-secondary h-full flex items-center">
            {image}
          </div>
          <div className="self-stretch  leading-5 flex grow basis-[0%] flex-col items-stretch">
            <div className="text-white drop-shadow-md font-semibold uppercase truncate text-lg whitespace-nowrap">
              {title}
            </div>
            <div className="text-white text-md">
              {message}
            </div>
          </div>
          <div className="shrink place-content-center grow h-full flex items-center">
              <button className="text-secondary"><FaTrash /></button>
          </div>
        </div>
        
    </div>
  );
};
