import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import IconButton from '../UI/IconButton';
import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { addCheckedItem, decreaseQuantity, increaseQuantity, removeCheckedItem, removeFromCart } from '../../redux/productSlice';
import { useDispatch } from 'react-redux';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

function CartView({ item }) {
    const dispatch = useDispatch()
    const [isChecked, setIsChecked] = useState(false)

    const chooseHanlder = () => {
        setIsChecked(pre => !pre)
        if (!isChecked) {
            dispatch(addCheckedItem(item))
        } else {
            dispatch(removeCheckedItem(item))
        }
    }

    const renderDeleteButton = () => {
        return (
            <IconButton
                name="trash-outline"
                color={COLORS.secondary} size={24}
                style={styles.deleteButton}
                onPress={() => {
                    dispatch(removeFromCart(item))
                    dispatch(removeCheckedItem(item))
                }}
            />
        )
    }

    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderDeleteButton}>
                <View style={styles.cartContainer}>
                    <IconButton style={styles.ellipse} name={isChecked ? 'checkmark-circle-outline' : 'ellipse-outline'} size={24} onPress={chooseHanlder} />
                    <View style={styles.cartWrapper}>
                        <View style={styles.cartInfor}>
                            <View>
                                <Image
                                    style={styles.cartImg}
                                    source={{ uri: item.imgUrl }}
                                />
                            </View>
                            <View style={styles.cartText}>
                                <Text style={styles.cartTitle} numberOfLines={2}>{item.title}</Text>
                                <Text style={styles.cartPrice}>${item.price}</Text>
                            </View>
                        </View>
                        <View style={styles.amount}>
                            <IconButton name="remove" size={20} onPress={() => dispatch(decreaseQuantity(item))} />
                            <Text style={styles.amountText}>{item.quantity}</Text>
                            <IconButton name="add" size={20} onPress={() => dispatch(increaseQuantity(item))} />
                        </View>
                    </View>
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    );
}
const styles = StyleSheet.create({
    cartContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        marginBottom: SIZES.medium,
    },
    ellipseWrraper: {
        alignItems: 'center'
    },
    ellipse: {
        marginLeft: -(SIZES.xlarge + 4),
        marginRight: SIZES.xSmall - 4,
    },
    cartWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    cartInfor: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginRight: 30
    },
    cartImg: {
        height: '100%',
        width: 80,
        aspectRatio: 1,
        resizeMode: 'cover',
        borderRadius: SIZES.small
    },
    cartText: {
        marginLeft: SIZES.small
    },
    cartTitle: {
        fontFamily: 'bold',
        fontSize: SIZES.medium,
        width: 110
    },
    cartPrice: {
        fontFamily: 'medium',
        fontSize: SIZES.medium,
        color: 'gray'
    },
    amount: {
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: - (SIZES.xlarge + 4),
    },
    amountText: {
        width: 20,
        textAlign: 'center',
        fontSize: SIZES.medium,
        marginHorizontal: SIZES.xSmall
    },
    deleteButton: {
        width: 60,
        height: 90,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default CartView;