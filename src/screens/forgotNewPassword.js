import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Image, Text, TextInput } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import Icon from "react-native-vector-icons/MaterialIcons";
import FancyCardBackground from "../component/fancyCardBGground";
import { colors } from "../services/utilites/color";
import { images } from "../services/utilites/assest/images";
import { responsiveHeight } from "../component/responsive";
import { size } from "../services/utilites/size";
import KeyboardScrollVeiw  from "../services/utilites/assest/scrollVeiw";

const ForgotNewPasswordScreen = ({ navigation }) => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassWord] = useState("");

    return (
        <SimpleBackground>
            <KeyboardScrollVeiw>
            <View style={styles.main}>

                <TouchableOpacity
                    onPress={() => navigation.navigate("LoginScreen")}
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
                        <Text style={styles.txtFP}>Forgot password</Text>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor='#E3E3E3'
                            value={password}
                            onChangeText={setPassword}
                            style={styles.txtInput} />

                        <TextInput
                            placeholder="Confirm Password"
                            placeholderTextColor='#E3E3E3'
                            value={confirmPassword}
                            onChangeText={setConfirmPassWord}
                            style={styles.txtInput} />

                        <TouchableOpacity
                            onPress={() => navigation.navigate("LoginScreen")}
                            style={styles.btn} >
                            <Text style={styles.btnTxt}>Save Change</Text>
                        </TouchableOpacity>

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
    txtFP: {
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
        marginTop: responsiveHeight(6)
    },
    btnTxt: {
        color: colors.buttonTxtColor,
        fontSize: size.buttonText,
        textAlign: 'center',
        fontWeight: '600',
    },

})

export default ForgotNewPasswordScreen;