import { useSession } from "@/utils/session";
import { writeFile } from "fs/promises";
import fs from "fs";
import { calculateMegabytes } from "@/utils/contexts";
import { get } from "http";
import axios from "axios";

export async function POST(req: Request) {
  const data = await req.formData();
  const { getUser } = await useSession();
  const user = await getUser();
  const file: File = data.get("picture") as File;

  if (!file) {
    return new Response("No picture uploaded!", { status: 400 });
  }
  if(file.type !== "image/png" && file.type !== "image/jpeg") {
    return new Response("Invalid file type", { status: 400 });
  }
  if (!user) {
    return new Response("Unauthroized", { status: 401 });
  }
  const imageData = new FormData();
  imageData.append("id", user.userId.toString());
  imageData.append("avatar", file);
  const image = await axios.post<{ fileName: string }>(
    "http://localhost:8080/upload/profile/avatar",
    imageData,
    {}
  );
  
  if (!image) {
    return new Response("Error uploading image", { status: 500 });
  }

  return new Response(image.data.fileName, { status: 200 });
}
