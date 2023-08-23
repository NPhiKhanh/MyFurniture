import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants/theme";
import IconButton from "../components/UI/IconButton";
import CartView from '../components/cart/CartView'
import { useSelector } from "react-redux";
import ButtonCustom from "../components/UI/ButtonCustom";
import { countCartItems, totalCartItems } from "../redux/selector";
import { Image } from "react-native";

function CartScreen(props) {
    const data = useSelector(state => state.product.cartList)
    const selectedQuantity = useSelector(countCartItems)
    const totalPrice = useSelector(totalCartItems)

    let content = (
        <View style={{ flex: 1, alignItems: "center" }}>
            <Image style={styles.cartImg} source={require('../assets/imgs/cartShop.jpg')} />
        </View>
    )
    if (data.length > 0) {
        content = (
            <>
                <FlatList
                    style={styles.scrollView}
                    data={data}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => <CartView item={item} />}
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                />

                <View style={styles.amountAndPrice}>
                    <Text style={styles.text}>{`Selected: ${selectedQuantity}`}</Text>
                    <Text style={styles.text}>{`Total: $${totalPrice}`}</Text>
                </View>
                <View style={styles.checkoutContainer}>
                    <ButtonCustom>Checkout</ButtonCustom>
                </View>
            </>
        )
    }

    return (
        <SafeAreaView style={styles.wrapper}>

            <View style={styles.container}>
                <Text style={styles.popular}>Cart</Text>
            </View>

            {content}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: SIZES.medium,
        flex: 1,
    },
    scrollView: {
        marginTop: SIZES.sLarge,
        marginBottom: SIZES.large,
        height: 300
    },
    container: {
        marginTop: SIZES.medium,
    },
    popular: {
        fontFamily: "bold",
        fontSize: SIZES.xlarge,
        color: COLORS.primary
    },
    checkoutContainer: {
        alignItems: "center"
    },
    amountAndPrice: {
        marginBottom: SIZES.medium,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text: {
        fontFamily: 'bold',
        fontSize: SIZES.medium,
    },
    cartImg: {
        resizeMode: 'contain',
        width: SIZES.width - 100,
        height: SIZES.height - 100
    }
})
export default CartScreen;