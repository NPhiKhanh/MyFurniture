import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants/theme";
import IconButton from "../components/UI/IconButton";
import ProductCartView from "../components/product/ProductCartView";
import { useSelector } from "react-redux";

function ProductbyCategoryScreen({ navigation, route }) {
    const data = useSelector(state => state.product.productList)
    const cartNumber = useSelector(state => state.product.cartList).length
    const { categoryName } = route.params

    const newList = data.filter(product => product.category === categoryName)
    return (
        <SafeAreaView style={styles.wrapper}>

            <View style={styles.container}>
                <View style={styles.navigattionHeader}>
                    <IconButton name='chevron-back-outline' size={24} onPress={() => navigation.goBack()} />
                    <Text style={styles.popular}>All Products</Text>
                </View>
                <View style={styles.cartContainer}>
                    {cartNumber > 0 && <View style={styles.cartCount}>
                        <Text style={styles.cartNumber}>{cartNumber}</Text>
                    </View>}
                    <IconButton name="cart-outline" size={24} color="black" />
                </View>
            </View>

            <FlatList
                style={styles.scrollView}
                data={newList}
                keyExtractor={item => item._id}
                renderItem={({ item }) => <ProductCartView item={item} />}
                numColumns={2}
                contentContainerStyle={{ rowGap: SIZES.medium }}
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
    navigattionHeader: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    popular: {
        fontFamily: "bold",
        fontSize: SIZES.xlarge,
        color: COLORS.primary,
        marginLeft: SIZES.small
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
export default ProductbyCategoryScreen;