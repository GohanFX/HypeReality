import axios from "axios";
import ModifyPage from "./ModifieProfile";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "@/utils/session";

export default async function ModifeProfilePage() {
    const session = useSession();

    if(!(await session.isLoggedIn())) {
        redirect("/");
    }
    
    return <ModifyPage user={(await session.getServerSession()).user!} />;

};