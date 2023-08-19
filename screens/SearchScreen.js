import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../components/home/HeaderHome";
import { SIZES } from "../constants/theme";

function SearchScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderHome iconL={"camera-outline"} iconR={"search-outline"} />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.medium
    },
})
export default SearchScreen;