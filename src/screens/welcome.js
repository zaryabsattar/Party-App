import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Image, Text, View, StyleSheet, ScrollView, } from "react-native";
import PartyBackground from "../component/secondbgColor";
import { images } from "../services/utilites/assest/images";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import { colors } from "../services/utilites/color";
import {appfonts} from "../services/utilites/assest/fonts"

const WelcomeScreen = () => {

    const navigation = useNavigation()

    return (
        <PartyBackground>
                <View style={styles.main}>
                    <Image source={require("../assets/image/Vector1.png")} style={styles.imgA} />
                    <Image source={require("../assets/image/Ellipse1104.png")} style={styles.imgB} />
                    <Image source={require("../assets/image/Ellipse1105.jpg")} style={styles.imgC} />
                    <Image source={images.applogo} style={styles.imgD} />
                    <Image source={require("../assets/image/Ellipse1107.png")} style={styles.imgE} />
                    <Image source={require("../assets/image/Ellipse1108.png")} style={styles.imgF} />


                    <View style={styles.TxtMain}>
                        <Text style={styles.TxtA}>Welcome!</Text>
                        <Text style={styles.TxtB}>
                            Don’t feel like staying at home? Do you
                            want to know which party is LIT? Easily
                            take a look at the parties that are LIVE or
                            start a live stream yourself by creating an
                            account for FREE.
                        </Text>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate("RegisterScreen")}
                        >
                            <Text style={styles.btnTxt}>Create Account</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            gap: responsiveWidth(1),
                            marginTop: responsiveHeight(1)
                        }}>

                        <Text
                            style={{
                                fontSize: responsiveFontSize(16),
                                color: colors.textColor,
                            }}>
                            Already have account?
                        </Text>

                        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")} >

                            <Text
                                style={{
                                    fontSize: responsiveFontSize(16),
                                    color: '#F83094',
                                    fontFamily: appfonts.openSansSemiBold,

                                }}>
                                Login
                            </Text>

                        </TouchableOpacity>
                    </View>

                </View>
        </PartyBackground>
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    imgA: {
        position: 'absolute',
        marginTop: responsiveHeight(18),
        width: responsiveWidth(98),
        height: responsiveHeight(47)
    },
    imgB: {
        position: 'absolute',
        width: responsiveWidth(25),
        height: responsiveHeight(13),
        borderRadius: responsiveWidth(100),
        marginTop: responsiveHeight(6),
        marginLeft: responsiveWidth(5)
    },
    imgC: {
        position: 'absolute',
        width: responsiveWidth(20),
        height: responsiveHeight(10),
        borderRadius: responsiveWidth(100),
        marginLeft: responsiveWidth(80),
        marginTop: responsiveHeight(18)
    },
    imgD: {
        position: 'absolute',
        height: size.applogoWidth,
        width: size.applogoHeight,
        marginTop: responsiveHeight(20),
        marginLeft: responsiveWidth(27)
    },
    imgE: {
        position: 'absolute',
        width: responsiveWidth(18),
        height: responsiveHeight(15),
        borderTopRightRadius: responsiveWidth(100),
        borderBottomRightRadius: responsiveWidth(100),
        marginTop: responsiveHeight(40),
    },
    imgF: {
        width: responsiveWidth(20),
        height: responsiveHeight(10),
        borderRadius: responsiveWidth(100),
        marginTop: responsiveHeight(53),
        marginLeft: responsiveWidth(80)
    },
    TxtMain: {
        paddingHorizontal: responsiveWidth(7)
    },
    TxtA: {
        fontSize: responsiveFontSize(36),
        color: colors.textColor,
        fontFamily: appfonts.openSansBold
    },
    TxtB: {
        fontSize: responsiveFontSize(17),
        color: colors.textColor,
        fontFamily: appfonts.openSansRegular,
    },
    btn: {
        marginTop: responsiveHeight(2),
        width: responsiveWidth(80),
        height: size.buttonHeight,
        borderWidth: 1,
        borderColor: colors.borderColor,
        backgroundColor: colors.buttonbgColor,
        borderRadius: size.buttonBorderRadios,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btnTxt: {
        color: colors.buttonTxtColor,
        fontSize: size.buttonText,
        textAlign: 'center',
        fontFamily: appfonts.openSansSemiBold
    },


});

export default WelcomeScreen;