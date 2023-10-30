import { createSlice } from "@reduxjs/toolkit";

export interface IAppState {
    isDarkMosde: boolean;
}

const initialState: IAppState = {
    isDarkMosde: false
}

const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setIsDarkMode: (state) => {
            state.isDarkMosde = !state.isDarkMosde
        }
    }
})

export const { setIsDarkMode } = AppSlice.actions;
export default AppSlice.reducer;