"use client";
import { useLayout } from "@/utils/useLayout";
import { ReactNode, useEffect, useState } from "react";

interface DropDownMenuProps {
  children: ReactNode;
  title: string;
  id: string;
  handler?: void;
  state?: boolean;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  children,
  title,
  id,
  handler,
}: DropDownMenuProps) => {
  const {getState} = useLayout();
  const [isOpened, setIsOpened] = useState<boolean>(getState(id));

  useEffect(() => {
    setIsOpened(getState(id));
  }, [getState(id)]);


  return (
    <div
      onClick={() => handler}
      className="w-full text-lg text-secondary transition-colors"
    >
      <button
        id={id}
        className={`dropdown-toggle  font-normal cursor-pointer hover:text-primary transition-colors duration-500 ${isOpened
            ? "bg-background h-8 w-32 mx-auto rounded-sm text-accent"
            : "bg-transparent mx-auto w-32 h-8"
        }`}
        onClick={() => {setIsOpened(!isOpened)}}
      >
        {title}
      </button>
      {isOpened && (
        <ul className="dropdown-menu  z-20 space-y-1 absolute right-4 w-1/3 md:w-1/6 mt-2 bg-gradient-to-b drop-shadow-md from-slate-200 to-100% to-gray-200  rounded-lg">
          {children}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
