import { createSlice } from "@reduxjs/toolkit";
import { signUpUser, signInUser } from './authActions'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
        ? localStorage.getItem('userToken')
        : null

const userInfo = localStorage.getItem('userInfo')
        ? localStorage.getItem('userInfo')
        : null
const initialState = {
        loading: false,
        userInfo,
        userToken,
        error: null,
}
const authSlice = createSlice({
        name: 'auth',
        initialState,
        reducers: {
                logOut: (state) => {
                        localStorage.removeItem('userToken') // deletes token from storage
                        state.loading = false
                        state.userInfo = null
                        state.userToken = null
                        state.error = null
                },
        },
        extraReducers: {
                // register user
                [signUpUser.pending]: (state) => {
                        state.loading = true
                        state.error = null
                },
                [signUpUser.fulfilled]: (state, { payload }) => {
                        state.loading = false
                        state.userInfo = payload.user
                        state.userToken = payload.token
                },
                [signUpUser.rejected]: (state, { payload }) => {
                        state.loading = false
                        state.error = payload
                },


                // login user
                [signInUser.pending]: (state) => {
                        state.loading = true
                        state.error = null
                },
                [signInUser.fulfilled]: (state, { payload }) => {
                        state.loading = false
                        state.userInfo = payload.user
                        state.userToken = payload.token
                },
                [signInUser.rejected]: (state, { payload }) => {
                        state.loading = false
                        state.error = payload
                },
        },

})
export const { logOut } = authSlice.actions
export default authSlice
