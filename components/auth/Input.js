import { View, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

function Input({
    label,
    onBlur,
    secure,
    onUpdateValue,
    value,
}) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput
                onBlur={onBlur}
                style={styles.input}
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
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        color: COLORS.secondary,
        color: "white",
        backgroundColor: COLORS.primary,
        borderRadius: 4,
        fontSize: 16,
    },
});