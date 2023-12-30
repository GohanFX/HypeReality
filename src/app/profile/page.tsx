import { useSession } from "@/utils/session";import { redirect } from "next/navigation";
import ProfilePageComponent from "./ProfilePage";
import ProfileLayout from "./layout";

export default async function ProfilePage() {
  const { getUser } = useSession();
  const user = await getUser();
  if (!user) {
    redirect("/");
  }

  return (<>
    <ProfilePageComponent user={user} />
  </>
);

}
