import { useSession } from "@/utils/session";
import { db } from "@/utils/utils";

export default async function POST(req: Request) {
  const { getUser } = await useSession();
  const user = await getUser();
  const { recieverId } = await req.json();
  if (!recieverId) {
    return new Response("No recieverId found", {
      status: 400,
    });
  }
  if (!user) {
    return new Response("No user found", {
      status: 400,
    });
  }

  const isThereAChat = await db.chatRoom.findFirst({
    where: {
      users: {
        every: {
          id: {
            in: [user.id, recieverId],
          },
        },
      },
    },
  });
  if (isThereAChat) {
    return new Response(isThereAChat.chatId, {
      status: 200,
    });
  }

 
  return new Response(chat.chatId, {
    status: 200,
  });
}
