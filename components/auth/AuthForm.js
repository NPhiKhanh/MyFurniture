import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ButtonCustom from '../../components/UI/ButtonCustom'
import Input from './Input';
import { SIZES } from '../../constants/theme';

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

    // const {
    //     email: emailIsInvalid,
    //     password: passwordIsInvalid,
    //     confirmPassword: passwordsDontMatch,
    // } = credentialsInvalid;

    // function updateInputValueHandler(inputType, enteredValue) {
    //     switch (inputType) {
    //         case 'email':
    //             setEnteredEmail(enteredValue);
    //             break;
    //         case 'password':
    //             setEnteredPassword(enteredValue);
    //             break;
    //         case 'confirmPassword':
    //             setEnteredConfirmPassword(enteredValue);
    //             break;
    //     }
    // }

    const {
        email: emailIsInvalid,
        password: passwordIsInvalid,
        confirmPassword: passwordsDontMatch,
    } = credentialsInvalid;

    const [dataInput, setDataInput] = useState({
        enteredEmail: '',
        enteredPassword: '',
        enteredConfirmPassword: ''
    })

    const onChangTextHandler = (inputIdentifier, inputValue) => {
        setDataInput(state => ({ ...state, [inputIdentifier]: inputValue }))
    }

    function submitHandler() {
        onSubmit({
            email: dataInput.enteredEmail,
            password: dataInput.enteredPassword,
            confirmPassword: dataInput.enteredConfirmPassword,
        });
    }

    return (
        <View style={styles.form}>
            <View>
                <Input
                    label="Email Address"
                    onUpdateValue={(text) => onChangTextHandler('enteredEmail', text)}
                    value={dataInput.enteredEmail}
                    keyboardType="email-address"
                    isInvalid={emailIsInvalid}
                />
                <Input
                    label="Password"
                    onUpdateValue={(text) => onChangTextHandler('enteredPassword', text)}
                    secure
                    value={dataInput.enteredPassword}
                    isInvalid={passwordIsInvalid}
                />
                {!isLogin && (
                    <Input
                        label="Confirm Password"
                        onUpdateValue={(text) => onChangTextHandler('enteredConfirmPassword', text)}
                        secure
                        value={dataInput.enteredConfirmPassword}
                        isInvalid={passwordsDontMatch}
                    />
                )}
                <View style={styles.buttons}>
                    <ButtonCustom onPress={submitHandler} style={styles.buttonCustom}>
                        {isLogin ? 'Log In' : 'Sign Up'}
                    </ButtonCustom>
                </View>
            </View>
        </View>
    );
}

export default AuthForm;

const styles = StyleSheet.create({
    buttons: {
        marginTop: 12,
        alignItems: 'center'
    },
    buttonCustom: {
        width: SIZES.width - 100
    }
});