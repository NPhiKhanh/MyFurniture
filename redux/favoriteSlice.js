import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        ids: [],
    },
    reducers: {
        addFurniture: (state, action) => {
            state.ids.unshift(action.payload.id)
        },
        removeFurniture: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        }
    },
})

export const { addFurniture, removeFurniture } = favoriteSlice.actions

export default favoriteSlice.reducer