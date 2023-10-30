import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAuthour } from "../interface";
import { getAllUsers } from "../services";
import { RootState } from "../store";

export interface IAuthorState {
    author: IAuthour[];
    status: 'idle' | 'loading' | "compeleted" | 'failed';
    error: string | null;
    filter: string;

}
export const fetchAllUsers = createAsyncThunk("/blog/fetchAllUsers", async () => {
    const response = await getAllUsers();
    return response.data;
})

const initialState: IAuthorState = {
    author: [],
    status: 'idle',
    error: null,
    filter: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.status = 'loading';

            }).addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.status = 'compeleted';
                state.author = action.payload;

            }).addCase(fetchAllUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Something went wrong";
            })
    },
});
export const findUserById = (state: RootState, userId: string) =>
    state.user.author.find((user) => user._id === userId);


export default userSlice.reducer;