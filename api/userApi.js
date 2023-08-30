import axios from "./axios";

export async function signUp(username, password) {
    try {
        await axios.post('/register', JSON.stringify({ username, password })
        )
    } catch (error) {
        console.error(error);
    }
}

export async function login(username, password) {
    try {
        const response = await axios.post('/login', JSON.stringify({ username, password }))
        return response.data.accessToken
    } catch (error) {
        if (!error?.response) {
            console.error('No server response');
        } else if (error.response?.status === 400) {
            console.error('Missing usernam or password');
        } else if (error.response?.status === 401) {
            console.error('Unauthorized');
        } else {
            console.error('login failed');
        }
    }
}