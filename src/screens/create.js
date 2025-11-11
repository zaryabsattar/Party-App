import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import Icon from "react-native-vector-icons/MaterialIcons";
import { size } from "../services/utilites/size";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { colors } from "../services/utilites/color";
import KeyboardScrollVeiw  from "../services/utilites/assest/scrollVeiw";

const CreateScreen = ({ navigation }) => {

    const [text, setText] = useState("");
    return (
        <SimpleBackground>
            <KeyboardScrollVeiw>
                <View style={styles.main} >

                    <TouchableOpacity
                        onPress={() => navigation.navigate("RecentScreen")}
                        style={styles.back} >
                        <Icon
                            name='arrow-back'
                            color={colors.arrowBackColor}
                            size={size.arrowBackSize}
                        />
                    </TouchableOpacity>

                    <Text style={styles.txtCreate}>Create your profile</Text>

                    <View style={styles.uploadBox}>
                        <Icon name='photo-camera' size={size.photoCameraSize} color='#AAAAAA' />
                        <Text style={styles.txtupload}>Upload your Photo</Text>
                    </View>

                    <Text style={styles.txtPhoto}>Photos</Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: responsiveWidth(6),
                            paddingVertical: responsiveWidth(2)
                        }}>

                        <View style={styles.photoBox}>
                            <Icon name='photo-camera' size={size.photoCameraSize} color='#AAAAAA' />
                        </View>

                        <View style={styles.photoBox}>
                            <Icon name='photo-camera' size={size.photoCameraSize} color='#AAAAAA' />
                        </View>

                        <View style={styles.photoBox}>
                            <Icon name='photo-camera' size={size.photoCameraSize} color='#AAAAAA' />
                        </View>

                    </View>

                    <Text style={styles.txtDescription}>Description</Text>

                    <View style={styles.DescriptionBox}>
                        <TextInput placeholder='Write here...'
                            placeholderTextColor="#E3E3E3"
                            value={text}
                            onChangeText={setText}
                            style={styles.txtInput} />
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("CreatePartyScreen")}
                            style={styles.btn} >

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flex: 1,
                                    paddingHorizontal: responsiveWidth(5),
                                }}>
                                <Text style={styles.btnTxt}>Next</Text>
                                <Icon name="chevron-right" size={responsiveFontSize(25)} color="#FFFFFF" />
                            </View>

                        </TouchableOpacity>
                    </View>

                </View>
          </KeyboardScrollVeiw>
        </SimpleBackground>

    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'flex-start',
    },
    back: {
        paddingVertical: responsiveHeight(2),
        right: responsiveWidth(1)
    },
    txtCreate: {
        fontSize: responsiveFontSize(26),
        fontWeight: '600',
        color: colors.headerTxtColor,
    },
    uploadBox: {
        width: size.buttonWidth,
        height: responsiveHeight(22),
        borderRadius: responsiveHeight(2),
        backgroundColor: colors.textInputbgColor,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: responsiveHeight(2),
        borderWidth: 1,
        borderColor: colors.borderColor
    },
    txtupload: {
        fontSize: size.TextInputFontSize,
        fontWeight: '400',
        color: colors.txtColor
    },
    txtPhoto: {
        fontSize: size.header,
        fontWeight: '600',
        color: colors.headerTxtColor,
        marginTop: responsiveHeight(1.50),
    },
    photoBox: {
        width: responsiveWidth(26),
        height: responsiveHeight(13),
        borderRadius: responsiveFontSize(9),
        backgroundColor: '#FFFFFF26',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    txtDescription: {
        fontSize: size.header,
        fontWeight: '600',
        color: colors.headerTxtColor,
        paddingVertical: responsiveHeight(1)
    },
    DescriptionBox: {
        width: size.TextInputWidth,
        height: responsiveHeight(22),
        borderRadius: responsiveFontSize(12),
        backgroundColor: colors.textInputbgColor,
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(0.90),
        alignSelf: 'center'
    },
    btn: {
        marginTop: responsiveHeight(4),
        width: responsiveWidth(80),
        height: size.buttonHeight,
        borderWidth: 1,
        borderColor: colors.borderColor,
        backgroundColor: colors.buttonbgColor,
        borderRadius: size.buttonBorderRadios,
        borderBottomWidth: 1,
        alignSelf: 'center',
    },
    btnTxt: {
        color: colors.buttonTxtColor,
        fontSize: size.buttonText,
        fontWeight: '600',
    },
    txtInput: {
        fontSize: responsiveFontSize(12),
        fontWeight: "400",
        color: colors.txtColor,
    }

})

export default CreateScreen;