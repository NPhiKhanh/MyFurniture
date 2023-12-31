import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { signUp } from '../api/userApi';
import AuthContent from '../components/auth/AuthContent';
import LoadingOverlay from '../components/UI/LoadingOverlay'
import { authenticate } from '../redux/authSlice';
import { Image, StyleSheet, View } from 'react-native';

function SignupScreen({ navigation }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const dispatch = useDispatch()

    const signUpHandler = async (username, password) => {
        setIsAuthenticated(true)
        try {
            await signUp(username, password)
            // dispatch(authenticate(token))
        } catch (error) {
            Alert.alert("Login failed", error.response.data.error.message)
        }
        setIsAuthenticated(false)
        navigation.replace('Login')
    }

    if (isAuthenticated) {
        return <LoadingOverlay />
    }
    return (
        <View style={{ flex: 1 }}>
            <Image source={require('../assets/imgs/background.jpg')} style={styles.img} />
            <AuthContent onAuthenticate={signUpHandler} />
        </View>

    )
}
const styles = StyleSheet.create({
    img: {
        width: 400,
        height: 850
    }
})

export default SignupScreen;