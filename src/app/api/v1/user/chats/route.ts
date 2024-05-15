import { useSession } from "@/utils/session";
import { db } from "@/utils/utils";

export async function GET(req: Request) {
  const { getUser } = useSession();
  const user = await getUser();
  if (!user) {
    return new Response("No user in session", {
      status: 401,
    });
  }

  const chats = await db.chatRoom.findMany({
    where: {
      users: {
        some: {
          userId: user.userId,
        },
      },
    },
  });

  if (!chats) {
    return new Response(JSON.stringify({}), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(chats), {
    status: 200,
  });
}
