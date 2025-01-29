import axios from 'axios';
import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [post, setPost] = useState();
    const nevigate = useNavigate();
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

    const handleSingleBlog = (post) => {

        nevigate('/singleBlog', {state : {post}});
    }
    return (
        <div className='w-full h-screen'>
            <div className='w-full h-full'>
               
                {
                    post && post.map((post) => (
                        <div className="hover:cursor-pointer" key={post.id} onClick={() => handleSingleBlog(post)}>
                        <BlogCard post={post}/>
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
};

export default Home;        