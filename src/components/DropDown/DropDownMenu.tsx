"use client";
import { useClickOutside } from "@/utils/useClickOut";
import { useLayout } from "@/utils/useLayout";
import { ReactNode, useEffect, useRef, useState } from "react";

interface DropDownMenuProps {
  children: ReactNode;
  title: string;
  id: string;
  handler?: void;
  isActive?: boolean;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  children,
  title,
}: DropDownMenuProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const dropDown = useClickOutside(() => 
    setIsOpened(false)
  );

  return (
    <div
      className="w-full text-lg text-secondary transition-all  duration-300 hover:text-primary "
    >
      <button
        name="dropdownStarter"
        onClick={() => {
          setIsOpened((isOpen) => !isOpen)
        }}
        className={`dropdown-toggle  font-normal cursor-pointer hover:text-primary transition-colors rounded-lg duration-500 ${isOpened
            ? "bg-background h-8 w-32 mx-auto rounded-sm text-accent"
            : "bg-transparent mx-auto w-32 h-8"
        }`}
        
      >
        {title}
      </button>
      {isOpened && (
        <ul ref={dropDown} className="dropDown duration-300 ease-in-out z-20 space-y-1 absolute right-4 w-1/3 md:w-1/6 mt-2 bg-gradient-to-b drop-shadow-md from-slate-200 to-100% to-gray-200  rounded-lg">
          {children}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;
