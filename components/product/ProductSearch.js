import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SHADOWS, SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

function ProductSearch({ item }) {
    const navigation = useNavigation()
    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('ProductDetail', { id: item._id })}>
            <View style={styles.img}>
                <Image source={{ uri: item.imgUrl }} style={styles.productImg} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
            </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: SIZES.small,
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        ...SHADOWS.medium,
        shadowColor: 'white',
    },
    img: {
        width: 80,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center"
    },
    productImg: {
        width: '100%',
        height: 70,
        borderRadius: SIZES.small,
        resizeMode: "cover"
    },
    textContainer: {
        marginLeft: SIZES.medium
    },
    productTitle: {
        fontSize: SIZES.medium,
        fontFamily: "bold",
    },
    productPrice: {
        fontSize: SIZES.medium,
        fontFamily: "medium",
        color: "gray"
    }
})
export default ProductSearch;