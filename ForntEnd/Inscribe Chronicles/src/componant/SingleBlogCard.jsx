import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AotImage from "../assets/Aot-Image.webp";
import author from "../assets/author.jpg";
import RespondeSection from './RespondeSection';
import CommentShow from './CommentShow';

const SingleBlogCard = () => {
    const { postId } = useParams(); // Get postId from URL
    const location = useLocation();
    const [post, setPost] = useState(location.state || null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log("1234566  "+post)

    // ✅ Fetch Post Details
    useEffect(() => {
        if(post === null){
        const fetchPost = async () => {
          try {
            const token = localStorage.getItem('Inscribe_Barrer_Token'); // Assuming you stored JWT in localStorage
            const response = await axios.post(
              `/api/posts/singlePost/${postId}`,
              {},
              {
                headers: {
                  Authorization: `Bearer ${token}`, // Include JWT token here
                },
              }
            );
            console.log(response.data);
            setPost(response.data);
          } catch (error) {
            console.error('Error fetching post:', error);
          }
        };
        fetchPost();
    }
      }, [postId]);
      
    // ✅ Fetch Comments for the Post
     useEffect(() => {
        if(post !== null){
        const fetchPost = async () => {
            try {
              const token = localStorage.getItem('Inscribe_Barrer_Token'); // Assuming you stored JWT in localStorage
              const response = await axios.post(
                `/api/post/fetchcomment/${postId}`,
                {},
                {
                  headers: {
                    Authorization: `Bearer ${token}`, // Include JWT token here
                  },
                }
              );
              console.log(response.data);;
              setComments(response.data)
              console.log(comments)
            } catch (error) {
              console.error('Error fetching post:', error);
            }
          };
          fetchPost();
        
        }
        }, [postId,post]);
        

    // ✅ Handle Like with UI Update
    const handleLike = async () => {
        const token = localStorage.getItem("Inscribe_Barrer_Token");
        try {
            await axios.post(`/api/post/like?postId=${post.id}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            });
            setPost(prevPost => ({
                ...prevPost,
                like: !prevPost.like,
                likeCount: prevPost.like ? prevPost.likeCount - 1 : prevPost.likeCount + 1
            }));
        } catch (error) {
            console.error("Error liking post:", error);
        }
    };

    // ✅ UI: Loading & Error States
    if (loading) return <p className="text-center text-lg">Loading...</p>;
    if (error) return <p className="text-red-500 text-center">{error}</p>;
    if (!post) return <p className="text-center text-lg">No post found</p>;

    return (
        <div className="m-auto w-1/2 mt-1">
            {/* 🌟 Post Header */}
            <div>
                <div className='inline text-xs text-yellow-400'><StarIcon fontSize='small' /></div>
                <h1 className='text-[#6B6B6B] mx-2 inline'>Members-only story</h1>
            </div>

            {/* 📝 Post Title & Slug */}
            <div>
                <h1 className='text-4xl font-bold mt-3'>{post.title}</h1>
                <h2 className='text-2xl text-[#6B6B6B] my-2'>{post.slug}</h2>
            </div>

            {/* ✍️ Author Details */}
            <div className='flex justify-start my-5'>
                <div className='w-12 h-12 rounded-full object-fill'>
                    <img src={author} className='w-full h-full rounded-full' alt="Author" />
                </div>
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

            {/* ❤️ Like & Share Section */}
            <div className='flex justify-around w-full h-12 border-b-2 border-t-2'>
                <div className='flex justify-start w-1/2 mt-2'>
                    <div className='text-[#6B6B6B] mx-1 cursor-pointer' onClick={handleLike}>
                        {post.like ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
                        {post.likeCount}
                    </div>
                    <div className='text-[#6B6B6B] mx-4'>
                        <ModeCommentOutlinedIcon fontSize='small' /> {post.commentsCount}
                    </div>
                </div>
                <div className='flex justify-end w-1/2 mt-2'>
                    <div className='text-[#6B6B6B]'><BookmarkAddOutlinedIcon fontSize='small' /></div>
                    <div className='text-[#6B6B6B] mx-5'><HeadphonesOutlinedIcon fontSize='small' /></div>
                    <div className='text-[#6B6B6B]'><ShareOutlinedIcon /></div>
                    <div className='text-[#6B6B6B] mx-5'><MoreHorizOutlinedIcon /></div>
                </div>
            </div>

            {/* 🖼️ Post Image */}
            <div className='w-full h-content mt-8'>
                <img src={AotImage} alt="Blog" />
                <h1 className='text-center text-[#6B6B6B] text-sm'>All images in this article are by the author. Reuse prohibited without permission.</h1>
            </div>

            {/* 📝 Post Content */}
            <div className='mt-8'>
                <h1 className='text-xl'>{post.title}</h1>
                <p className='text-base'>{post.content}</p>
            </div>

            {/* 💬 Comments & Response Section */}
            <RespondeSection />
            {comments.length > 0 ? (
                comments.map((comment, index) => (
                    <CommentShow
                        key={index}
                        comment={comment}
                    />
                ))
            ) : (
                <p className="text-center text-gray-500">No comments yet. Be the first to comment!</p>
            )}
        </div>
    );
};

export default SingleBlogCard;
 