import { Image, Pressable, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

function IconCustom({ item, onPress, chooseCategory }) {
    return (
        <Pressable
            style={[chooseCategory === item.name ? styles.pressed : null, styles.imgContainer]}
            onPress={() => onPress(item.name)}
        >
            <Image source={item.img} style={styles.img} />
        </Pressable>
    );
}
const styles = StyleSheet.create({
    pressed: {
        backgroundColor: COLORS.primary
    },
    imgContainer: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.medium,
        borderWidth: 1,
        borderColor: COLORS.primary
    },
    img: {
        width: 30,
        height: 30
    }
})
export default IconCustom;