"use client";
import { User } from "@/utils";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

interface SessionContextProps {
    user: User;
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
    logout:  () => void;
}

const SessionContext = createContext<SessionContextProps>({} as SessionContextProps);

export const useSession = () => {
    const session = useContext(SessionContext);
    return session;
};

export const SessionProvider = ({children, user}: { children: React.ReactNode, user: User }) => {
    const [userState, setUserState] = useState<User | undefined>({} as User);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    
    useEffect(() => {
        setIsLoggedIn(user ? true : false);
        setUserState(user);
    }, [user]);
    const logout = async () => {
        setIsLoggedIn(false);
        setUserState({} as User);
        await axios.post("/api/v1/auth/logout");
    };

    const data: SessionContextProps = {
        user: userState!,
        isLoggedIn,
        setIsLoggedIn,
        logout,
    }


    return <SessionContext.Provider value={data}>
        {children}
    </SessionContext.Provider>
};

