import { LoginRequest } from "@/utils";
import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client";
import { sealData } from "iron-session";
import { IronOptions } from "@/utils/utils";
const prisma = new PrismaClient();

export async function POST(req: Request) {
    const loginInfo: LoginRequest = await req.json();
    const user = await prisma.user.findFirst({
        where: {
            username: loginInfo.username
        }
    });
    const match = await bcrypt.compare(loginInfo.password, user!.password);
    console.log(match)
    if(match) {
        const encryptedSess =  await sealData({user: user}, IronOptions)
        return new Response('ok', {
            status: 200,
            headers: {
                'Set-Cookie': `${IronOptions.cookieName}=${encryptedSess}`
            }
        })
    }
    return Response.json({400: "Unauthorized"})
}