import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView, TextInput } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";


const EditProfileScreen = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SimpleBackground>

            <View style={styles.main} >

                <ImageBackground source={require("../assets/image/1stProfilePhoto.jpg")} style={styles.firstProfilePhoto} >


                    <LinearGradient
                        colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0)']}
                        start={{ x: 0, y: 0 }}   // bottom-right
                        end={{ x: 0, y: 1 }}     // top-left
                        style={{
                            ...StyleSheet.absoluteFillObject,
                        }}>

                        <View style={{ flexDirection: 'row', paddingHorizontal: responsiveWidth(2) }}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("ProfileScreen")}
                                style={styles.back} >
                                <Icon
                                    name='arrow-back'
                                    color={colors.arrowBackColor}
                                    size={size.arrowBackSize}
                                />
                            </TouchableOpacity>

                            <View style={{ flex: 1, alignItems: 'center', margin: responsiveWidth(5) }}>
                                <Text style={styles.txtProfile}>Profile</Text>
                            </View>

                        </View>
                    </LinearGradient>
                </ImageBackground>


                <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', bottom: responsiveHeight(9) }}>
                    <Image source={require("../assets/image/2ndProfilePhoto.jpg")} style={styles.secondProfilePhoto} />
                    <View style={styles.iconCamerabg}>
                        <Icon name='photo-camera' color='#FFFFFF' size={responsiveFontSize(14)} style={{ margin: responsiveWidth(0.8) }} />
                    </View>

                    <View style={{ marginTop: responsiveHeight(9), bottom: responsiveHeight(6) }}>
                        <View style={styles.txtInputbg}>
                            <TextInput
                                placeholder="Full name"
                                placeholderTextColor='#B5B5B5'
                                value={name}
                                onChangeText={() => setName()}
                                style={styles.txtInput}
                            />
                        </View>

                        <View style={styles.txtInputbg}>
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor='#B5B5B5'
                                value={email}
                                onChangeText={() => setEmail()}
                                style={styles.txtInput}
                            />
                        </View>

                        <View style={styles.txtInputbg}>
                            <TextInput
                                placeholder="Phone number"
                                placeholderTextColor='#B5B5B5'
                                value={password}
                                onChangeText={() => setPassword()}
                                style={styles.txtInput}
                            />
                        </View>
                    </View>


                    <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
                        <View style={styles.btnbg}>
                            <Text style={styles.btn}>Change</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        </SimpleBackground >

    )
};


const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    back: {
        paddingTop: responsiveHeight(3)
    },
    txtProfile: {
        fontSize: size.secondHeader,
        fontWeight: '600',
        color: colors.headerTxtColor,
    },
    firstProfilePhoto: {
        width: responsiveWidth(100),
        height: responsiveHeight(37),
        alignSelf: 'center'
    },
    secondProfilePhoto: {
        width: responsiveWidth(30),
        height: responsiveHeight(15),
        borderRadius: responsiveFontSize(121),
        borderWidth: 1.69,
        borderColor: colors.borderColor,
    },
    iconCamerabg: {
        marginLeft: responsiveWidth(25),
        bottom: responsiveHeight(5),
        backgroundColor: '#000000',
        width: responsiveWidth(5),
        height: responsiveHeight(2.5),
        borderRadius: responsiveFontSize(50),
        borderWidth: 1,
        borderColor: '#FFFFFF',
    },
    txtInputbg: {
        width: size.TextInputWidth,
        height: size.TextInputHeight,
        borderRadius: size.buttonBorderRadios,
        backgroundColor: colors.textInputbgColor,
        margin: responsiveWidth(1.5),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    txtInput: {
        fontSize: size.TextInputFontSize,
        fontWeight: '400',
        color: colors.textInputColor,
        paddingHorizontal: responsiveWidth(4)
    },
    btnbg: {
        width: size.buttonWidth,
        height: size.buttonHeight,
        borderRadius: size.buttonBorderRadios,
        backgroundColor: colors.buttonbgColor,
        marginTop: responsiveHeight(1),
        borderWidth: 1,
        borderColor: colors.borderColor,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        fontSize: size.buttonText,
        fontWeight: '600',
        color: colors.buttonTxtColor,
    }

});

export default EditProfileScreen;