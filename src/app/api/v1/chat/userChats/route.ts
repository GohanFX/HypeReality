import { db } from "@/utils/utils";
import { useSession } from "@/utils/session";


export default async function GET() {
    const { getUser } = useSession();
    const user = await getUser();
    if(!user) return { status: 401, body: { message: "Unauthorized" } }; 
    const chats = await db.user.findUnique({ where: { id: user.id } }).Messages();
    if(!chats) return { status: 404, body: { message: "Not found" } };
    
    return { status: 200, body: { chats } };
}