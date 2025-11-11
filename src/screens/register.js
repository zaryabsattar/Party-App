import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Image, Text, TextInput, ScrollView,} from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import Icon from "react-native-vector-icons/MaterialIcons";
import FancyCardBackground from "../component/fancyCardBGground";
import { colors } from "../services/utilites/color";
import { images } from "../services/utilites/assest/images";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import KeyboardScrollVeiw  from "../services/utilites/assest/scrollVeiw";


const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <SimpleBackground>
            <KeyboardScrollVeiw>
                    <View style={styles.main}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("WelcomeScreen")}
                            style={styles.back} >
                            <Icon
                                name='arrow-back'
                                color={colors.arrowBackColor}
                                size={size.arrowBackSize}
                            />
                        </TouchableOpacity>

                        <Image source={images.applogo} style={styles.img} />

                        <FancyCardBackground>

                            <View>
                                <Text style={styles.txtR}>Register</Text>
                            </View>

                            <View style={{ alignItems: "center" }}>
                                <TextInput
                                    placeholder="Full name"
                                    placeholderTextColor='#E3E3E3'
                                    value={name}
                                    onChangeText={setName}
                                    style={styles.txtInput} />

                                <TextInput
                                    placeholder="Email"
                                    placeholderTextColor='#E3E3E3'
                                    value={email}
                                    onChangeText={setEmail}
                                    style={styles.txtInput} />

                                <TextInput
                                    placeholder="Phone number"
                                    placeholderTextColor='#E3E3E3'
                                    value={phone}
                                    onChangeText={setPhone}
                                    style={styles.txtInput} />

                                <View style={styles.Icon} >
                                    <TextInput
                                        placeholder="Password"
                                        placeholderTextColor='#E3E3E3'
                                        value={password}
                                        onChangeText={setPassword}
                                        secureTextEntry={!showPassword}
                                        style={{
                                            fontSize: size.TextInputFontSize,
                                            fontWeight: 'regular',
                                            color: colors.textInputColor,
                                        }}

                                    />

                                    <TouchableOpacity
                                        onPress={() => setShowPassword(!showPassword)}
                                    >

                                        <Icon
                                            name={showPassword ? 'visibility' : "visibility-off"}
                                            color='#ACACAC'
                                            size={responsiveFontSize(24)} />

                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate("VerifyCodeScreen")}
                                    style={styles.btn} >
                                    <Text style={styles.btnTxt}>Register</Text>
                                </TouchableOpacity>

                                <View style={styles.container}>
                                    <View style={styles.line} />
                                    <Text style={styles.txt}>or Sign-up with</Text>
                                    <View style={styles.line} />
                                </View>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        gap: responsiveFontSize(15)
                                    }}>

                                    <View style={styles.Btnsbg}>
                                        <Image source={require("../assets/image/fb.png")} />
                                        <Text style={styles.BtnsTxt}>Facebook</Text>
                                    </View>

                                    <View style={styles.Btnsbg}>
                                        <Image source={require("../assets/image/google.png")} />
                                        <Text style={styles.BtnsTxt}>Google</Text>
                                    </View>
                                </View>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        gap: responsiveWidth(1)
                                    }}>

                                    <Text
                                        style={{
                                            fontSize: responsiveFontSize(16),
                                            color: '#FFFFFF',
                                            marginTop: responsiveHeight(3)
                                        }}>
                                        Already have account?
                                    </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")} >
                                        <Text
                                            style={{
                                                fontSize: responsiveFontSize(16),
                                                color: '#F83094',
                                                fontWeight: '600',
                                                marginTop: responsiveHeight(3)

                                            }}>
                                            Login
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </FancyCardBackground>
                    </View>
                    </KeyboardScrollVeiw>
        </SimpleBackground>

    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
    },
    back: {
        alignSelf: 'flex-start',
        padding: size.arrowBackPadding
    },
    img: {
        width: size.applogoWidth,
        height: size.applogoHeight,
        bottom: size.applogoBottom,
    },
    txtR: {
        fontSize: size.header,
        fontWeight: 'bold',
        color: colors.headerTxtColor,
        margin: size.headerMargin
    },
    txtInput: {
        fontSize: size.TextInputFontSize,
        fontWeight: 'regular',
        width: size.TextInputWidth,
        height: size.TextInputHeight,
        borderRadius: size.buttonBorderRadios,
        backgroundColor: colors.textInputbgColor,
        margin: responsiveHeight(0.75),
        paddingHorizontal: size.TextInputpaddingHorizontal,
        color: colors.textInputColor,
        alignSelf: 'center'
    },
    Icon: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignSelf: "center",
        width: size.TextInputWidth,
        height: size.TextInputHeight,
        borderRadius: size.buttonBorderRadios,
        backgroundColor: colors.textInputbgColor,
        margin: responsiveHeight(0.75),
        alignItems: 'center',
        paddingHorizontal: size.TextInputpaddingHorizontal,
    },
    btn: {
        width: size.buttonWidth,
        height: size.buttonHeight,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: colors.borderColor,
        backgroundColor: colors.someButtonbgColor,
        borderRadius: size.buttonBorderRadios,
        borderBottomWidth: 1,
        justifyContent: 'center',
        marginTop: responsiveHeight(7)
    },
    btnTxt: {
        color: colors.buttonTxtColor,
        fontSize: size.buttonText,
        textAlign: 'center',
        fontWeight: '600',
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: responsiveHeight(3)
    },
    line: {
        width: responsiveWidth(6),
        height: responsiveHeight(0.1),
        backgroundColor: "#7B7B7B",
    },
    txt: {
        color: "#7B7B7B",
        fontSize: responsiveFontSize(14),
        paddingHorizontal: responsiveWidth(1)
    },
    Btnsbg: {
        marginTop: responsiveHeight(3),
        width: responsiveWidth(44),
        height: responsiveHeight(8),
        borderRadius: size.buttonBorderRadios,
        backgroundColor: colors.btnFbandGoglebgColor,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(6),
        gap: responsiveWidth(4)
    },
    BtnsTxt: {
        fontSize: size.btnFbandGogleTxt,
        color: colors.buttonTxtColor,
        fontWeight: '700',
    },

})

export default RegisterScreen;

