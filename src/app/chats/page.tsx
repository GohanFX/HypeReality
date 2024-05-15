
import Chat from "@/components/Chats/Chat";
import { useSession } from "@/utils/session"
import { redirect } from "next/navigation";
import { FaFacebook, FaInstagram } from "react-icons/fa"


export default async function ChatPage() {
    const session = useSession();
    const user = await session.getUser();

    if(!user) {
        redirect("/login")
    }
    return (<div className="w-full flex p-4 h-[583px]  place-content-center items-center ">
       <Chat />
    </div>)
        
}