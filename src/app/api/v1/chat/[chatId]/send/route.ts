import { useSession } from "@/utils/session";
import { db } from "@/utils/utils";



export default async function POST(req: Request) {
    const {content, chatRoomId} = await req.json();
    const { getUser } = await useSession();
    const user = await getUser();
    
    const message = await db.message.create({
        data: {
            content,
            chatRoomId,
            userId: user.id,
        },
    });
    });
}