import { StyleSheet, View } from 'react-native';
import FlatButton from '../UI/FlatButton';
import AuthForm from './AuthForm';
import { useNavigation } from '@react-navigation/native';

function AuthContent({ isLogin, onAuthenticate }) {
    const navigation = useNavigation()

    function switchAuthModeHandler() {
        if (isLogin) {
            navigation.replace('Signup')
        } else {
            navigation.replace('Login')
        }
    }

    function submitHandler(credentials) {
        let { username, password } = credentials;
        onAuthenticate(username, password);
    }

    return (
        <View style={styles.authContent}>
            <AuthForm
                isLogin={isLogin}
                onSubmit={submitHandler}
            />
            <View style={styles.buttons}>
                <FlatButton onPress={switchAuthModeHandler}>
                    {isLogin ? "Don't have an acount ? Sign Up" : "Log in here"}
                </FlatButton>
            </View>
        </View>
    );
}

export default AuthContent;

const styles = StyleSheet.create({
    authContent: {
        position: 'absolute',
        top: 100,
        left: 0,
        right: 0,
        marginTop: 64,
        marginHorizontal: 32,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#0b132b'
    },
    buttons: {
        marginTop: 8,
    },
});