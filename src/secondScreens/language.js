import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import { appfonts } from "../services/utilites/assest/fonts";


const LanguageScreen = ({ navigation }) => {

    const [selectedRadio, setSelectedRadio] = useState("English")
    return (
        <SimpleBackground>
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

                <View style={{ alignSelf: 'center' }}>
                    <Text style={styles.header}>Language</Text>
                </View>

                <TouchableOpacity
                    onPress={() => setSelectedRadio("English")}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(5) }}>
                    <View style={styles.Languagebg}>
                        <Text style={styles.language}>English</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[
                                    styles.radio,
                                    {
                                        borderColor:
                                            selectedRadio === "English" ? "#FFFFFF" : "#A5A5A5",
                                    },
                                ]}>

                                {
                                    selectedRadio === "English" ? <View style={styles.radiobg} /> : null
                                }
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setSelectedRadio("Dutch")}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(2) }}>
                    <View style={styles.Languagebg}>
                        <Text style={styles.language}>Dutch</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[
                                    styles.radio,
                                    {
                                        borderColor:
                                            selectedRadio === "Dutch" ? "#FFFFFF" : "#A5A5A5",
                                    },
                                ]}>

                                {
                                    selectedRadio === "Dutch" ? <View style={styles.radiobg} /> : null
                                }
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setSelectedRadio("German")}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(2) }}>
                    <View style={styles.Languagebg}>
                        <Text style={styles.language}>German</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[
                                    styles.radio,
                                    {
                                        borderColor:
                                            selectedRadio === "German" ? "#FFFFFF" : "#A5A5A5",
                                    },
                                ]}>

                                {
                                    selectedRadio === "German" ? <View style={styles.radiobg} /> : null
                                }
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setSelectedRadio("Spanish")}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(2) }}>
                    <View style={styles.Languagebg}>
                        <Text style={styles.language}>Spanish</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[
                                    styles.radio,
                                    {
                                        borderColor:
                                            selectedRadio === "Spanish" ? "#FFFFFF" : "#A5A5A5",
                                    },
                                ]}>

                                {
                                    selectedRadio === "Spanish" ? <View style={styles.radiobg} /> : null
                                }
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>


            </View >
        </SimpleBackground >

    )
};


const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    back: {
        paddingTop: size.arrowBackPadding,
        paddingHorizontal: responsiveWidth(3)
    },
    header: {
        fontSize: size.secondHeader,
        fontFamily: appfonts.openSansSemiBold,
        color: colors.headerTxtColor,
        bottom: responsiveHeight(3)
    },
    Languagebg: {
        width: responsiveWidth(90),
        height: responsiveHeight(8),
        borderRadius: responsiveFontSize(12),
        backgroundColor: '#81818126',
        paddingHorizontal: responsiveWidth(4),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    language: {
        fontSize: responsiveFontSize(18),
        fontFamily: appfonts.openSansSemiBold,
        color: colors.textColor,
    },
    radio: {
        width: responsiveWidth(5),
        height: responsiveHeight(2.5),
        borderWidth: 1,
        borderRadius: responsiveFontSize(20),
    },
    radiobg: {
        width: responsiveWidth(3),
        height: responsiveHeight(1.5),
        backgroundColor: '#FEFEFE',
        borderRadius: responsiveFontSize(20),
        margin: responsiveWidth(0.7)
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default LanguageScreen;