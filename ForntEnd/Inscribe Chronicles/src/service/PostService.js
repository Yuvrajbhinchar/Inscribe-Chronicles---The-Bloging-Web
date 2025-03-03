import axios from "axios";

export const AddPost = async (BlogData) => {
    const token = localStorage.getItem("Inscribe_Barrer_Token");

    try {
        const response = await axios.post(
            "/api/posts/createPost",
            BlogData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data; // Return response data
    } catch (error) {
        console.error("Error adding post:", error);
        throw error; // Rethrow error for caller to handle
    }
};
