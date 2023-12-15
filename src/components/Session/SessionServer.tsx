import { getServerSession } from "@/utils/session";
import { SessionProvider } from "./SessionContext";
export const SessionServer = async ({children}: {children: React.ReactNode}) => {
    const {user} = await getServerSession();
    return (
       <SessionProvider user={user!}>{children}</SessionProvider>
    );
 };