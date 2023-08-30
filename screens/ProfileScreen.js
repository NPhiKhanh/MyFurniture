import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import ButtonCustom from '../components/UI/ButtonCustom'
import ProfileCard from "../components/profile/ProfileCard";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/authSlice";
import * as ImagePicker from 'expo-image-picker';
import IconButton from "../components/UI/IconButton";
import { useState } from "react";

function ProfileScreen(props) {
    const dispatch = useDispatch()
    const [image, setImage] = useState(null);

    const takeImg = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        } return
    }

    return (
        <View style={styles.container}>
            <View style={styles.imgWrapper} >
                <View style={styles.avatar}>
                    <Image source={{ uri: image }} style={styles.imgAvatar} />
                    <IconButton name='camera' color="white" size={20} onPress={takeImg} style={styles.imgPick} />
                </View>
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
            <ButtonCustom onPress={() => dispatch(logOut())}>Log out</ButtonCustom>
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
        alignItems: "center",
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
        marginBottom: SIZES.xlarge,
        marginHorizontal: SIZES.medium,
    },
    detailsWrapper: {
        marginTop: SIZES.medium
    },
    detailsText: {
        fontFamily: "medium",
        fontSize: SIZES.medium,
        color: 'gray'
    },
    imgPick: {
        padding: 6,
        position: "absolute",
        bottom: 0,
        right: SIZES.small,
        backgroundColor: '#4E4F50'
    },
    imgAvatar: {
        width: '100%',
        height: '100%',
        borderRadius: 70,
        aspectRatio: 1,
    }
})
export default ProfileScreen;