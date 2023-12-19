import { useSession } from "@/components/Session/SessionContext";
import { getIronSessionData } from "@/utils/session";
import { ShoeFrames } from "@/utils/utils";
import { redirect } from "next/navigation";
import HomePage from "./ProfilePage";


export default async function ProfilePage() {
  const { user } = (await getIronSessionData());
  if (!user) {
    redirect("/");
  }

  return (
    <><HomePage user={user} /></>
  );

}
