  import React, { useState, useRef, useEffect } from "react";
  import ReactQuill from "react-quill";
  import "react-quill/dist/quill.snow.css";
  import ImageResize from "quill-image-resize-module-react";
  import CloseIcon from "@mui/icons-material/Close";
  import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
  import { AddPost } from "../../service/PostService";
  import { jwtDecode } from "jwt-decode";
  import imageUpload from "../../utils/imageUpload";

  // Register Image Resize Module
  ReactQuill.Quill.register("modules/imageResize", ImageResize);

  const WritePost = () => {
    const [active, setActive] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [image, setImage] = useState(null);
    
    // State for blog data
    const [BlogData, setBlogData] = useState({
      title: "",
      content: "",
      tags: [],
      category: "",
      summary: "",
      authorId: "",
    });

    const token = localStorage.getItem("Inscribe_Barrer_Token");

    useEffect(() => {
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          setBlogData((prevData) => ({
            ...prevData,
            authorId: decodedToken.userId,
          }));
        } catch (error) {
          console.error("Invalid Token", error);
        }
      }
    }, [token]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!BlogData.title.trim() || !BlogData.content.trim() || !BlogData.category) {
        alert("Please fill in all required fields.");
        return;
      }
      try {
        console.log("Submitting Post:", BlogData);
        await AddPost(BlogData);
        handleImageUpload();
        setBlogData({
          title: "",
          content: "",
          tags: [],
          category: "",
          summary: "",
          authorId: "",
        })
        setActive(false);
      } catch (error) {
        console.error("Failed to add post", error);
      }
    };

    const handleActiveModel = async () => {
      setActive(true);
    };

    const handleImageUpload = async () => {
      if (image) {
        try {
          await imageUpload(image, setImageUrl);
        } catch (error) {
          console.error(error);
        }
      }

      console.log("Inside File Submit");
    };

    const handleCloseModal = () => setActive(false);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setBlogData((prevData) => ({
        ...prevData,
        [name]: name === "tags" ? value.split(",").map(tag => tag.trim()) : value,
      }));
    };

    const handleFileInputChange = (e) => {
      setImage(e.target.files[0]);
    };

    const handleCategoryChange = (e) => {
      setBlogData((prevData) => ({ ...prevData, category: e.target.value }));
    };

    const modules = {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ align: [] }],
        [{ color: [] }, { background: [] }],
        ["blockquote", "code-block"],
        ["image", "link"],
        ["clean"],
      ],
      imageResize: {
        parchment: ReactQuill.Quill.import("parchment"),
        modules: ["Resize", "DisplaySize", "Toolbar"],
      },
    };

    return (
      <>
        <div>
          <ReactQuill
            theme="snow"
            value={BlogData.content}
            onChange={(value) => setBlogData((prevData) => ({ ...prevData, content: value }))}
            modules={modules}
            placeholder="Write something amazing..."
          />
          <input type="file" onChange={handleFileInputChange} accept="image/*" className="mt-2" />
          {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ width: "100px", height: "100px" }} />}
          <button className="m-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleActiveModel}>
            Submit Post
          </button>
        </div>
        {active && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 sm:p-6 rounded-md shadow-lg w-11/12 max-w-md mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl sm:text-2xl font-semibold">Fill Blog Info</h2>
                <button onClick={handleCloseModal}>
                  <CloseIcon className="text-gray-500 hover:text-black cursor-pointer" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <TextField fullWidth label="Title" name="title" variant="outlined" value={BlogData.title} onChange={handleInputChange} />
                <TextField fullWidth label="Tags (comma separated)" name="tags" variant="outlined" value={BlogData.tags.join(", ")} onChange={handleInputChange} />
                <TextField fullWidth label="Summary" name="summary" variant="outlined" multiline rows={3} value={BlogData.summary} onChange={handleInputChange} />
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select value={BlogData.category} onChange={handleCategoryChange}>
                    <MenuItem value="Technology">Technology</MenuItem>
                    <MenuItem value="Education">Education</MenuItem>
                    <MenuItem value="Entertainment">Entertainment</MenuItem>
                    <MenuItem value="Health">Health</MenuItem>
                  </Select>
                </FormControl>
                <Button fullWidth variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  };

  export default WritePost;
