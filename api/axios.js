import axios from "axios";
const BASE_URL = 'http://192.168.1.10:3000'

export default axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
})