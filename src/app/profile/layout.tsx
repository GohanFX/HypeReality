
import NormalNavbar from "@/components/Navbars/NormalNavbar";
import { useSession } from "@/utils/session";
import { User } from "@prisma/client";

export default async function ProfileLayout({children}: {children: React.ReactNode, user: User}) {
    const {getUser} = useSession();
    return <div className="bg-gradient-to-b from-slate-200 to-100% to-gray-200 overflow-x-hidden">
        <NormalNavbar user={await getUser()}  />
        {children}
    </div>
}