import { User } from "@/utils";
import { IronOptions } from "@/utils/utils"
import { unsealData } from "iron-session"
import { cookies } from 'next/headers'
export async function GET(req:Request) {
    const hypeCookie = cookies().get(IronOptions.cookieName)?.value;
    if(!hypeCookie) {
        return new Response("Unauthorized", {
            status: 401,
        });
    }
    
    
    const session = await unsealData<User>(hypeCookie, IronOptions);
    return new Response(JSON.stringify(session), {
        status: 200,
    });
}