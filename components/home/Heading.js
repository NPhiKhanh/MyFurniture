import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

function Heading(props) {
    const navigation = useNavigation()
    const navigateHandler = () => {
        navigation.navigate("Product")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.popular}>Popular</Text>
            <Text style={styles.viewAll} onPress={navigateHandler}>
                View all
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: SIZES.large
    },
    popular: {
        fontFamily: "bold",
        fontSize: SIZES.xlarge
    },
    viewAll: {
        fontFamily: "regular",
        color: COLORS.primary,
        textDecorationLine: "underline",
    }
})
export default Heading;