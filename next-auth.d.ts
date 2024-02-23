import { User } from "@prisma/client";
import NextAuth, {DefaultSession} from "next-auth";
import { Account } from "@prisma/client";
declare module 'next-auth' {
    interface Session {
        user: User
    }
    interface Account {
        accessToken: string
    } 
}

declare module 'next-auth/jwt' {
    interface JWT {
        /** OpenID ID Token */
        id?: string,
        accessToken?: string,
    }
     
}