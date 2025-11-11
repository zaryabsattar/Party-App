import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import FancyCardBackground from "../component/fancyCardBGground";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../services/utilites/color";
import { images } from "../services/utilites/assest/images";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import KeyboardScrollVeiw  from "../services/utilites/assest/scrollVeiw";

const VerifyCodeScreen = ({ navigation }) => {

    const [firstCode, setFirstCode] = useState("");
    const [secondCode, setSecondCode] = useState("");
    const [thirdCode, setThirdCode] = useState("");
    const [fourthCode, setFourthCode] = useState("");

    const secondRef = useRef();
    const thirdRef = useRef();
    const fourthRef = useRef();

    return (
        <SimpleBackground>
            <KeyboardScrollVeiw>
            <View style={styles.main}>

                <TouchableOpacity
                    onPress={() => navigation.navigate("ForgotPasswordScreen")}
                    style={styles.back} >
                    <Icon
                        name='arrow-back'
                        color={colors.arrowBackColor}
                        size={size.arrowBackSize}
                    />
                </TouchableOpacity>

                <Image source={images.applogo} style={styles.img} />

                <FancyCardBackground>
                    <View style={{ margin: size.headerMargin }}>
                        <Text style={styles.txtVCode}>Verify Code</Text>
                        <Text style={styles.txt}>Code has been send to your email</Text>

                        <View style={styles.timerview}>
                            <Text style={styles.txtTimer}>00:120</Text>
                            <Text style={styles.txtSec}>Sec</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: responsiveWidth(6) }}>
                            <TextInput
                                placeholder=""
                                placeholderTextColor="#FFFFFF"
                                value={firstCode}
                                onChangeText={(text) => {
                                    setFirstCode(text);
                                    if (text.length === 1) secondRef.current?.focus(); // move to next box
                                }}
                                style={styles.txtInput}
                                maxLength={1}            // added
                                keyboardType="number-pad" // added
                            />
                            <TextInput
                                ref={secondRef}
                                placeholder=""
                                placeholderTextColor="#FFFFFF"
                                value={secondCode}
                                onChangeText={(text) => {
                                    setSecondCode(text);
                                    if (text.length === 1) thirdRef.current?.focus(); // move to next box
                                }}
                                style={styles.txtInput}
                                maxLength={1}            // added
                                keyboardType="number-pad" // added
                            />
                            <TextInput
                                ref={thirdRef}
                                placeholder=""
                                placeholderTextColor="#FFFFFF"
                                value={thirdCode}
                                onChangeText={(text) => {
                                    setThirdCode(text);
                                    if (text.length === 1) fourthRef.current?.focus(); // move to next box
                                }}
                                style={styles.txtInput}
                                maxLength={1}            // added
                                keyboardType="number-pad" // added
                            />
                            <TextInput
                                ref={fourthRef}
                                placeholder=""
                                placeholderTextColor="#FFFFFF"
                                value={fourthCode}
                                onChangeText={setFourthCode}
                                style={styles.txtInput}
                                maxLength={1}            // added
                                keyboardType="number-pad" // added
                            />
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                paddingVertical: responsiveHeight(5),
                                gap: responsiveWidth(1)
                            }}>
                            <Text style={styles.txtReceived}>Don’t receive code ?</Text>
                            <Text style={styles.txtSend}>Re-send</Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("LoginScreen")}
                            style={styles.btn} >
                            <Text style={styles.btnTxt}>Submit</Text>
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
    txtVCode: {
        fontSize: size.header,
        fontWeight: 'bold',
        color: colors.headerTxtColor,
    },
    txt: {
        paddingVertical: responsiveHeight(0.5),
        color: "#A8A8A8",
        fontSize: size.TextInputFontSize,
    },
    timerview: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: responsiveHeight(5),
        gap: responsiveWidth(1)
    },
    txtTimer: {
        color: '#B3B3B3',
        fontSize: responsiveFontSize(14),
        fontWeight: '500'
    },
    txtSec: {
        fontSize: responsiveFontSize(14),
        color: colors.textColor,
        fontWeight: '600',
    },
    txtInput: {
        fontSize: size.TextInputFontSize,
        fontWeight: '400',
        width: responsiveWidth(16),
        height: size.TextInputHeight,
        borderRadius: size.buttonBorderRadios,
        backgroundColor: colors.textInputbgColor,
        color: colors.textInputColor,
        textAlign: 'center',
        alignSelf: 'center'
    },
    txtReceived: {
        fontSize: responsiveFontSize(14),
        color: '#B3B3B3',
        fontWeight: '400',
    },
    txtSend: {
        fontSize: responsiveFontSize(14),
        color: '#5A5A5A',
        fontWeight: '600',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
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
    },
    btnTxt: {
        color: colors.buttonTxtColor,
        fontSize: size.buttonText,
        textAlign: 'center',
        fontWeight: '600',
    },

})

export default VerifyCodeScreen;
