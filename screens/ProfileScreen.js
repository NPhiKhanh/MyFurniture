import { StyleSheet, Text, View } from "react-native";
import { SIZES } from "../constants/theme";
import ButtonCustom from '../components/UI/ButtonCustom'
import ProfileCard from "../components/profile/ProfileCard";

function ProfileScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.imgWrapper}>
                <View style={styles.avatar}></View>
            </View>
            <View style={styles.username}>
                <Text style={styles.usernameText}>Phi Khanh</Text>
            </View>
            <View style={styles.details}>
                <View style={styles.detailsWrapper}>
                    <Text style={styles.detailsText}>PROFILE</Text>
                    <ProfileCard
                        nameIcon='person-outline'
                        titleText='Profile Details'
                        subTitleText='View & Edit details'
                    />
                </View>
                <View style={styles.detailsWrapper}>
                    <Text style={styles.detailsText}>WITHDRAW</Text>
                    <ProfileCard
                        nameIcon='wallet-outline'
                        titleText='Bank Details'
                        subTitleText='Add bank or paypal account'
                    />
                </View>
                <View style={styles.detailsWrapper}>
                    <Text style={styles.detailsText}>SETTINGS</Text>
                    <ProfileCard
                        nameIcon='document-text-outline'
                        titleText='Terms of use'
                    />
                    <ProfileCard
                        nameIcon='lock-closed-outline'
                        titleText='Privacy policy'
                    />
                </View>
            </View>
            <ButtonCustom>Log out</ButtonCustom>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imgWrapper: {
        height: 200,
        width: SIZES.width,
        backgroundColor: "#adb5bd",
        alignItems: "center"
    },
    avatar: {
        width: 140,
        height: 140,
        backgroundColor: '#ced4da',
        borderRadius: 70,
        position: "absolute",
        bottom: -70,
    },
    username: {
        marginTop: SIZES.sLarge * 2,
        alignItems: "center"
    },
    usernameText: {
        fontFamily: "regular",
        fontSize: SIZES.medium
    },
    details: {
        marginTop: SIZES.medium,
        marginBottom: SIZES.large,
        marginHorizontal: SIZES.medium,
    },
    detailsWrapper: {
        marginTop: SIZES.medium
    },
    detailsText: {
        fontFamily: "medium",
        fontSize: SIZES.medium,
        color: 'gray'
    }
})
export default ProfileScreen;