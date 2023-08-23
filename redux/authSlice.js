import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        isAuthenticated: false
    },
    reducers: {
        authenticate: (state, action) => {
            state.token = action.payload;
            AsyncStorage.setItem('token', action.payload)
            state.isAuthenticated = !state.isAuthenticated
        },
        logOut: (state) => {
            state.token = ''
            AsyncStorage.removeItem('token')
            state.isAuthenticated = false
        }
    },
})

export const { authenticate, logOut } = authSlice.actions

export default authSlice.reducer