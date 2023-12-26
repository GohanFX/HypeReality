import { useSession } from "@/utils/session";
import { writeFile } from "fs/promises";
import fs from "fs";
import { calculateMegabytes } from "@/utils/utils";
import { User } from "@/utils";
import claudinary from "cloudinary";
import { get } from "http";
import axios from "axios"

claudinary.v2.config({
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
    cloud_name: process.env.CLOUD_NAME
});

export async function POST(req: Request) {
  const data = await req.formData();
  const session = await useSession();
  const { user, save } = await session.getServerSession();
  const file: File | null = data.get("picture") as unknown as File;
  
  if (!file) {
    return new Response("No picture uploaded!", { status: 400 });
  }
  if (!user) {
    return new Response("Unauthroized", { status: 401 });
  }

  const imageData = new FormData();
  imageData.append("id", user.id.toString());
  imageData.append("avatar", file);
  const image = await axios.post("http://localhost:8080/upload/profile/avatar", imageData, {});
  user.avatar = image.data;
  await save();
  return new Response("Uploaded!", { status: 200 });
}




async function uploadImage(imageForm: FormData, user: User) {
    return claudinary.v2.uploader.upload(await getImage(imageForm), {folder: `user/${user?.id}/picture`});
}

async function getImage(formData: FormData) {
    const data = await formData.get("picture") as File | null;
    const bytes = await data?.arrayBuffer();
    const buffer = Buffer.from(bytes!);
       
    return buffer.toString("base64");
}


async function savePicture(file: File, user: User) {
    if (!file) {
        return new Response("No picture uploaded!", { status: 400 });
      }
    
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const path = `user/${user?.id}/picture/`;
    
      if (8 < calculateMegabytes(file.size)) {
        return new Response("File too big!", { status: 400 });
      }
    
      try {
        if (!fs.existsSync(path)) {
          fs.mkdirSync(path);
          await writeFile(
            path + `/profile_picture.${extractExtension(file.name)}`,
            buffer
          );
          return new Response("Picture uploaded!", { status: 200 });
        }
        fs.writeFileSync(
          path + `/profile_picture.${extractExtension(file.name)}`,
          buffer
        );
        return new Response("Changed!", { status: 200 });
      } catch (e) {
        console.log(e);
        return new Response("Something went wrong!", { status: 500 });
      }
}

function extractExtension(filename: string): string {
  const lastDot = filename.lastIndexOf(".");
  return filename.slice(lastDot + 1);
}
