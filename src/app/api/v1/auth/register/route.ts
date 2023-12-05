import { PrismaClient } from "@prisma/client";
import { RegisterRequest } from "@/utils";
import { data } from "autoprefixer";
import bcrypt from "bcryptjs"

const prisma = new PrismaClient();


export async function POST(req: Request) {
<<<<<<< HEAD
  const registerInfo: RegisterRequest = await req.json();
  if(!registerInfo) {
    return new Response(JSON.stringify({message: "No data provided"}), {status: 400});
  }
  const {username, password, email} = registerInfo;
  const user = await prisma.user.findUnique({
    where: {
      email: email
    }
  });
  if(user) {
    return new Response(JSON.stringify({message: "User already exists"}), {status: 401});
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      username: username,
      email: email,
      password: hashedPassword
    }
  });
  return new Response(JSON.stringify({message: "User created"}), {status: 200});
=======

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
>>>>>>> 34d53a0784fd69f5341ed95d37a4fda30d41823c
}
