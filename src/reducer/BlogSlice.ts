import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IArticle } from "../interface";
import { getAllBlogs } from "../services";
import { RootState } from "../store";

export interface IBlogState {
    articles: IArticle[];
    status: 'idle' | 'loading' | "compeleted" | 'failed';
    error: string | null;
    filter: string;
    blogId: string;

}
export const fetchAllBlogs = createAsyncThunk("/blog/fetchAllBlogs", async () => {
    const response = await getAllBlogs();
    return response.data;
})
 

const initialState: IBlogState = {
    articles: [],
    status: 'idle',
    error: null,
    filter: "",
    blogId: "",
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setBlogId: (state, action) => {
            state.blogId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllBlogs.pending, (state) => {
                state.status = 'loading';

            }).addCase(fetchAllBlogs.fulfilled, (state, action) => {
                state.status = 'compeleted';
                state.articles = action.payload;

            }).addCase(fetchAllBlogs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Something went wrong";
            })
    },
});
export const displayAllBlogs = (state: RootState) => state.blog.articles;

export const findBlogById = (state: RootState, blogId: string) =>
    state.blog.articles.find((blog) => blog._id === blogId)
export const { setBlogId } = blogSlice.actions;
export const { setFilter } = blogSlice.actions

export default blogSlice.reducer;