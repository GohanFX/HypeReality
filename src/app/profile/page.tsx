import { useSession } from "@/utils/session";
import { ShoeFrames } from "@/utils/utils";
import { redirect } from "next/navigation";
import HomePage from "./ProfilePage";


export default async function ProfilePage() {
  const { isLoggedIn, getServerSession } = useSession();
  if (!(await isLoggedIn())) {
    redirect("/");
  }
  const user = (await getServerSession()).user;

  return (
    <><HomePage user={((await getServerSession()).user!)} /></>
  );

}
