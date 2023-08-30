import axios from "axios";
import jwt_decode from "jwt-decode";
import useRefreshToken from "../hooks/useRefreshToken";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosPrivate = axios.create({
    baseURL: 'http://192.168.1.10:3000/api/product',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})

axiosPrivate.interceptors.request.use(async function (config) {
    const token = await AsyncStorage.getItem('token')
    const date = new Date()
    const parsedToken = jwt_decode(token)

    if (parsedToken.exp < date.getTime() / 1000) {
        const refresh = useRefreshToken()
        const newAccessToken = await refresh()
        config.headers['Authorization'] = `Bearer ${newAccessToken}`
    }
    if (!config.headers['Authorization']) {
        config.headers['Authorization'] = `Bearer ${token}`

    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export async function getProduct(id) {
    try {
        const response = await axiosPrivate.get(`/${id}`)
        return response.data
    } catch (error) {
        console.log(error.response.data);
    }
}
export async function getAllProduct() {
    try {
        const response = await axiosPrivate.get()
        return response.data
    } catch (error) {
        console.log(error.response.data);
    }
}
export async function searchProduct(key) {
    const response = await axiosPrivate.get(`/search/products/${key}`)
    return response.data
}
