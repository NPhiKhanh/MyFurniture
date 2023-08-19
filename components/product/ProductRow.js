import { FlatList, StyleSheet, Text } from "react-native";
import ProductCartView from "./ProductCartView";
import { SIZES } from "../../constants/theme";
import { useSelector } from "react-redux";

function ProductRow(props) {
    const data = useSelector(state => state.product.productList)
    return (
        <FlatList
            data={data}
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