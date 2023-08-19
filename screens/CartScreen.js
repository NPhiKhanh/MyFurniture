import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants/theme";
import IconButton from "../components/UI/IconButton";
import CartView from '../components/cart/CartView'

function CartScreen(props) {
    // const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    const data = [{ id: 1 }, { id: 2 }, { id: 3 }]

    return (
        <SafeAreaView style={styles.wrapper}>

            <View style={styles.container}>
                <Text style={styles.popular}>Cart</Text>
                <View style={styles.cartContainer}>
                    <View style={styles.cartCount}>
                        <Text style={styles.cartNumber}>7</Text>
                    </View>
                    <IconButton name="cart-outline" size={24} color="black" />
                </View>
            </View>

            <FlatList
                style={styles.scrollView}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CartView item={item} />}
                contentContainerStyle={{ columnGap: SIZES.medium }}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: SIZES.medium
    },
    scrollView: {
        marginTop: SIZES.sLarge,
        marginBottom: SIZES.xlarge * 3,
        // backgroundColor: 'red',
        height: 300
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
export default CartScreen;