import { configureStore } from "@reduxjs/toolkit";
import blogReducer, { fetchAllBlogs } from "../reducer/BlogSlice";
 import appReducer from "../reducer/AppSlice"
import userReducer, { fetchAllUsers } from "../reducer/UserSlice";

const store = configureStore({
    reducer: {
        blog: blogReducer,
        app: appReducer,
        user: userReducer,
    },
});

store.dispatch(fetchAllBlogs());
store.dispatch(fetchAllUsers());


export const AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
export default store;