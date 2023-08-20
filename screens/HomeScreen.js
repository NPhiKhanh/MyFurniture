import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet } from "react-native";
import { SIZES } from "../constants/theme";
import HeaderHome from "../components/home/HeaderHome";
import TitleHome from "../components/home/TitleHome";
import Carousel from "../components/home/Carousel";
import CategoryList from "../components/home/CategoryList";
import Heading from "../components/home/Heading";
import ProductRow from "../components/product/ProductRow";
import { useEffect, useState } from "react";
import { getAllProduct } from "../api/productApi";
import { useDispatch } from "react-redux";
import { setProduct } from '../redux/productSlice'

function HomeScreen(props) {
    const [chooseCategory, setChooseCategory] = useState('chair')
    const dispatch = useDispatch()

    const changeCategoryHanlder = (data) => {
        setChooseCategory(data)
    }
    useEffect(() => {
        (async () => {
            try {
                const response = await getAllProduct(chooseCategory)
                dispatch(setProduct(response))
            } catch (error) {
                console.error(error.response.data);
            }
        })()
    }, [chooseCategory])

    return (
        <SafeAreaView style={styles.container}>
            <HeaderHome iconL={"search-outline"} iconR={"camera-outline"} />
            <ScrollView style={styles.scrollView}>
                <TitleHome />
                <Carousel />
                <CategoryList onChangeCategory={changeCategoryHanlder} chooseCategory={chooseCategory} />
                <Heading chooseCategory={chooseCategory} />
                <ProductRow chooseCategory={chooseCategory} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.medium
    },
    scrollView: {
        marginBottom: SIZES.xlarge * 3
    }
})

export default HomeScreen;