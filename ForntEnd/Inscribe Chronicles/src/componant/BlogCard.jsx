import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ForumIcon from '@mui/icons-material/Forum';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import BookmarkRemoveOutlinedIcon from '@mui/icons-material/BookmarkRemoveOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import blogLogo from "../assets/blog-s-logo.avif";
import Aot from "../assets/Aot.jpeg";
function BlogCard() {
  return (
    
    // Main Div
    <div className='w-3/5 h-48 border-b-2'>
        {/* 1 */}
        {/* Basic Intro */}
        <div className='flex justify-start mt-4 ml-5 mb-2'>
            {/* Logo */}
            <div><img src={blogLogo} className='w-5 h-5 object-fill' /> </div>
            <h1 className='text-sm ml-1'><span className='text-[#6B6B6B]'>In</span> The Inscribe Chronicals <span className=''>by</span> Yuvraj</h1>
        </div>

        {/* 2 */}
        {/* Blog Content */}
        <div className='flex justify-between mx-5'>
        <div className='w-2/3'>
            <h1 className='my-1 text-2xl font-bold'>What Makes me Love Attack Titan
            </h1>
            <p className='text-[#6B6B6B] mt-2'>Attack On Titan is very likely (In my opinion) one of the best examples of extraordinary writing within the anime genre and even outside of anime</p>
        </div>
         {/* Blog Image */}
         <div className='w-32 h-32 object-fill'><img src={Aot} className='w-full h-full'/></div>
        </div>

        {/* 3 */}
        <div className='flex justify-between w-2/3 ml-5'>
            <div className='flex justify-start w-3/5'> 
            <div className='text-xs text-yellow-400'><StarIcon fontSize='small'/></div>
            <div className='text-sm mx-3 text-[#6B6B6B]'>Jan 10,2025</div>
            <div className='text-xs mr-3 text-[#6B6B6B]'><FavoriteIcon fontSize='small'/></div>
            <div className='text-xs text-[#6B6B6B]'><ForumIcon fontSize='small'/></div>
            
            
            </div>
            <div className='flex justify-end w-2/5'>
                <div className='text-xs text-[#6B6B6B]'><RemoveCircleOutlineOutlinedIcon fontSize='small'/></div>
                <div className='mx-3 text-xs text-[#6B6B6B]'><BookmarkRemoveOutlinedIcon fontSize='small'/></div>
                <div className='text-xs text-[#6B6B6B]'><MoreHorizOutlinedIcon fontSize='small'/></div>
            </div>
        </div>
    </div>
    
  );
}
export default BlogCard;