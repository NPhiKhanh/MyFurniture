import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import FlatButton from '../UI/FlatButton';
import AuthForm from './AuthForm';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/theme';

function AuthContent({ isLogin, onAuthenticate }) {
    const navigation = useNavigation()

    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
        confirmPassword: false,
    });

    function switchAuthModeHandler() {
        if (isLogin) {
            navigation.replace('Signup')
        } else {
            navigation.replace('Login')
        }
    }

    function submitHandler(credentials) {
        let { email, password, confirmPassword } = credentials;

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 6;
        const passwordsAreEqual = password === confirmPassword;

        if (!emailIsValid || !passwordIsValid || (!isLogin && !passwordsAreEqual)) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                email: !emailIsValid,
                password: !passwordIsValid,
                confirmPassword: !passwordIsValid || !passwordsAreEqual,
            });
            return;
        }
        onAuthenticate(email, password);
    }

    return (
        <View style={styles.authContent}>
            <AuthForm
                isLogin={isLogin}
                onSubmit={submitHandler}
                credentialsInvalid={credentialsInvalid}
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
        top: 50,
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