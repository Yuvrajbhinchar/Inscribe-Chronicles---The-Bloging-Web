import axios from 'axios';
import { useEffect } from 'react';
import BlogCard from './BlogCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/slices/postSlice';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Correctly access the posts slice
    const { posts, loading, error } = useSelector((state) => state.posts);

    // Fetch posts on component mount
    useEffect(() => {
        console.log("Fetching posts...");  // Debugging
        dispatch(fetchPosts());
    }, [dispatch]);

    // Handle navigation to single blog page
    const handleSingleBlog = (post) => {
        navigate('/singleBlog', { state: { post } });
    };

    return (
        <div className='w-full h-screen'>
            <div className='w-full h-full'>
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
                {Array.isArray(posts) && posts.map((post) => (
                    <div className="hover:cursor-pointer" key={post.id} onClick={() => handleSingleBlog(post)}>
                        <BlogCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
