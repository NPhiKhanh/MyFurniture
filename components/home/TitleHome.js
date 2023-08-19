import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { COLORS, SIZES } from '../../constants/theme'

function TitleHome(props) {
    return (
        <View style={styles.titleContainer} >
            <Text style={styles.title('#5e548e')}>Find The Most</Text>
            <Text style={styles.title(COLORS.primary)}>Luxurious Furniture</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    titleContainer: {
        width: '100%'
    },
    title: (color) => ({
        fontFamily: 'bold',
        fontSize: SIZES.medium * 2,
        color: color
    })
})
export default TitleHome;