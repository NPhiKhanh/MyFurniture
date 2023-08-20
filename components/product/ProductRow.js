import { FlatList, StyleSheet, Text } from "react-native";
import ProductCartView from "./ProductCartView";
import { SIZES } from "../../constants/theme";
import { useSelector } from "react-redux";

function ProductRow({ chooseCategory }) {
    const data = useSelector(state => state.product.productList)
    const popularList = data.filter(product => product.populate === true && product.category === chooseCategory)
    return (
        <FlatList
            data={popularList}
            keyExtractor={item => item._id}
            renderItem={({ item }) => <ProductCartView item={item} />}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
            style={styles.container}
        />
    );
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    }
})
export default ProductRow;