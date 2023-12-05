// /middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session";
import { IronOptions } from "./utils/utils";
import { getSession } from "./utils/session";

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  const session = await getSession(req, res);

  // do anything with session here:
  

  // like mutate user:
  // user.something = someOtherThing;
  // or:
  // session.user = someoneElse;

  // uncomment next line to commit changes:
  // await session.save();
  // or maybe you want to destroy session:
  // await session.destroy();

  console.log("from middleware", { session });

  // demo:
  

  return res;
};

