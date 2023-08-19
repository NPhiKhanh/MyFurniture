import { configureStore } from '@reduxjs/toolkit'
import favoriteReducer from './favoriteSlice'
import productReducer from './productSlice'

export const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
        product: productReducer
    },
})