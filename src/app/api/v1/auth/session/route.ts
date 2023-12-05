<<<<<<< HEAD
import { User } from "@/utils";
=======
>>>>>>> 34d53a0784fd69f5341ed95d37a4fda30d41823c
import { IronOptions } from "@/utils/utils"
import { unsealData } from "iron-session"
import { cookies } from 'next/headers'
export async function GET(req:Request) {
    const hypeCookie = cookies().get(IronOptions.cookieName)?.value;
<<<<<<< HEAD
    if(!hypeCookie) {
        return new Response("Unauthorized", {
            status: 401,
        });
    }
    const session = await unsealData<User>(hypeCookie, IronOptions);

    

    return new Response(JSON.stringify(session), {
        status: 200,
    });
=======
    const session = hypeCookie ? await unsealData(hypeCookie, IronOptions) : {};

    return Response.json(session)
>>>>>>> 34d53a0784fd69f5341ed95d37a4fda30d41823c
}