import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import IconButton from "../UI/IconButton";
import { COLORS, SIZES, SHADOWS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

function ProductCartView({ item }) {
    const navigation = useNavigation()

    return (
        <Pressable onPress={() => navigation.navigate('ProductDetail', { id: item._id })}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image
                        source={{ uri: item.imgUrl }}
                        style={styles.img}
                    />
                </View>
                <View style={styles.detail}>
                    <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                    <Text style={styles.price} numberOfLines={1}>${item.price}</Text>
                </View>
                {/* <IconButton name='heart' size={28} color={haveFavoriteId ? COLORS.pink : "gray"} style={styles.heartBtn} /> */}
            </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    container: {
        width: 170,
        height: 240,
        borderRadius: SIZES.medium,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    imgContainer: {
        width: '100%',
        height: '70%',
        borderRadius: SIZES.medium,
        overflow: "hidden"
    },
    img: {
        aspectRatio: 1,
        resizeMode: "cover"
    },
    detail: {
        padding: SIZES.xSmall,
        paddingBottom: SIZES.medium,
    },
    title: {
        fontFamily: 'bold',
        fontSize: SIZES.large,
    },
    price: {
        fontFamily: 'bold',
        fontSize: SIZES.medium,
        color: 'gray'
    },
    heartBtn: {
        position: "absolute",
        top: SIZES.xSmall,
        right: SIZES.xSmall
    }

})
export default ProductCartView;