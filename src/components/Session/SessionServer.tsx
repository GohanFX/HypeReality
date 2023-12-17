import { getServerSession } from "@/utils/session";
import { SessionProvider } from "./SessionContext";
export const SessionServer = async ({children}: {children: React.ReactNode}) => {
   const {user} = await getServerSession();
   if(!user) {
         return <>{children}</>
   }
    return (
       <SessionProvider user={user!}>{children}</SessionProvider>
    );
 };