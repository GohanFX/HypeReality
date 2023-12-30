
import { IronSessionData, getIronSession } from "iron-session";
import { User } from ".";
import { IronOptions } from "./utils";
import { cookies, headers } from "next/headers";


export const useSession = () => {
    
    const getSession = (req: Request, res: Response) => {
        return getIronSession<User>(req,res, IronOptions)
    }
    
    
    async function getIronSessionData() {
        return await getIronSession<IronSessionData>(cookies(), IronOptions);
    }
    
    async function logout() {
        const session = await getIronSessionData();
        await session.destroy();
    }
    
    const getServerSession = async () => {
        const session = await getIronSessionData();
        return session;
    };
    const isLoggedIn = async () => {
        return await getIronSessionData() !== undefined;
    };
    const getUser = async () => {
        return (await getIronSessionData()).user;
    }
    return {
        getSession,
        getUser,  
        getServerSession,
        isLoggedIn,
        logout,
    };
};