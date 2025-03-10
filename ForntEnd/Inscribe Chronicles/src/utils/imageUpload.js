import axios from "axios";

const imageUpload = async (file, setImageUrl) => {
  const formData = new FormData();
  formData.append("file", file); // Ensure 'file' key matches backend

  try {
    const response = await axios.post("api/upload/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("Inscribe_Barrer_Token")}`,
      },
    });

    setImageUrl(response.data.imageUrl); // Update state with uploaded image URL
  } catch (error) {
    console.error("Image upload failed:", error);
  }
};

export default imageUpload;
