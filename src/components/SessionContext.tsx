"use client";
import { User } from "@/utils";
import { IronSessionData } from "iron-session";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
interface SessionContextProps {
    user: User;
}

const SessionContext = createContext<SessionContextProps>({} as SessionContextProps);

export const useSession = () => {
    const session = useContext(SessionContext);
    return session;
};

export const SessionProvider = async ({children, user}: { children: React.ReactNode, user: User }) => {

    return <SessionContext.Provider value={{user}}>
        {children}
        </SessionContext.Provider>
};

