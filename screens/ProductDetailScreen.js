import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import IconButton from "../components/UI/IconButton";
import ButtonCustom from "../components/UI/ButtonCustom"
import { COLORS, SIZES } from "../constants/theme";
import { useDispatch, useSelector } from "react-redux";
import { addFurniture, removeFurniture } from '../redux/favoriteSlice'
import { useLayoutEffect, useState } from "react";
import { getProduct } from "../api/productApi";


function ProductDetailScreen({ navigation, route }) {
    const { id } = route.params
    const [product, setProduct] = useState({})
    const [amount, setAmount] = useState(1)

    const increaseAmountHandler = () => {
        setAmount(pre => pre + 1)
    }
    const decreaseAmountHandler = () => {
        if (amount > 1) {
            setAmount(pre => pre - 1)
        }
    }

    useLayoutEffect(() => {
        (async () => {
            try {
                const response = await getProduct(id)
                setProduct(response)
            } catch (error) {
                console.error(error);
            }
        })()
    }, [])

    const colorsList = [
        { id: 1, color: "#B4AD9F" },
        { id: 2, color: "#9E8D7B" },
        { id: 4, color: "#2c6e49" },
        { id: 3, color: "#B04723" },
        { id: 5, color: "#725052" },
    ]

    const favoriteIds = useSelector(state => state.favorite.ids)
    const dispatch = useDispatch()

    const haveFavoriteId = favoriteIds.includes(id)

    const favoriteButtonHandler = () => {
        if (haveFavoriteId) {
            dispatch(removeFurniture({ id: id }))
        } else {
            dispatch(addFurniture({ id: id }))
        }
    }
    return (
        <ScrollView style={styles.container}>

            <View style={styles.upperRow}>
                <IconButton name='arrow-back-circle' color={COLORS.primary} size={30} onPress={() => navigation.goBack()} />
                <IconButton name='heart' color={haveFavoriteId ? COLORS.pink : "gray"} size={30} onPress={favoriteButtonHandler} />
            </View>

            <Image
                style={styles.img}
                source={{ uri: product.imgUrl }}
            />

            <View style={styles.productInfo}>
                <Text style={styles.productTitle} numberOfLines={2}>{product.title}</Text>
                <View style={styles.productPrice}>
                    <Text style={styles.price}>${product.price}</Text>
                </View>
            </View>

            <View style={styles.colors}>
                {colorsList.map((item) => (
                    <IconButton
                        style={styles.color}
                        key={item.color}
                        name="water"
                        color={item.color}
                        size={36}
                    />
                ))}
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.description}>
                    {product.description}
                </Text>
            </View>

            <View style={styles.amountAndTotal}>
                <View style={styles.amount}>
                    <IconButton name="remove" size={20} onPress={decreaseAmountHandler} />
                    <Text style={styles.amountText}>{amount}</Text>
                    <IconButton name="add" size={20} onPress={increaseAmountHandler} />
                </View>
                <Text style={styles.total}>Total:  ${amount * product.price}</Text>
            </View>

            <ButtonCustom>Add to cart</ButtonCustom>

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: SIZES.medium
    },
    upperRow: {
        width: SIZES.width - 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: SIZES.large,
        position: "absolute",
        top: SIZES.sLarge,
        zIndex: 99,
    },
    img: {
        aspectRatio: 1,
        resizeMode: "cover",
    },
    productInfo: {
        width: SIZES.width - 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: SIZES.medium,
        marginHorizontal: 30,
        // backgroundColor: "green"
    },
    productTitle: {
        width: 250,
        fontFamily: 'bold',
        fontSize: SIZES.large,
    },
    productPrice: {
        height: 50,
        padding: SIZES.small,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.primary
    },
    price: {
        fontFamily: 'bold',
        fontSize: SIZES.large,
        color: COLORS.secondary
    },
    colors: {
        width: SIZES.width - 60,
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 30,
        marginTop: SIZES.small
    },
    color: {
        marginHorizontal: SIZES.xSmall
    },
    descriptionContainer: {
        marginHorizontal: SIZES.large,
        marginTop: SIZES.small
    },
    descriptionTitle: {
        fontFamily: "bold",
        fontSize: SIZES.medium
    },
    description: {
        fontFamily: "regular",
        fontSize: SIZES.small,
        textAlign: "justify"
    },
    amountAndTotal: {
        width: SIZES.width - 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: SIZES.large,
        marginVertical: SIZES.large
    },
    amount: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    amountText: {
        fontSize: SIZES.medium,
        marginHorizontal: SIZES.xSmall
    },
    total: {
        fontFamily: "medium",
        fontSize: SIZES.medium
    }
})
export default ProductDetailScreen;