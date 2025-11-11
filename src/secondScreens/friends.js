import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";

const FriendsScreen = ({ navigation }) => {


    const [selectedFriends, setSelectedFriends] = useState([]);

    const toggleSelect = (name) => {
        if (selectedFriends.includes(name)) {

            setSelectedFriends(selectedFriends.filter(item => item !== name));
        } else {

            setSelectedFriends([...selectedFriends, name]);
        }
    };

    const [text, setText] = useState("");

    return (
        <SimpleBackground>
            <View style={styles.main} >

                <TouchableOpacity
                    onPress={() => navigation.navigate("CurrentPartyScreen")}
                    style={styles.back} >
                    <Icon
                        name='arrow-back'
                        color={colors.arrowBackColor}
                        size={size.arrowBackSize}
                    />
                </TouchableOpacity>

                <View style={{ alignSelf: 'center' }}>
                    <Text style={styles.header}>Friends</Text>
                </View>

                <View style={styles.txtInputBox}>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#FFFFFF"
                        value={text}
                        onChangeText={setText}
                        style={styles.txtInput} />
                    <Icon name="search" color="#FFFFFF" size={35} style={styles.iconSearch} />
                </View>


                <TouchableOpacity
                    onPress={() => toggleSelect("Wattpad")}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(6) }}>
                    <View style={styles.itemBox}>
                        <Image source={require("../assets/image/Ellipse0014.png")} style={styles.img} />
                        <Text style={styles.name}>Wattpad</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[
                                    styles.radio,
                                    {
                                        borderColor:
                                            selectedFriends.includes("Wattpad") ? "#FFFFFF" : "#A5A5A5",
                                    },
                                ]}>
                                {selectedFriends.includes("Wattpad") ? <View style={styles.radiobg} /> : null}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => toggleSelect("Pretty")}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(2) }}>
                    <View style={styles.itemBox}>
                        <Image source={require("../assets/image/Ellipse0011.png")} style={styles.img} />
                        <Text style={styles.name}>Pretty</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[
                                    styles.radio,
                                    {
                                        borderColor:
                                            selectedFriends.includes("Pretty") ? "#FFFFFF" : "#A5A5A5",
                                    },
                                ]}>
                                {selectedFriends.includes("Pretty") ? <View style={styles.radiobg} /> : null}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => toggleSelect("Sukran")}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(2) }}>
                    <View style={styles.itemBox}>
                        <Image source={require("../assets/image/Ellipse0015.png")} style={styles.img} />
                        <Text style={styles.name}>Sukran</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[
                                    styles.radio,
                                    {
                                        borderColor:
                                            selectedFriends.includes("Sukran") ? "#FFFFFF" : "#A5A5A5",
                                    },
                                ]}>
                                {selectedFriends.includes("Sukran") ? <View style={styles.radiobg} /> : null}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => toggleSelect("Rojawa")}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(2) }}>
                    <View style={styles.itemBox}>
                        <Image source={require("../assets/image/Ellipse0012.png")} style={styles.img} />
                        <Text style={styles.name}>Rojawa</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[
                                    styles.radio,
                                    {
                                        borderColor:
                                            selectedFriends.includes("Rojawa") ? "#FFFFFF" : "#A5A5A5",
                                    },
                                ]}>
                                {selectedFriends.includes("Rojawa") ? <View style={styles.radiobg} /> : null}
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => toggleSelect("Ramnis")}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(2) }}>
                    <View style={styles.itemBox}>
                        <Image source={require("../assets/image/Ellipse0016.png")} style={styles.img} />
                        <Text style={styles.name}>Ramnis</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[
                                    styles.radio,
                                    {
                                        borderColor:
                                            selectedFriends.includes("Ramnis") ? "#FFFFFF" : "#A5A5A5",
                                    },
                                ]}>
                                {selectedFriends.includes("Ramnis") ? <View style={styles.radiobg} /> : null}
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
        fontWeight: "400",
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
        fontWeight: '600',
        color: colors.headerTxtColor,
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
    img: {
        width: size.photoWidth,
        height: size.photoHeight,
        borderRadius: size.photoBorderRadius
    },
    name: {
        fontSize: responsiveFontSize(18),
        fontWeight: '600',
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
        fontWeight: "600",
        color: colors.buttonTxtColor
    }
});

export default FriendsScreen;
