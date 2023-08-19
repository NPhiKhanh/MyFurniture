import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const COLORS = {
    primary: "#001d3d",
    secondary: "#ffd60a",

    pink: "#da2c38",
}

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xlarge: 24,
    sLarge: 44,
    height,
    width
}

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    }
}

export { COLORS, SIZES, SHADOWS }