import React, { useState } from 'react';
import { View, Text } from 'react-native';
import IconButton from '../UI/IconButton';
import { StyleSheet } from 'react-native';
import { SIZES, COLORS } from '../../constants/theme';
import { Image } from 'react-native';

function CartView({ item }) {
    const [amount, setAmount] = useState(1)
    const [toggleChoose, setToggleChoose] = useState(true)

    const chooseHanlder = () => {
        setToggleChoose(pre => !pre)
    }

    const increaseAmountHandler = () => {
        setAmount(pre => pre + 1)
    }
    const decreaseAmountHandler = () => {
        if (amount > 1) {
            setAmount(pre => pre - 1)
        }
    }
    return (
        <View style={styles.cartContainer}>
            <IconButton style={styles.ellipse} name={toggleChoose ? 'ellipse-outline' : 'checkmark-circle-outline'} size={24} onPress={chooseHanlder} />
            <View style={styles.cartWrapper}>
                <View style={styles.cartInfor}>
                    <View style={styles.cartImgWrapper}>
                        <Image
                            style={styles.cartImg}
                            source={{ uri: 'https://img.freepik.com/free-photo/furniture-modern-studio-lifestyle-green_1122-1837.jpg?size=626&ext=jpg&uid=R113150246&ga=GA1.2.315536190.1692034312&semt=sph' }}
                        />
                    </View>
                    <View style={styles.cartText}>
                        <Text style={styles.cartTitle} numberOfLines={2}>B2 lounge chair</Text>
                        <Text style={styles.cartPrice}>$165</Text>
                    </View>
                </View>
                <View style={styles.amount}>
                    <IconButton name="remove" size={20} onPress={decreaseAmountHandler} />
                    <Text style={styles.amountText}>{amount}</Text>
                    <IconButton name="add" size={20} onPress={increaseAmountHandler} />
                </View>
            </View>
        </View>
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
    cartImgWrapper: {

    },
    cartImg: {
        height: '100%',
        width: 80,
        aspectRatio: 1,
        resizeMode: 'cover'
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
})
export default CartView;