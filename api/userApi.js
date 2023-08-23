import axios from "axios";

const APIKey = 'AIzaSyAJyY2qK5V-4V-VirDWmuUPAfOL1skizWQ'
export async function signUp(email, password) {
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + APIKey, {
        email: email,
        password: password,
        returnSecureToken: true
    })
    return response.data.idToken
}

export async function login(email, password) {
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + APIKey, {
        email: email,
        password: password,
        returnSecureToken: true
    })
    return response.data.idToken
}