import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('post/fetchPost', async (_, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("Inscribe_Barrer_Token");
        if (!token) throw new Error("No authentication token found");

        const response = await axios.post(
            'api/posts/allPosts', 
            {}, 
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("reduxxxxxxxxxx   "+response.data);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        return rejectWithValue(error.response?.data || "Something went wrong");
    }
});

const postSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default postSlice.reducer;
