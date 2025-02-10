import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import AotImage from "../assets/Aot-Image.webp";
import author from "../assets/author.jpg";
import { useLocation } from 'react-router-dom';
const SingleBlogCard = () => {

    const location = useLocation();
    const post = location.state?.post || {};
    console.log("Post:", post);
    const token = localStorage.getItem("Inscribe_Barrer_Token");
    if (!token) {
        console.error("No token found!");
        return;
    }
    const handleLike = () => {
        axios.post(`api/post/like?postId=${post.id}`,
            {},
            {
                headers:{
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            }

        )
        .then((response) => {
            console.log("Response Data:", response.data);
        })
    }
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
                <h1 className='text-4xl font-bold mt-3'>{post.title}</h1>
                <h2 className='text-2xl text-[#6B6B6B] my-2'>{post.slug}</h2>
            </div>

            {/* 3 */}
            <div className='flex justify-start my-5'>
                <div className='w-12 h-12 rounded-full object-fill'><img src={author} className='w-full h-full rounded-full'/></div>
                <div>
                <div>
                <h1 className='inline mx-4'>{post.authorName}.</h1>
                <h1 className='inline text-green-500'>Follow</h1>
                </div>
                <div>
                <h1 className='inline mx-4 text-[#6B6B6B]'><span>Published in </span> Yuvraj</h1>
                <h1 className='inline text-[#6B6B6B]'>{post.createdAt}</h1>
                </div>
                </div>
                
            </div>

            {/* 4 */}
            <div className='flex justify-around w-full h-12 border-b-2 border-t-2'>
                <div className='flex justify-start w-1/2 mt-2'>
                    <div className='text-[#6B6B6B] mx-1'><FavoriteBorderIcon fontSize='small' onClick = {handleLike}/>{post.likeCount}</div>
                
                <div className='text-[#6B6B6B] mx-4'><ModeCommentOutlinedIcon fontSize='small'/>{post.commentsCount}</div>
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
                <h1 className='text-xl'>{post.title}</h1>
            </div>
            
        </div>
    );
};

export default SingleBlogCard;