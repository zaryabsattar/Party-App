import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import { appfonts } from "../services/utilites/assest/fonts";


const SocialAppScreen = ({ navigation }) => {


    const [selectedApps, setSelectedApps] = useState([]);

    const toggleSelect = (name) => {
        if (selectedApps.includes(name)) {

            setSelectedApps(selectedApps.filter(item => item !== name));
        } else {

            setSelectedApps([...selectedApps, name]);
        }
    };

    const [text, setText] = useState("");

    return (
        <SimpleBackground>
            <View style={styles.main} >

                <TouchableOpacity
                    onPress={() => navigation.navigate("CurrentPartyScreen")}
                    style={styles.back} >
                    <MaterialIcons
                        name='arrow-back'
                        color={colors.arrowBackColor}
                        size={size.arrowBackSize}
                    />
                </TouchableOpacity>

                <View style={{ alignSelf: 'center' }}>
                    <Text style={styles.header}>Social App</Text>
                </View>

                <View style={styles.txtInputBox}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#FFFFFF"
                        value={text}
                        onChangeText={setText}
                        style={styles.txtInput}
                    />
                    <MaterialIcons
                        name="search"
                        color="#FFFFFF"
                        size={responsiveFontSize(35)}
                        style={styles.iconSearch}
                    />
                </View>


                <TouchableOpacity
                    onPress={() => toggleSelect("WhatsApp")}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(6) }}>
                    <View style={styles.itemBox}>
                        <MaterialCommunityIcons name="whatsapp" color="#25D366" size={responsiveFontSize(45)} />
                        <Text style={styles.name}>WhatsApp</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[
                                    styles.radio,
                                    {
                                        borderColor:
                                            selectedApps.includes("WhatsApp") ? "#FFFFFF" : "#A5A5A5",
                                    },
                                ]}>
                                {selectedApps.includes("WhatsApp") ? <View style={styles.radiobg} /> : null}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => toggleSelect("Messenger")}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(2) }}>
                    <View style={styles.itemBox}>
                        <MaterialCommunityIcons name="facebook-messenger" color="#0084FF" size={responsiveFontSize(45)} />
                        <Text style={styles.name}>Messenger</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[
                                    styles.radio,
                                    {
                                        borderColor:
                                            selectedApps.includes("Messenger") ? "#FFFFFF" : "#A5A5A5",
                                    },
                                ]}>
                                {selectedApps.includes("Messenger") ? <View style={styles.radiobg} /> : null}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => toggleSelect("Facebook")}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(2) }}>
                    <View style={styles.itemBox}>
                        <MaterialCommunityIcons name="facebook" color="#1877F2" size={responsiveFontSize(45)} />
                        <Text style={styles.name}>Facebook</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[
                                    styles.radio,
                                    {
                                        borderColor:
                                            selectedApps.includes("Facebook") ? "#FFFFFF" : "#A5A5A5",
                                    },
                                ]}>
                                {selectedApps.includes("Facebook") ? <View style={styles.radiobg} /> : null}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => toggleSelect("Instagram")}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(2) }}>
                    <View style={styles.itemBox}>
                        <MaterialCommunityIcons name="instagram" color="#E4405F" size={responsiveFontSize(45)} />
                        <Text style={styles.name}>Instagram</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[
                                    styles.radio,
                                    {
                                        borderColor:
                                            selectedApps.includes("Instagram") ? "#FFFFFF" : "#A5A5A5",
                                    },
                                ]}>
                                {selectedApps.includes("Instagram") ? <View style={styles.radiobg} /> : null}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => toggleSelect("Linkedln")}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(2) }}>
                    <View style={styles.itemBox}>
                        <MaterialCommunityIcons name="linkedin" color="#0A66C2" size={responsiveFontSize(45)} />
                        <Text style={styles.name}>Linkedln</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[
                                    styles.radio,
                                    {
                                        borderColor:
                                            selectedApps.includes("Linkedln") ? "#FFFFFF" : "#A5A5A5",
                                    },
                                ]}>
                                {selectedApps.includes("Linkedln") ? <View style={styles.radiobg} /> : null}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Btn}>
                    <Text style={styles.btnTxt}>Send</Text>
                </TouchableOpacity>

            </View>
        </SimpleBackground>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    back: {
        paddingTop: size.arrowBackPadding,
        paddingHorizontal: responsiveWidth(3)
    },
    txtInputBox: {
        height: size.TextInputHeight,
        width: size.TextInputWidth,
        borderRadius: size.buttonBorderRadios,
        alignSelf: 'center',
        backgroundColor: "#D0D0D026",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    txtInput: {
        fontSize: size.TextInputFontSize,
        fontFamily: appfonts.openSansRegular,
        color: colors.textInputColor,
        paddingHorizontal: responsiveWidth(4)
    },
    iconSearch: {
        width: responsiveWidth(15.5),
        height: responsiveHeight(8),
        borderRadius: responsiveFontSize(8),
        backgroundColor: "#F83094",
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    header: {
        fontSize: size.secondHeader,
        fontFamily: appfonts.openSansSemiBold,
        color: '#FFFFFF',
        bottom: responsiveHeight(4)
    },
    itemBox: {
        width: responsiveWidth(90),
        height: responsiveHeight(9),
        borderRadius: responsiveFontSize(12),
        backgroundColor: '#81818126',
        paddingHorizontal: responsiveWidth(4),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        alignSelf: 'center'
    },
    name: {
        fontSize: responsiveFontSize(18),
        fontFamily: appfonts.openSansSemiBold,
        color: colors.textColor,
        flex: 1,
        paddingHorizontal: responsiveWidth(4)
    },
    radio: {
        width: responsiveWidth(5),
        height: responsiveHeight(2.5),
        borderWidth: 1,
        borderRadius: responsiveFontSize(20),
    },
    radiobg: {
        width: responsiveWidth(2.8),
        height: responsiveHeight(1.4),
        backgroundColor: '#FEFEFE',
        borderRadius: responsiveFontSize(20),
        margin: responsiveWidth(0.90)
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Btn: {
        width: size.buttonWidth,
        height: size.buttonHeight,
        borderRadius: size.buttonBorderRadios,
        backgroundColor: colors.buttonbgColor,
        borderWidth: 1,
        borderColor: colors.borderColor,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(7)
    },
    btnTxt: {
        fontSize: size.buttonText,
        fontFamily: appfonts.openSansSemiBold,
        color: colors.buttonTxtColor
    }

});

export default SocialAppScreen;
