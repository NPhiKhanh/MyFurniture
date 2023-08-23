import { createSelector } from '@reduxjs/toolkit'

const selectcartChecked = state => state.product.cartChecked;

export const countCartItems = createSelector(selectcartChecked, (items) =>
    items.reduce((count, item) => count + item.quantity, 0)
);
export const totalCartItems = createSelector(selectcartChecked, (items) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0)
);