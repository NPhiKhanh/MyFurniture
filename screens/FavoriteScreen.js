import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants/theme";
import IconButton from "../components/UI/IconButton";
import ProductCartView from "../components/product/ProductCartView";
import { useSelector } from "react-redux";

function FavoriteScreen(props) {
    const furnitureList = useSelector(state => state.product.productList)
    const favoriteIdList = useSelector(state => state.favorite.ids)
    const newList = furnitureList.filter(product => favoriteIdList.includes(product._id))

    return (
        <SafeAreaView style={styles.wrapper}>

            <View style={styles.container}>
                <Text style={styles.popular}>Favorite Furniture</Text>
                <View style={styles.cartContainer}>
                    <View style={styles.cartCount}>
                        <Text style={styles.cartNumber}>7</Text>
                    </View>
                    <IconButton name="cart-outline" size={24} color="black" />
                </View>
            </View>

            <FlatList
                style={styles.scrollView}
                data={newList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductCartView item={item} />}
                numColumns={2}
                contentContainerStyle={{ rowGap: 16 }}
                columnWrapperStyle={{ justifyContent: "space-between" }}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: SIZES.medium
    },
    scrollView: {
        marginTop: SIZES.large,
        marginBottom: SIZES.xlarge * 3,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: SIZES.medium,
    },
    popular: {
        fontFamily: "bold",
        fontSize: SIZES.xlarge,
        color: COLORS.primary
    },
    cartContainer: {
        alignItems: 'flex-end',
    },
    cartCount: {
        position: 'absolute',
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        zIndex: 99
    },
    cartNumber: {
        fontSize: 10,
        fontWeight: '600',
        fontFamily: "regular",
        color: COLORS.secondary,
    }
})
export default FavoriteScreen;