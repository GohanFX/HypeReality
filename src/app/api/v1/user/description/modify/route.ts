import { useSession } from "@/utils/session";
import { db } from "@/utils/utils";

interface descriptionRequest {
    description: string
}

export async function POST(req: Request) {
    const data: descriptionRequest = await req.json();
    const session = useSession();
    const {user, save} = await session.getServerSession();

    if(data.description.length > 600) {
        return new Response("Description too long", {
            status: 400,
        });
    }
    if(!session) {
        return new Response("No session", {
        status: 401,
        });
    }

    if(!user) {
        return new Response("No user in session", {
            status: 402,
        });
    }
    const userData = await db.user.findUnique({
        where: {
            userId: user.userId.toString()
        }
    });

    user.description = data.description;
    if(!user) {
        return new Response("No user found", {
            status: 403,
        });
    }
    await db.user.update({
        where: {
            userId: user.userId.toString()
        },
        data: {
            description: data.description
        }
    });
    await save();
  return new Response("Description modified", {
    status: 200,
  });
}
