import { useState } from 'react';
import { login } from '../api/userApi';
import AuthContent from '../components/auth/AuthContent';
import LoadingOverlay from '../components/UI/LoadingOverlay'
import { Alert, Image, StyleSheet, View } from 'react-native';
import { authenticate } from '../redux/authSlice';
import { useDispatch } from 'react-redux';

function LoginScreen() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const dispatch = useDispatch()

    const logInHandler = async (email, password) => {
        setIsAuthenticated(true)
        try {
            const token = await login(email, password)
            dispatch(authenticate(token))
        } catch (error) {
            Alert.alert("Login failed", error.response.data.error.message)
        }
        setIsAuthenticated(false)
    }

    if (isAuthenticated) {
        return <LoadingOverlay />
    }

    return (
        <View style={{ flex: 1 }}>
            <Image source={require('../assets/imgs/background.jpg')} style={styles.img} />
            <AuthContent isLogin onAuthenticate={logInHandler} />
        </View>
    )
}
const styles = StyleSheet.create({
    img: {
        width: 400,
        height: 810
    }
})
export default LoginScreen;