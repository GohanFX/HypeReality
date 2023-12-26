import { SessionProvider } from "./SessionContext";
import { useSession } from "../../utils/session";
export const SessionServer = async ({children}: {children: React.ReactNode}) => {
   const session = useSession();
   if(!session.isLoggedIn()) {
         return <>{children}</>
   }
    return (
       <SessionProvider user={((await session.getServerSession()).user!)}>{children}</SessionProvider>
    );
 };