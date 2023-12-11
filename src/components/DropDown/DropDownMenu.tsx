"use client"
import React, { ReactNode, useState } from 'react';
import DropDownItem from './DropDownItem';
import { AiFillProfile, AiOutlineLogout, AiOutlineProfile } from 'react-icons/ai';
import { MdNotifications, MdSettingsAccessibility, MdSettingsApplications } from 'react-icons/md';
import { useLayout } from '../LayoutContext';

interface DropDownMenuProps {
    children: ReactNode;
    title: string;
    id?: string;
    handler?:  void;
};

const DropDownMenu: React.FC<DropDownMenuProps> = ({children, title, id, handler}: DropDownMenuProps) => {
    const layout = useLayout();
    const [isOpen, setIsOpen] = useState<boolean>(layout.Menus[id!]);
    const toggleMenu = () => {
        layout.setMenuState(id!);
        setIsOpen(!isOpen);
        
    };

    return (
        <div onClick={() => handler} className="w-full z-20 text-secondary transition-colors">
            <button className={`dropdown-toggle ${isOpen ? "bg-background h-8 w-32 mx-auto rounded-sm" : "bg-transparent mx-auto w-32 h-8"}`} onClick={toggleMenu}>
                {title}
            </button>
            {isOpen && (
                <ul className="dropdown-menu space-y-1 absolute right-0 w-1/3 md:w-1/6 mt-2 bg-gradient-to-b drop-shadow-md from-slate-200 to-100% to-gray-200  rounded-lg">
                    {children}
                </ul>
            )}
        </div>
    );
};

export default DropDownMenu;
