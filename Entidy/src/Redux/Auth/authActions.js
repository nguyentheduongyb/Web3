// authActions.js
import { createAsyncThunk } from '@reduxjs/toolkit'
import entidyAPI from '~/API'

export const signUpUser = createAsyncThunk(
        'auth/signup',
        async ({ username, email, password }, { rejectWithValue }) => {
                try {

                        const res = await entidyAPI.post(`/users/signup`,
                                { username, email, password },
                        )
                        localStorage.setItem('userToken', res.data.token)
                        localStorage.setItem('userInfo', res.data.user)

                        return res.data



                } catch (error) {
                        // return custom error message from backend if present
                        if (error.response && error.response.data.message) {
                                return rejectWithValue(error.response.data.message)
                        } else {
                                return rejectWithValue(error.message)
                        }
                }
        }
)

export const signInUser = createAsyncThunk(
        'auth/signin',
        async ({ email, password }, { rejectWithValue }) => {
                try {

                        const res = await entidyAPI.post(
                                `/users/signin`,
                                { email, password },
                        )
                        // store user's token in local storage
                        localStorage.setItem('userToken', res.data.token)
                        localStorage.setItem('userInfo', res.data.user)
                        return res.data
                } catch (error) {
                        // return custom error message from API if any
                        if (error.response && error.response.data.message) {
                                return rejectWithValue(error.response.data.message)
                        } else {
                                return rejectWithValue(error.message)
                        }
                }
        }
)