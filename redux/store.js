import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './favoriteSlice'
import productReducer from './productSlice'
import authReducer from './authSlice'

export const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
        product: productReducer,
        auth: authReducer
    },
})