
import NormalNavbar from "@/components/Navbars/NormalNavbar";
import { User } from "@/utils";
import { useSession } from "@/utils/session";

export default async function ChatsLayout({children}: {children: React.ReactNode, user: User}) {
    const {getUser} = useSession();
    return <div className="bg-gradient-to-b h-auto from-slate-200 to-100% to-gray-200 overflow-x-hidden">
        <NormalNavbar user={await getUser()} isProfileActive={false} />
        {children}
    </div>
}