import { StyleSheet, View, Text } from 'react-native';
import ButtonCustom from '../../components/UI/ButtonCustom'
import Input from './Input';
import { SIZES } from '../../constants/theme';
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

function AuthForm({ isLogin, onSubmit }) {

    let schema
    if (!isLogin) {
        schema = yup.object({
            username: yup
                .string()
                .required('Please enter your username')
                .min(6, 'Please enter at least 6 characters'),
            password: yup
                .string()
                .required('Please enter your password')
                .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, { message: "Please enter at least 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit" }),
            confirmPassword: yup
                .string()
                .required('Please retype your password')
                .oneOf([yup.ref('password')], 'Password does not match '),
        });
    } else {
        schema = yup.object({
            username: yup
                .string()
                .required('Please enter your username')
                .min(6, 'Please enter at least 6 characters'),
            password: yup
                .string()
                .required('Please enter your password')
                .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, { message: "Please enter the correct password" }),
        });
    }

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
            confirmPassword: "",
        },
        resolver: yupResolver(schema)
    })

    function submitHandler(data) {
        onSubmit({
            username: data.username,
            password: data.password,
        });
    }

    return (
        <View style={styles.form}>
            <View>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Username"
                            onBlur={onBlur}
                            onUpdateValue={onChange}
                            value={value}
                        />
                    )}
                    name="username"
                />
                {errors.username && <Text style={styles.err}>{errors.username.message}</Text>}

                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Password"
                            onBlur={onBlur}
                            onUpdateValue={onChange}
                            value={value}
                            secure
                        />
                    )}
                    name="password"
                />
                {errors.password && <Text style={styles.err}>{errors.password.message}</Text>}

                {!isLogin && (
                    <>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    label="Confirm Password"
                                    onBlur={onBlur}
                                    onUpdateValue={onChange}
                                    value={value}
                                    secure
                                />
                            )}
                            name="confirmPassword"
                        />
                        {errors.confirmPassword && <Text style={styles.err}>{errors.confirmPassword.message}</Text>}
                    </>

                )}
                <View style={styles.buttons}>
                    <ButtonCustom onPress={handleSubmit(submitHandler)} style={styles.buttonCustom}>
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
    },
    err: {
        color: 'red',
    }
});