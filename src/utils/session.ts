<<<<<<< HEAD
import { getIronSession } from "iron-session";
import { User } from ".";
import { IronOptions } from "./utils";
import { cookies, headers } from "next/headers";

export const getSession = (req: Request, res: Response) => {
    return getIronSession<User>(req,res, IronOptions)
}
=======
import { getIronSession, createResponse } from "iron-session";
import { User } from ".";
import { IronOptions } from "./utils";

export const getSession = (req: Request, res: Response) => {
    const session = getIronSession<User>(req,res, IronOptions);

    return session
}

export {createResponse}
>>>>>>> 34d53a0784fd69f5341ed95d37a4fda30d41823c
