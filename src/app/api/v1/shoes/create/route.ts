import { IronOptions } from "@/utils/contexts";
import { Shoe } from "@prisma/client";
import { unsealData } from "iron-session";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";
import { User } from "@/utils";
import { NextRequest } from "next/server";
import { db } from "@/utils/utils";

export async function POST(req: NextRequest) {
  const hypeCookie = cookies().get(IronOptions.cookieName)?.value;
  const response = new Response();
  const shoe: Shoe = await req.json();

  await db.shoe.create({ data: shoe });

  return Response.json(shoe);
}
