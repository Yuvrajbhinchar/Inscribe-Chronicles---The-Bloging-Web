import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForumIcon from '@mui/icons-material/Forum';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import blogLogo from "../assets/blog-s-logo.avif";
import Aot from "../assets/Aot.jpeg";

function BlogCard({ post }) {
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
          <div className="hidden md:flex items-center space-x-2 text-xs text-[#6B6B6B]">
            <FavoriteIcon fontSize="small" />
            <span>{post.views}</span>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-xs text-[#6B6B6B]">
            <ForumIcon fontSize="small" />
            <span>{post.commentsCount}</span>
          </div>
        </div>

        {/* MoreHorizOutlinedIcon for smaller screens */}
        <div className="flex justify-end items-center space-x-3">
          <div className="md:hidden text-xs text-[#6B6B6B]">
            <MoreHorizOutlinedIcon fontSize="small" />
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
    </div>
  );
}

export default BlogCard;