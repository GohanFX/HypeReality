import axios from "axios";
import { useRouter } from "next/navigation";
import { User } from ".";

export const useUploadProfilePicture = () => {
  const router = useRouter();

  async function updatePicture(profilePicture: File) {
    const formData = new FormData();
    formData.append("picture", profilePicture);
    try {
      const { data, status } = await axios.post(
        "/api/v1/user/picture",
        formData,
        {}
      );
      return await data; // Refresh the page
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    }
  }

  return { updatePicture };
};
