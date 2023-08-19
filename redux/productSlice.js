import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        productList: [],
        cartList: []
    },
    reducers: {
        setProduct: (state, action) => {
            state.productList = [...state.productList, ...action.payload]
        },
        addToCart: (state, action) => {
            state.cartList.unshift(action.payload.carts)
        },
        removeFurniture: (state, action) => {
            state.cartList.splice(state.cartList.indexOf(action.payload.id), 1)
        }
    },
})

export const { setProduct, addToCart, removeFurniture } = productSlice.actions

export default productSlice.reducer