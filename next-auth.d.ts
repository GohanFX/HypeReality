
import { Shoe, User } from "@prisma/client";
import NextAuth from "next-auth/next";
declare module 'next-auth' {
    interface Session {
        accessToken: string
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