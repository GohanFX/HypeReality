import { LoginRequest } from "@/utils";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { IronSessionData, getIronSession } from "iron-session";
import { IronOptions } from "@/utils/utils";
import { cookies } from 'next/headers';
const prisma = new PrismaClient();

interface descriptionRequest {
    description: string
}

export async function POST(req: Request) {
    const data: descriptionRequest = await req.json();
  const session = await getIronSession<IronSessionData>(cookies(), IronOptions);

    if(!session) {
        return new Response("No session", {
        status: 401,
        });
    }

    if(!(session.user)) {
        return new Response("No user in session", {
            status: 402,
        });
    }
    const user = await prisma.user.findUnique({
        where: {
            id: session.user.id
        }
    });

    session.user.description = data.description;
    if(!user) {
        return new Response("No user found", {
            status: 403,
        });
    }
    await prisma.user.update({
        where: {
            id: session.user.id
        },
        data: {
            description: data.description
        }
    });
    await session.save();
  return new Response("Description modified", {
    status: 200,
  });
}
