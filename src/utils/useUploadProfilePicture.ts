import axios from "axios";
import { useRouter } from "next/navigation";

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
      if (status === 200) {
        router.refresh() // Refresh the page
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    }
  }

  return { updatePicture };
};
