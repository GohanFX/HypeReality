import { User } from "@/utils";
import { getSession } from "@/utils/session";
import { IronOptions } from "@/utils/utils";
import { getIronSession, unsealData } from "iron-session";
import { cookies } from "next/headers";

export async function POST(req: Request) {
    const sess = await getIronSession<User>(cookies(), IronOptions);
    await sess.destroy();

    return new Response("OK", {
        status: 200,
    });
}

export async function GET(req: Request) {
    const sess = await getIronSession<User>(cookies(), IronOptions);
    await sess.destroy();

    return new Response("OK", {
        status: 200,
    });
}