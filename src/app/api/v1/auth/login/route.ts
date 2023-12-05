import { LoginRequest } from "@/utils";
<<<<<<< HEAD
import bcrypt from "bcryptjs";
=======
import bcrypt from "bcryptjs"
>>>>>>> 34d53a0784fd69f5341ed95d37a4fda30d41823c
import { PrismaClient } from "@prisma/client";
import { sealData } from "iron-session";
import { IronOptions } from "@/utils/utils";
const prisma = new PrismaClient();

export async function POST(req: Request) {
<<<<<<< HEAD
  const loginInfo: LoginRequest = await req.json();
  if (!loginInfo) {
    return new Response("Bad Request", {
      status: 400,
    });
  }
  const user = await prisma.user.findFirst({
    where: {
      username: loginInfo.username,
    },
  });
  if (!user) {
    return new Response("Bad Request", {
      status: 401,
    });
  }
  const match = await bcrypt.compare(loginInfo.password, user.password);
  if (!match) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  const encryptedSess = await sealData({ user: user }, IronOptions);
  return new Response(encryptedSess, {
    status: 200,
    headers: {
      "Set-Cookie": `${IronOptions.cookieName}=${encryptedSess}; HttpOnly; Path=/; Max-Age=${IronOptions.cookieOptions.maxAge}; SameSite=${IronOptions.cookieOptions.maxAge};`,
    },
  });
}
=======
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
>>>>>>> 34d53a0784fd69f5341ed95d37a4fda30d41823c
