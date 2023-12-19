import { getIronSessionData } from "@/utils/session";
import axios from "axios";
import ModifyPage from "./ModifieProfile";
import { redirect, useRouter } from "next/navigation";

export default async function ModifeProfilePage() {
    const { user } = (await getIronSessionData());

    if(!user) {
        redirect("/");
    }
    
    return <ModifyPage user={user!} />;

};