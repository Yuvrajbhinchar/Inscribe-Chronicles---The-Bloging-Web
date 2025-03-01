import { useState } from "react";
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForumIcon from '@mui/icons-material/Forum';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import blogLogo from "../../assets/blog-s-logo.avif";
import Aot from "../../assets/Aot.jpeg";

function BlogCard({ post }) {
  // State to manage dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);
  console.log(post.like +   "like");

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    // Main Div
    <div className="w-full md:w-3/5 h-auto border-b-2 p-4">
      {/* 1 */}
      {/* Basic Intro */}
      <div className="flex justify-start items-center mt-4 mb-2">
        {/* Logo */}
        <div>
          <img src={blogLogo} className="w-5 h-5 object-fill" alt="Blog Logo" />
        </div>
        <h1 className="text-sm ml-1">
          <span className="text-[#6B6B6B]">In</span> The Inscribe Chronicles{" "}
          <span className="">by </span>
          {post.authorName}
        </h1>
      </div>

      {/* 2 */}
      {/* Blog Content */}
      <div className="flex justify-between items-start hover:cursor-pointer">
        <div className="w-full md:w-2/3">
          <h1 className="my-1 text-xl md:text-2xl font-bold">{post.title}</h1>
          <p className="text-[#6B6B6B] mt-2 text-sm md:text-base">{post.content}</p>
        </div>
        {/* Blog Image */}
        <div className="w-32 h-32 ml-4">
          <img src={Aot} className="w-full h-full object-cover" alt="Blog Image" />
        </div>
      </div>

      {/* 3 */}
      {/* Responsive Icons */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex justify-start items-center space-x-3">
          <div className="text-xs text-yellow-400">
            <StarIcon fontSize="small" />
          </div>
          <div className="text-sm text-[#6B6B6B]">{post.createdAt}</div>

          {/* Icons visible only on larger screens */}
          <div className="hidden md:flex items-center space-x-2 text-xs" >
            {
              post.like ? <FavoriteIcon fontSize="small" />  : <FavoriteBorderIcon fontSize="small" />
            }
            <span>{post.likeCount}</span>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-xs text-[#6B6B6B]">
            <ForumIcon fontSize="small" />
            <span>{post.commentsCount}</span>
          </div>
        </div>

        {/* Dropdown Menu for smaller screens */}
        <div className="relative">
          {/* Three-dot icon */}
          <div
            className="md:hidden text-xs text-[#6B6B6B] cursor-pointer"
            onClick={toggleDropdown}
          >
            <MoreHorizOutlinedIcon fontSize="small" />
          </div>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <div className="p-2">
                <div className="flex items-center space-x-2 text-xs p-2 hover:bg-gray-100 rounded-lg"  >
                  <FavoriteIcon fontSize="small" />
                  <span>{post.views} Likes</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#6B6B6B] p-2 hover:bg-gray-100 rounded-lg">
                  <ForumIcon fontSize="small"  />
                  <span>{post.commentsCount} Comments</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#6B6B6B] p-2 hover:bg-gray-100 rounded-lg">
                  <RemoveCircleOutlineOutlinedIcon fontSize="small" />
                  <span>Remove</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#6B6B6B] p-2 hover:bg-gray-100 rounded-lg">
                  <BookmarkAddOutlinedIcon fontSize="small" />
                  <span>Save</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Icons visible only on larger screens */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="text-xs text-[#6B6B6B]">
            <RemoveCircleOutlineOutlinedIcon fontSize="small" />
          </div>
          <div className="text-xs text-[#6B6B6B]">
            <BookmarkAddOutlinedIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;