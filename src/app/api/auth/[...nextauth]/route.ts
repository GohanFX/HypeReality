import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/utils/utils";
import { LoginRequest } from "@/utils";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
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
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
          console.log(credentials)
        if (
          !(!credentials?.username || !credentials?.email) ||
          !credentials?.password 
          
        )
          throw new Error("Invalid credentials");
        const user = await db.user.findFirst({
          where: {
            OR: [
              { email: credentials.email },
              { username: credentials.username },
            ],
          },
        });

        if (!user || !user.password) throw new Error("Invalid credentials");

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error("Invalid credentials");

        return user;
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      session.user.id = token.id!;
      console.log({xd: session});
      return session;
    },
    jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.accessToken!;
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET!,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
