import { StyleSheet } from "react-native";
import { View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS, SIZES } from "../../constants/theme";

function Carousel(props) {
    const slides = [
        "https://cdn.dribbble.com/userupload/6717565/file/original-fe80d110e317bb7582f3fe9498048620.jpg?resize=400x300&vertical=center",
        "https://cdn.dribbble.com/userupload/6233916/file/original-f98cb646aa6342aa889d0ef039893836.png?resize=400x300&vertical=center",
        "https://cdn.dribbble.com/userupload/5886956/file/original-a4b124a285662337393aef23db2acfa1.png?resize=400x300&vertical=center"
    ]
    return (
        <View style={styles.carouselContainer}>
            <SliderBox
                images={slides}
                inactiveDotColor={COLORS.primary}
                ImageComponentStyle={{ borderRadius: SIZES.medium, width: '95%' }}
                autoplayInterval={5000}
                autoplay
                circleLoop
            />
        </View>
    );
}
const styles = StyleSheet.create({
    carouselContainer: {
        width: "100%",
        height: 200,
        marginTop: SIZES.xSmall,
        marginBottom: SIZES.large,
        alignItems: "center",
    }
})
export default Carousel;