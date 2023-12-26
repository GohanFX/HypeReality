import { PrismaClient } from "@prisma/client";
import { RegisterRequest } from "@/utils";
import { data } from "autoprefixer";
import bcrypt from "bcryptjs"
import fs from "fs";
const prisma = new PrismaClient();


export async function POST(req: Request) {
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
  const desc: string = "";
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      description: desc,
      username: username,
      email: email,      
      password: hashedPassword
    }
  });
  return new Response(JSON.stringify({message: "User created"}), {status: 200});
}
