import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        productList: [],
        cartList: [],
        cartChecked: []
    },
    reducers: {
        setProduct: (state, action) => {
            state.productList = action.payload
        },
        addToCart: (state, action) => {
            const newItems = action.payload;
            const indexCart = state.cartList.findIndex((item) => item._id === newItems._id);
            if (indexCart >= 0) {
                state.cartList[indexCart].quantity += newItems.quantity;
            } else {
                state.cartList.unshift(newItems);
            }
        },
        addCheckedItem: (state, action) => {
            state.cartChecked.unshift(action.payload)

        },
        removeCheckedItem: (state, action) => {
            state.cartChecked.splice(state.cartChecked.indexOf(action.payload._id), 1)

        },
        decreaseQuantity(state, action) {
            const cartItem = action.payload;
            const indexCart = state.cartList.findIndex((item) => item._id === cartItem._id);
            if (state.cartList[indexCart].quantity > 1) {
                state.cartList[indexCart].quantity -= 1;
            }
        },
        increaseQuantity(state, action) {
            const cartItem = action.payload;
            const indexCart = state.cartList.findIndex((item) => item._id === cartItem._id);
            state.cartList[indexCart].quantity += 1;
        },
        removeFromCart: (state, action) => {
            state.cartList.splice(state.cartList.indexOf(action.payload._id), 1)
        }
    },
})

export const { setProduct, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, addCheckedItem, removeCheckedItem } = productSlice.actions

export default productSlice.reducer