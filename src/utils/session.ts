import { getIronSession, createResponse } from "iron-session";
import { User } from ".";
import { IronOptions } from "./utils";

export const getSession = (req: Request, res: Response) => {
    const session = getIronSession<User>(req,res, IronOptions);

    return session
}

export {createResponse}