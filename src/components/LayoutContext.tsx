"use client"
import { createContext, useState, useContext, useEffect } from "react";
interface LayoutContextState {
    [key: string]: boolean;
};

interface LayoutContextProps {
    Menus: LayoutContextState;
    handleClick: (menu: string) => void;
    getState: (menu: string) => boolean;
};

const Menus: LayoutContextState  = {
    "Profile": false,
    "Settings": false,
    "Notifications": false,
};

const LayoutContext = createContext<LayoutContextProps>({Menus, handleClick: () => {}, getState: () => false});

const useLayout = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error("useLayout must be used within a LayoutProvider");
    }
    return context;
}

const LayoutProvider = ({children}: {children: React.ReactNode}) => {
   
  

    const [isClicked, setIsClicked] = useState<LayoutContextState>(Menus);
    const handleClick = (menu: string) => {
        setIsClicked({...isClicked, [menu]: !isClicked[menu]});
        
    };
    const getState = (menu: string) => {
        return isClicked[menu];
    }

    const handleOutSideClick = (event: React.MouseEvent<HTMLElement>) => {
        if(event.target instanceof HTMLElement) {
            if(!(event.target.id in Menus)) {
                for(let key in isClicked) {
                    setIsClicked({[key]: false});
                }
            }

        }
    };

    return <LayoutContext.Provider value={{Menus, handleClick, getState}}>
        <div onClick={handleOutSideClick}>{children}</div>
    </LayoutContext.Provider>
};

export {LayoutProvider, useLayout};