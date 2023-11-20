import { PrismaClient } from "@prisma/client";
import { RegisterRequest } from "@/utils";
import { data } from "autoprefixer";
import bcrypt from "bcryptjs"

const prisma = new PrismaClient();


export async function POST(req: Request) {

  const registerInfo: RegisterRequest = await req.json();
  if (registerInfo) {
    console.log(registerInfo.email)
    const emailExists = await prisma.user.findFirst({
      where: {
        email: await registerInfo.email,
      },
    });
    console.log(emailExists)
    if (!emailExists) {
      const user = await prisma.user.create({
        data: {
          email: registerInfo.email,
          username: registerInfo.username,
          password: await bcrypt.hash(registerInfo.password, 10),
        },
      });

      return Response.json(user);
    }

    return Response.json({ 400: "Account already exists with this email!" });
  }
  return Response.json({ 500: "Request body can't be readen" });
}
