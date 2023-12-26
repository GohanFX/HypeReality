import { LoginRequest } from "@/utils";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { IronSessionData, getIronSession } from "iron-session";
import { IronOptions } from "@/utils/utils";
import { cookies } from 'next/headers';
import { useSession } from "@/utils/session";
const prisma = new PrismaClient();

interface descriptionRequest {
    description: string
}

export async function POST(req: Request) {
    const data: descriptionRequest = await req.json();
    const session = useSession();
    const {user, save} = await session.getServerSession();

    if(data.description.length > 320) {
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
    const userData = await prisma.user.findUnique({
        where: {
            id: user.id
        }
    });

    user.description = data.description;
    if(!user) {
        return new Response("No user found", {
            status: 403,
        });
    }
    await prisma.user.update({
        where: {
            id: user.id
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
