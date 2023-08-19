import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ name, color, size, onPress, style }) {
    return (
        <Pressable
            style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
            onPress={onPress}
        >
            <Ionicons name={name} color={color} size={size} />
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: 16,
    },
    pressed: {
        opacity: 0.7,
    },
});