import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/utils/utils";
import { LoginRequest } from "@/utils";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import bcrypt from "bcryptjs";
export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials, req) {
                if(!credentials?.email || !credentials?.password) throw new Error('Invalid credentials');

                const user = await db.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });
                if(!user || !user.password) throw new Error('Invalid credentials');

                const isValid = await bcrypt.compare(credentials.password, user.password);
                if(!isValid) throw new Error('Invalid credentials');

                return user;
            },
        }),
    ],
    pages: {
        signIn: "/login",
        signOut: "/logout",
        error: "/auth/error",
        newUser: "/register",
    },
    session: {
        strategy: "jwt",
    },
   
};

export default NextAuth(authOptions);