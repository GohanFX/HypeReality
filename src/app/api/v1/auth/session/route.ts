import { IronOptions } from "@/utils/utils"
import { unsealData } from "iron-session"
import { cookies } from 'next/headers'
export async function GET(req:Request) {
    const hypeCookie = cookies().get(IronOptions.cookieName)?.value;
    const session = hypeCookie ? await unsealData(hypeCookie, IronOptions) : {};

    return Response.json(session)
}