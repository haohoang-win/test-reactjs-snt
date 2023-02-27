import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    isLoading: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            state.isAuthenticated = true;
        },
        logoutRedux: (state, action) => {
            state.isAuthenticated = false;
        },
        loadingRedux: (state, action) => {
            state.isLoading = true;
        },
        unLoadingRedux: (state, action) => {
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
    }
})

export const { loginRedux, logoutRedux, loadingRedux, unLoadingRedux } = userSlice.actions

export default userSlice.reducer;