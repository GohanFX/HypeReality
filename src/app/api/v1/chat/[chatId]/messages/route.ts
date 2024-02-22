export const dynamic = 'force-dynamic'

import { db } from "@/utils/utils";

export default async function GET(req: Request, {params}: {params: {chatId: string }}) {
    const {chatId} = params;
    const messages = await db.message.findMany({
        where: {
            chatRoomId: chatId
        },
    });

    if(!messages) {
        return new Response("No messages found", {
            status: 404,
        });
    }

    return new Response(JSON.stringify(messages), {
        status: 200,
    });
}