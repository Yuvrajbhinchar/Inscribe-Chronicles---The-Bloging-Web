import axios from 'axios';
import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Home = () => {
    const [post, setPost] = useState();
    useEffect(() => {
        const token = localStorage.getItem("Inscribe_Barrer_Token");
        console.log("Token retrieved from localStorage:", token);
        axios
            .post(
                'api/posts/allPosts', 
                {}, // Empty body if no data is being sent in the request
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => {
                console.log("Response Data:", response.data);
                setPost(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);           

    return (
        <div className='w-full h-screen'>
            <div className='w-full h-full'>
               
                {
                    post && post.map((post) => (
                        <BlogCard title={post.title} content={post.content} date={post.createdAt} likes={post.views} comments={post.commentsCount}/>
                    ))
                }
                
            </div>
        </div>
    );
};

export default Home;        