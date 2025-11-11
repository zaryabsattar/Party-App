import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Image, Text, TextInput } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import KeyboardScrollVeiw  from "../services/utilites/assest/scrollVeiw";


const SearchScreen = ({ navigation }) => {

    const [text, setText] = useState("");
    return (
        <SimpleBackground>
            <KeyboardScrollVeiw>
            <View style={styles.main}>

                <TouchableOpacity
                    onPress={() => navigation.navigate("RecentScreen")}
                    style={styles.back} >
                    <Icon
                        name='arrow-back'
                        color={colors.arrowBackColor}
                        size={size.arrowBackSize}
                    />
                </TouchableOpacity>

                <Text style={styles.txtS}>Search</Text>


                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: responsiveHeight(2)
                    }}>
                    <View style={styles.txtInputbg}>
                        <TextInput
                            placeholder="Ratrya |"
                            placeholderTextColor='#FFFFFF'
                            value={text}
                            onChangeText={setText}
                            style={styles.txtInput}
                        />

                        <TouchableOpacity>
                            <Icon
                                name='search'
                                size={responsiveFontSize(30)}
                                color={colors.searchandTuneIcon}
                                style={styles.searchIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.tuneIcon}>
                        <Icon name='tune' size={responsiveFontSize(30)} color={colors.searchandTuneIcon} />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        width: responsiveWidth(90),
                        borderBottomWidth: 1,
                        borderBottomColor: '#888585',
                        paddingVertical: responsiveHeight(1),
                        alignSelf: 'center'
                    }}>
                    <Text style={styles.txtSearch}>Ratrya Chandriya</Text>
                    <Text style={styles.txtSearch}>Ratrya Pandya</Text>
                    <Text style={styles.txtSearch}>Ratrya Chandra</Text>
                    <Text style={styles.txtSearch}>Ratrya Ratta</Text>
                </View>


                <View style={styles.btn}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, paddingHorizontal: responsiveWidth(3) }}>
                        <Image source={require("../assets/image/Ellipse1122.jpg")} style={styles.Ellipse1112} />
                        <View style={{ flex: 1, alignItems: 'flex-start', }}>
                            <Text style={styles.btnTxt}>Ratrya Chandriya</Text>
                        </View>
                        <Icon name="chevron-right" size={responsiveFontSize(22)} color="#FFFFFF" />
                    </View>
                </View>


                <View style={styles.btn}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, paddingHorizontal: responsiveWidth(3) }}>
                        <Image source={require("../assets/image/Ellipse1124.jpg")} style={styles.Ellipse1112} />
                        <View style={{ flex: 1, alignItems: 'flex-start', }}>
                            <Text style={styles.btnTxt}>Ratrya Pandya</Text>
                        </View>
                        <Icon name="chevron-right" size={responsiveFontSize(22)} color="#FFFFFF" />
                    </View>
                </View>


                <View style={styles.btn}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, paddingHorizontal: responsiveWidth(3) }}>
                        <Image source={require("../assets/image/Ellipse0000.jpg")} style={styles.Ellipse1112} />
                        <View style={{ flex: 1, alignItems: 'flex-start', }}>
                            <Text style={styles.btnTxt}>Ratrya Komal</Text>
                        </View>
                        <Icon name="chevron-right" size={responsiveFontSize(22)} color="#FFFFFF" />
                    </View>
                </View>


                <View style={styles.btn}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, paddingHorizontal: responsiveWidth(3) }}>
                        <Image source={require("../assets/image/Ellipse0001.jpg")} style={styles.Ellipse1112} />
                        <View style={{ flex: 1, alignItems: 'flex-start', }}>
                            <Text style={styles.btnTxt}>Ratrya Mins</Text>
                        </View>
                        <Icon name="chevron-right" size={responsiveFontSize(22)} color="#FFFFFF" />
                    </View>
                </View>


                <View style={styles.btn}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, paddingHorizontal: responsiveWidth(3) }}>
                        <Image source={require("../assets/image/Ellipse1124.jpg")} style={styles.Ellipse1112} />
                        <View style={{ flex: 1, alignItems: 'flex-start', }}>
                            <Text style={styles.btnTxt}>Ratrya Chupra</Text>
                        </View>
                        <Icon name="chevron-right" size={responsiveFontSize(22)} color="#FFFFFF" />
                    </View>
                </View>

            </View>
            </KeyboardScrollVeiw>
        </SimpleBackground>
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    back: {
        paddingTop: responsiveFontSize(22)
    },
    txtS: {
        fontSize: size.header,
        fontWeight: '600',
        color: colors.headerTxtColor,
        marginLeft: responsiveWidth(2),
        marginTop: responsiveHeight(2)
    },
    txtInput: {
        fontSize: responsiveFontSize(12),
        fontWeight: '400',
        paddingHorizontal: responsiveWidth(3),
        color: colors.textInputColor,
    },
    txtInputbg: {
        width: responsiveWidth(75),
        height: responsiveHeight(7),
        borderRadius: size.buttonBorderRadios,
        backgroundColor: colors.textInputbgColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchIcon: {
        width: responsiveWidth(14),
        height: responsiveHeight(7),
        backgroundColor: colors.searchandTunebg,
        borderRadius: responsiveFontSize(6),
        padding: responsiveFontSize(12)
    },
    tuneIcon: {
        width: responsiveWidth(14),
        height: responsiveHeight(7),
        backgroundColor: colors.searchandTunebg,
        borderRadius: responsiveFontSize(6),
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtSearch: {
        fontSize: responsiveFontSize(14),
        fontWeight: '600',
        color: colors.textColor,
        paddingVertical: responsiveHeight(0.5)
    },
    btn: {
        width: size.buttonWidth,
        height: size.buttonHeight,
        borderWidth: 1,
        borderColor: colors.borderColor,
        backgroundColor: '#81818126',
        borderRadius: size.buttonBorderRadios,
        borderBottomWidth: 1,
        marginTop: responsiveHeight(2.5),
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btnTxt: {
        color: colors.buttonTxtColor,
        fontSize: responsiveFontSize(16),
        paddingHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(1),
        fontWeight: '600',
    },
    Ellipse1112: {
        width: size.photoWidth,
        height: size.photoHeight,
        borderRadius: size.photoBorderRadius,

    },

})


export default SearchScreen;