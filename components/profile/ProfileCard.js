import { StyleSheet, View, Text } from "react-native";
import IconButton from "../UI/IconButton";
import { COLORS, SIZES } from "../../constants/theme";

function ProfileCard({ titleText, subTitleText, nameIcon }) {
    return (
        <View style={styles.profileContainer}>
            <View style={styles.profileInfor}>
                <IconButton
                    name={nameIcon}
                    color={COLORS.primary}
                    size={24}
                />
                <View style={styles.profileDetail}>
                    <Text style={styles.title} numberOfLines={1}>{titleText}</Text>
                    {subTitleText ? <Text style={styles.subTitle} numberOfLines={1}>{subTitleText}</Text> : null}
                </View>
            </View>
            <View>
                <IconButton
                    name='chevron-forward'
                    color={COLORS.primary}
                    size={24}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: SIZES.small
    },
    profileInfor: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    profileDetail: {
        marginLeft: SIZES.small
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.medium
    },
    subTitle: {
        fontFamily: "regular",
        fontSize: SIZES.small,
        color: "gray"
    }
})
export default ProfileCard;