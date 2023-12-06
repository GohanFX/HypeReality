import { LoginRequest } from "@/utils";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { sealData } from "iron-session";
import { IronOptions } from "@/utils/utils";
const prisma = new PrismaClient();

export async function POST(req: Request) {
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
