import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';


function ButtonCustom({ children, onPress, style }) {
    return (
        <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    );
}

export default ButtonCustom;

const styles = StyleSheet.create({
    button: {
        width: SIZES.width - 40,
        marginHorizontal: SIZES.large,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.primary,
        paddingVertical: SIZES.medium,
        paddingHorizontal: 12,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        textAlign: 'center',
        color: COLORS.secondary,
        fontSize: SIZES.medium,
        fontWeight: 'bold'
    },
});