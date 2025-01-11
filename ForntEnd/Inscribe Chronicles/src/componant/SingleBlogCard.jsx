import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AotImage from "../assets/Aot-Image.webp";
import author from "../assets/author.jpg";
const SingleBlogCard = () => {
    return (
        // Main Div
        <div className="m-auto w-1/2 mt-1">
            {/* 1 */}
            <div>
                <div className='inline text-xs text-yellow-400'><StarIcon fontSize='small'/></div>
                <h1 className='text-[#6B6B6B] mx-2 inline'>Members-only story</h1>
            </div>

            {/* 2 */}
            <div>
                <h1 className='text-4xl font-bold mt-3'>What Makes Me Love Attack On Titan</h1>
                <h2 className='text-2xl text-[#6B6B6B] my-2'>Aot is One of the best Anime</h2>
            </div>

            {/* 3 */}
            <div className='flex justify-start my-5'>
                <div className='w-12 h-12 rounded-full object-fill'><img src={author} className='w-full h-full rounded-full'/></div>
                <div>
                <div>
                <h1 className='inline mx-4'>Yuvraj Bhinchar .</h1>
                <h1 className='inline text-green-500'>Follow</h1>
                </div>
                <div>
                <h1 className='inline mx-4 text-[#6B6B6B]'><span>Published in </span> Yuvraj</h1>
                <h1 className='inline text-[#6B6B6B]'>3 Days Ago</h1>
                </div>
                </div>
                
            </div>

            {/* 4 */}
            <div className='flex justify-around w-full h-12 border-b-2 border-t-2'>
                <div className='flex justify-start w-1/2 mt-2'>
                    <div className='text-[#6B6B6B] mx-1'><FavoriteBorderIcon fontSize='small'/></div>
                
                <div className='text-[#6B6B6B] mx-4'><ModeCommentOutlinedIcon fontSize='small'/></div>
                </div>
                <div className='flex justify-end w-1/2 mt-2'>
                    <div className='text-[#6B6B6B]'><BookmarkAddOutlinedIcon fontSize='small'/></div>
                    <div className='text-[#6B6B6B] mx-5'><HeadphonesOutlinedIcon fontSize='small'/></div>
                    <div className='text-[#6B6B6B]'><ShareOutlinedIcon/></div>
                    <div className='text-[#6B6B6B] mx-5'><MoreHorizOutlinedIcon/></div>
                    </div>
            </div>

            {/* 5 */}
            <div className='w-full h-content mt-8'>
                <img src={AotImage} />
                <h1 className='text-center text-[#6B6B6B] text-sm'>All images in this article are by the author. Reuse prohibited without permission.</h1>
            </div>

            {/* 6 */}
            <div className='mt-8'>
                <h1 className='text-xl'>Attack On Titan is very likely (In my opinion) one of the best examples of extraordinary writing within the anime genre and even outside of anime, it holds up extremely well. On top of the splendid writing you also have exceptional action, character development and of course art style. Before I spoil the rest of the article I’ll sum up this first part by saying that even with the anime still running (Set to finish in 2023) I think Attack On Titan will be loved by both myself and millions of other fans for many years to come, so here is what makes me love Attack On Titan so much!</h1>
            </div>
            
        </div>
    );
};

export default SingleBlogCard;