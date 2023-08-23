import { View, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

function Input({
    label,
    keyboardType,
    secure,
    onUpdateValue,
    value,
    isInvalid,
}) {
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
                {label}
            </Text>
            <TextInput
                style={[styles.input, isInvalid && styles.inputInvalid]}
                keyboardType={keyboardType}
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
            />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
    },
    label: {
        fontFamily: 'medium',
        color: COLORS.secondary,
        marginBottom: 4,
    },
    labelInvalid: {
        color: 'red',
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        color: COLORS.secondary,
        color: "white",
        backgroundColor: COLORS.primary,
        borderRadius: 4,
        fontSize: 16,
    },
    inputInvalid: {
        backgroundColor: "red",
    },
});