"use client"
import { createContext, useState, useContext, useEffect } from "react";
interface LayoutContextState {
    [key: string]: boolean;
};

interface LayoutContextProps {
    Menus: LayoutContextState;
    setMenuState: (menu: string) => void;
};

const Menus: LayoutContextState  = {
    "Profile": false,
    "Settings": false,
    "Notifications": false,
};

const LayoutContext = createContext<LayoutContextProps>({Menus, setMenuState: (menu: string) => {
    Menus[menu] = !Menus[menu];
}});

const useLayout = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error("useLayout must be used within a LayoutProvider");
    }
    return context;
}

const LayoutProvider = ({children}: {children: React.ReactNode}) => {
    const layout = useLayout();


    return <LayoutContext.Provider value={layout}>
        {children}
    </LayoutContext.Provider>
};

export {LayoutProvider, useLayout};