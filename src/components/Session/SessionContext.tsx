"use client";
import { User } from "@/utils";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
interface SessionContextProps {
    user: User;
    getIsLoggedIn: () => boolean;
    setIsLoggedIn: (value: boolean) => void;
}

const SessionContext = createContext<SessionContextProps>({} as SessionContextProps);

export const useSession = () => {
    const session = useContext(SessionContext);
    return session;
};

export const SessionProvider = ({children, user}: { children: React.ReactNode, user: User }) => {
    
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const getIsLoggedIn = () => {
        return isLoggedIn;
    };

    return <SessionContext.Provider value={{user, getIsLoggedIn, setIsLoggedIn}}>
        {children}
    </SessionContext.Provider>
};

