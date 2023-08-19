import axios from "axios";

export async function getProduct(id) {
    try {
        const response = await axios.get(`http://192.168.1.10:3000/api/product/${id}`)
        return response.data
    } catch (error) {
        console.log(error.response.data);
    }
}
export async function getAllProductByCategory(categoryName) {
    try {
        const response = await axios.get(`http://192.168.1.10:3000/api/product/${categoryName}`)
        console.log(response);
        // return response.data
    } catch (error) {
        console.log(error.message);
    }
}
export async function searchProduct(key) {
    const response = await axios.get(`http://192.168.1.10:3000/api/product/search/${key}`)
    return response
}
