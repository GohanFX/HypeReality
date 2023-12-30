'use server';
import axios from "axios"
import { useSession } from "./session";

export async function handleLogout() {
    const session = useSession();
    (await session.getServerSession()).destroy();
    return {
        redirect: {
            destination: "/",
            permanent: false,
        },
    };
}



export async function avatarUpload(picture: File) {
    const {getUser, getServerSession} = useSession();
    const session = await getServerSession();
    const user = await getUser();
    if(!picture) {
        return {
            redirect: {
                destination: "/profile",
                permanent: false,
            },
        };
    }
    if (!user) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }
    const imageData = new FormData();
    imageData.append("id", user.id.toString());
    imageData.append("avatar", picture);
    const image = await axios.post("http://localhost:8080/upload/profile/avatar", imageData, {});
    user.avatar = image.data;
    await session.save();
    console.log(image.data)
    return {
        redirect: {
            destination: "/profile",
            permanent: false,
        },
    };
}