import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Image, Text, TextInput } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import Icon from "react-native-vector-icons/MaterialIcons";
import FancyCardBackground from "../component/fancyCardBGground";
import { colors } from "../services/utilites/color";
import { images } from "../services/utilites/assest/images";
import { responsiveHeight } from "../component/responsive";
import { size } from "../services/utilites/size";
import { ScrollViews } from "../component";
import { appfonts } from "../services/utilites/assest/fonts";


const ForgotPasswordScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    return (
        <SimpleBackground>
            <ScrollViews.WithKeyboardAvoidingView>
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
                                placeholder="Email"
                                placeholderTextColor='#E3E3E3'
                                value={email}
                                onChangeText={setEmail}
                                style={styles.txtInput} />

                            <TouchableOpacity
                                onPress={() => navigation.navigate("ForgotNewPasswordScreen")}
                                style={styles.btn} >
                                <Text style={styles.btnTxt}>Continue</Text>
                            </TouchableOpacity>

                        </View>
                        
                    </FancyCardBackground>

                </View>
            </ScrollViews.WithKeyboardAvoidingView>
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
        fontFamily: appfonts.openSansBold,
        color: colors.headerTxtColor,
        margin: size.headerMargin
    },
    txtInput: {
        fontSize: size.TextInputFontSize,
        fontFamily: appfonts.openSansRegular,
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
        fontFamily: appfonts.openSansSemiBold,
    },


})

export default ForgotPasswordScreen;

