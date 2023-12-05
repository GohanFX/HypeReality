import { IronOptions } from "@/utils/utils"
import { Shoe } from "@prisma/client";
import { unsealData } from "iron-session"
import { cookies } from 'next/headers'
import { PrismaClient } from "@prisma/client";
import { User } from "@/utils";
import { getSession } from "@/utils/session";
import { NextRequest } from "next/server";
const prisma = new PrismaClient();

export async function POST(req:NextRequest) {
    const hypeCookie = cookies().get(IronOptions.cookieName)?.value;
    const response = new Response();
    const shoe: Shoe = await req.json();
    
    prisma.shoe.create({data: shoe});

    return Response.json(shoe);
}