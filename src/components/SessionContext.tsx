"use client"
import { User } from "@/utils";
import { IronSessionData } from "iron-session";
import { createContext, useContext, useState } from "react";

interface SessionContextProps {
    user: User;
    setSession: (session: User) => void;
}

const SessionContext = createContext<SessionContextProps>({} as SessionContextProps);

export const useSession = () => {
    const session = useContext(SessionContext);
    return session;
};

export const SessionProvider = ({children, user}: { children: React.ReactNode, user: User }) => {
    const [session, setSession] = useState<User>(user);
    

    return <SessionContext.Provider value={{user, setSession}}>
        {children}
        </SessionContext.Provider>
};

