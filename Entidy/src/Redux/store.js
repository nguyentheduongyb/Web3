import { configureStore } from '@reduxjs/toolkit'
import authSlice from '~/Redux/Auth/authSlice'
export const store = configureStore({
        reducer: {
                auth: authSlice.reducer,
        },
})