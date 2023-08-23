import { TextInput, View, Text, FlatList, Image } from 'react-native';
import IconButton from '../../components/UI/IconButton'
import { COLORS, SIZES } from '../../constants/theme';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { searchProduct } from '../../api/productApi';
import ProductSearch from '../product/ProductSearch';

function HeaderHome({ iconL, iconR, isSearchScreen }) {
    const navigation = useNavigation()
    const [searchKey, setSearchKey] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const searchButtonHandler = async () => {
        try {
            const result = await searchProduct(searchKey)
            setSearchResult(result)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <View style={styles.headerContainer}>
                <View style={styles.inputContainer}>
                    <IconButton name={iconL} size={24} color="gray" />
                    <View style={styles.textInputContainer}>
                        <TextInput
                            value={searchKey}
                            onPressIn={() => navigation.navigate('Search')}
                            onChangeText={setSearchKey}
                            placeholder='What are you looking for ?'
                            style={styles.textInput}
                        />
                    </View>
                    <IconButton name={iconR} size={24} color={COLORS.secondary} style={styles.camera} onPress={searchKey ? searchButtonHandler : (() => setSearchResult([]))} />
                </View>
                <View style={styles.cartContainer}>
                    <View style={styles.cartCount}>
                        <Text style={styles.cartNumber}>7</Text>
                    </View>
                    <IconButton name="cart-outline" size={24} color="black" />
                </View>
            </View>
            {searchResult.length === 0 && isSearchScreen ? (
                <View style={{ flex: 1 }}>
                    <Image style={styles.searchImg} source={require('../../assets/imgs/Pose23.png')} />
                </View>
            ) : (
                <FlatList
                    data={searchResult}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => <ProductSearch item={item} />}
                />
            )}
        </>

    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        marginVertical: SIZES.xSmall,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '90%',
        marginRight: SIZES.small
    },
    textInputContainer: {
        width: '80%',
        borderRadius: SIZES.medium,
    },
    textInput: {
        width: '100%',
        height: '100%',
        paddingHorizontal: SIZES.small,
        fontFamily: "regular"
    },
    camera: {
        width: 50,
        height: '100%',
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary
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
    },
    searchImg: {
        resizeMode: 'contain',
        width: SIZES.width - 100,
        height: SIZES.height - 300
    }
})

export default HeaderHome;