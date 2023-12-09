
import { IronSessionData, getIronSession } from "iron-session";
import { User } from ".";
import { IronOptions } from "./utils";
import { cookies, headers } from "next/headers";

export const getSession = (req: Request, res: Response) => {
    return getIronSession<User>(req,res, IronOptions)
}


export async function getIronSessionData() {
    return await getIronSession<IronSessionData>(cookies(), IronOptions);
  }