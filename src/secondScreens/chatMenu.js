import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Modal } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import { ScrollViews } from "../component";
import { appfonts } from "../services/utilites/assest/fonts";

const ChatMenuScreen = ({ navigation }) => {

    const [showBox, setShowBox] = useState(false);
    const [showSecondBox, setShowSecondBox] = useState(false);
    const [showThirdBox, setShowThirdBox] = useState(false);
    const [showFourthBox, setShowFourthBox] = useState(false);
    const [showFifthBox, setShowFifthBox] = useState(false);
    const [showSixthBox, setShowSixthBox] = useState(false);

    const [showBlockModal, setShowBlockModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState("");

    const [text, setText] = useState("");



    return (
        <SimpleBackground>
            <ScrollViews.WithKeyboardAvoidingView>
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
                        <Text style={styles.txtChatMenu}>Chat Menu</Text>
                    </View>

                    <View style={styles.txtInputbg}>
                        <TextInput
                            placeholder="Search"
                            placeholderTextColor='#FFFFFF'
                            value={text}
                            onChangeText={setText}
                            style={styles.txtInput}
                        />

                        <TouchableOpacity style={styles.searchBtn}>
                            <Icon
                                name='search'
                                size={responsiveFontSize(30)}
                                color={colors.searchandTuneIcon}
                                style={styles.searchIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.chatBoxbg}>
                        <Image source={require("../assets/image/Ellipse1122.jpg")} style={styles.img} />

                        <View style={{ flex: 1, paddingHorizontal: responsiveWidth(4) }}>
                            <Text style={styles.name}>Christina Pearsin</Text>
                            <Text style={styles.message}>Hi, nice to meet you!</Text>
                            <Text style={styles.time}>8:30 pm</Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => setShowBox(!showBox)}
                            style={styles.menuBtn}>
                            <Icon name='more-horiz' color={colors.moreHorizColor} size={responsiveFontSize(15)} />
                        </TouchableOpacity>

                        {showBox && (

                            <View style={styles.menuBox}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelectedUser("Christina Pearsin");
                                        setShowBlockModal(true);
                                    }}

                                    style={{ flexDirection: 'row', }}>
                                    <Icon name='block' color='#FFFFFF' size={responsiveFontSize(15)} />
                                    <Text style={styles.menuBoxTxt}>Block</Text>
                                </TouchableOpacity>

                                <View
                                    style={{
                                        borderBottomWidth: responsiveHeight(0.1),
                                        width: responsiveWidth(18),
                                        borderColor: '#696969',
                                        margin: responsiveWidth(2)
                                    }} />

                                <View style={{ flexDirection: 'row', }}>
                                    <Icon name='delete' color='#FF5E5E' size={responsiveFontSize(15)} />
                                    <Text style={styles.menuBoxTxt}>Delete</Text>
                                </View>
                            </View>
                        )}

                    </View>


                    <View style={styles.chatBoxbg}>
                        <Image source={require("../assets/image/Ellipse0003.jpg")} style={styles.img} />

                        <View style={{ flex: 1, paddingHorizontal: responsiveWidth(4) }}>
                            <Text style={styles.name}>Nurman Calorine</Text>
                            <Text style={styles.message}>Hi</Text>
                            <Text style={styles.time}>8:30 pm</Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => setShowSecondBox(!showSecondBox)}
                            style={styles.menuBtn}>
                            <Icon name='more-horiz' color={colors.moreHorizColor} size={responsiveFontSize(15)} />
                        </TouchableOpacity>

                        {showSecondBox && (
                            <View style={styles.menuBox}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelectedUser("Nurman Calorine");
                                        setShowBlockModal(true);
                                    }}

                                    style={{ flexDirection: 'row', }}>
                                    <Icon name='block' color='#FFFFFF' size={responsiveFontSize(15)} />
                                    <Text style={styles.menuBoxTxt}>Block</Text>
                                </TouchableOpacity>

                                <View
                                    style={{
                                        borderBottomWidth: responsiveHeight(0.1),
                                        width: responsiveWidth(18),
                                        borderColor: '#696969',
                                        margin: responsiveWidth(2)
                                    }} />

                                <View style={{ flexDirection: 'row', }}>
                                    <Icon name='delete' color='#FF5E5E' size={responsiveFontSize(15)} />
                                    <Text style={styles.menuBoxTxt}>Delete</Text>
                                </View>
                            </View>

                        )}

                    </View>

                    <View style={styles.chatBoxbg}>
                        <Image source={require("../assets/image/Ellipse1124.jpg")} style={styles.img} />

                        <View style={{ flex: 1, paddingHorizontal: responsiveWidth(4) }}>
                            <Text style={styles.name}>Rahmdali sajalu</Text>
                            <Text style={styles.message}>Hi, nice to meet you!</Text>
                            <Text style={styles.time}>8:30 pm</Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => setShowThirdBox(!showThirdBox)}
                            style={styles.menuBtn}>
                            <Icon name='more-horiz' color={colors.moreHorizColor} size={responsiveFontSize(15)} />
                        </TouchableOpacity>

                        {showThirdBox && (

                            <View style={styles.menuBox}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelectedUser("Rahmdali sajalu");
                                        setShowBlockModal(true);
                                    }}

                                    style={{ flexDirection: 'row', }}>
                                    <Icon name='block' color='#FFFFFF' size={responsiveFontSize(15)} />
                                    <Text style={styles.menuBoxTxt}>Block</Text>
                                </TouchableOpacity>

                                <View
                                    style={{
                                        borderBottomWidth: responsiveHeight(0.1),
                                        width: responsiveWidth(18),
                                        borderColor: '#696969',
                                        margin: responsiveWidth(2)
                                    }} />

                                <View style={{ flexDirection: 'row', }}>
                                    <Icon name='delete' color='#FF5E5E' size={responsiveFontSize(15)} />
                                    <Text style={styles.menuBoxTxt}>Delete</Text>
                                </View>
                            </View>
                        )}
                    </View>

                    <View style={styles.chatBoxbg}>
                        <Image source={require("../assets/image/Ellipse0004.jpg")} style={styles.img} />

                        <View style={{ flex: 1, paddingHorizontal: responsiveWidth(4) }}>
                            <Text style={styles.name}>Carmena Mayer</Text>
                            <Text style={styles.message}>what are you doing</Text>
                            <Text style={styles.time}>8:30 pm</Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => setShowFourthBox(!showFourthBox)}
                            style={styles.menuBtn}>
                            <Icon name='more-horiz' color={colors.moreHorizColor} size={responsiveFontSize(15)} />
                        </TouchableOpacity>

                        {showFourthBox && (

                            <View style={styles.menuBox}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelectedUser("Carmena Mayer");
                                        setShowBlockModal(true);
                                    }}

                                    style={{ flexDirection: 'row', }}>
                                    <Icon name='block' color='#FFFFFF' size={responsiveFontSize(15)} />
                                    <Text style={styles.menuBoxTxt}>Block</Text>
                                </TouchableOpacity>

                                <View
                                    style={{
                                        borderBottomWidth: responsiveHeight(0.1),
                                        width: responsiveWidth(18),
                                        borderColor: '#696969',
                                        margin: responsiveWidth(2)
                                    }} />

                                <View style={{ flexDirection: 'row', }}>
                                    <Icon name='delete' color='#FF5E5E' size={responsiveFontSize(15)} />
                                    <Text style={styles.menuBoxTxt}>Delete</Text>
                                </View>
                            </View>
                        )}
                    </View>

                    <View style={styles.chatBoxbg}>
                        <Image source={require("../assets/image/Ellipse0005.jpg")} style={styles.img} />

                        <View style={{ flex: 1, paddingHorizontal: responsiveWidth(4) }}>
                            <Text style={styles.name}>Mike kale</Text>
                            <Text style={styles.message}>Hi, nice to meet you!</Text>
                            <Text style={styles.time}>8:30 pm</Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => setShowFifthBox(!showFifthBox)}
                            style={styles.menuBtn}>
                            <Icon name='more-horiz' color={colors.moreHorizColor} size={responsiveFontSize(15)} />
                        </TouchableOpacity>

                        {showFifthBox && (

                            <View style={styles.menuBox}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelectedUser("Mike kale");
                                        setShowBlockModal(true);
                                    }}

                                    style={{ flexDirection: 'row', }}>
                                    <Icon name='block' color='#FFFFFF' size={responsiveFontSize(15)} />
                                    <Text style={styles.menuBoxTxt}>Block</Text>
                                </TouchableOpacity>

                                <View
                                    style={{
                                        borderBottomWidth: responsiveHeight(0.1),
                                        width: responsiveWidth(18),
                                        borderColor: '#696969',
                                        margin: responsiveWidth(2)
                                    }} />

                                <View style={{ flexDirection: 'row', }}>
                                    <Icon name='delete' color='#FF5E5E' size={responsiveFontSize(15)} />
                                    <Text style={styles.menuBoxTxt}>Delete</Text>
                                </View>
                            </View>

                        )}
                    </View>

                    <View style={styles.chatBoxbg}>
                        <Image source={require("../assets/image/Ellipse0005.jpg")} style={styles.img} />

                        <View style={{ flex: 1, paddingHorizontal: responsiveWidth(4) }}>
                            <Text style={styles.name}>Mike kale</Text>
                            <Text style={styles.message}>Hi, nice to meet you!</Text>
                            <Text style={styles.time}>8:30 pm</Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => setShowSixthBox(!showSixthBox)}
                            style={styles.menuBtn}>
                            <Icon name='more-horiz' color={colors.moreHorizColor} size={responsiveFontSize(15)} />
                        </TouchableOpacity>

                        {showSixthBox && (

                            <View style={styles.menuBox}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelectedUser("Mike kale");
                                        setShowBlockModal(true);
                                    }}

                                    style={{ flexDirection: 'row', }}>
                                    <Icon name='block' color='#FFFFFF' size={responsiveFontSize(15)} />
                                    <Text style={styles.menuBoxTxt}>Block</Text>
                                </TouchableOpacity>

                                <View
                                    style={{
                                        borderBottomWidth: responsiveHeight(0.1),
                                        width: responsiveWidth(18),
                                        borderColor: '#696969',
                                        margin: responsiveWidth(2)
                                    }} />

                                <View style={{ flexDirection: 'row', }}>
                                    <Icon name='delete' color='#FF5E5E' size={responsiveFontSize(15)} />
                                    <Text style={styles.menuBoxTxt}>Delete</Text>
                                </View>
                            </View>

                        )}
                    </View>


                    <Modal
                        visible={showBlockModal}
                        transparent
                        animationType="fade"
                        onRequestClose={() => setShowBlockModal(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalBox}>
                                <Text style={styles.modalTitle}>Block({selectedUser})?</Text>
                                <Text style={styles.modalMsg}>
                                    You will no longer receive any parties, livestreams, and messages from this user.
                                </Text>

                                <View
                                    style={{
                                        width: responsiveWidth(60),
                                        borderBottomWidth: responsiveHeight(0.1),
                                        borderColor: '#696969',
                                        marginBottom: responsiveHeight(3)
                                    }} />

                                <View style={styles.modalBtnContainer}>
                                    <TouchableOpacity
                                        onPress={() => setShowBlockModal(false)}
                                        style={styles.cancelBtn}
                                    >
                                        <Text style={styles.cancelTxt}>Cancel</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => alert(`${selectedUser} Blocked!`)}
                                        style={styles.blockBtn}
                                    >
                                        <Text style={styles.blockTxt}>Block</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>
                    </Modal>


                </View>

                <View style={{ marginBottom: responsiveHeight(2) }} />

            </ScrollViews.WithKeyboardAvoidingView>

        </SimpleBackground >

    )
};


const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    back: {
        paddingTop: responsiveHeight(5),
        paddingHorizontal: responsiveWidth(3)
    },
    txtChatMenu: {
        fontSize: size.secondHeader,
        fontFamily: appfonts.openSansSemiBold,
        color: colors.headerTxtColor,
        bottom: responsiveHeight(3)
    },
    txtInputbg: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: size.TextInputWidth,
        height: size.TextInputHeight,
        borderRadius: responsiveFontSize(8),
        backgroundColor: '#D0D0D026',
        marginTop: responsiveHeight(3)
    },
    txtInput: {
        flex: 1,
        paddingHorizontal: responsiveWidth(4),
        fontSize: responsiveFontSize(18),
        fontFamily: appfonts.openSansRegular,
        color: colors.textInputColor
    },
    searchBtn: {
        width: responsiveWidth(15),
        height: responsiveHeight(8),
        backgroundColor: colors.searchandTunebg,
        borderRadius: responsiveFontSize(8),
        alignItems: 'center',
        justifyContent: 'center'
    },
    chatBoxbg: {
        width: responsiveWidth(90),
        height: responsiveHeight(15),
        borderRadius: responsiveFontSize(12),
        backgroundColor: '#81818126',
        marginTop: responsiveHeight(2),
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        position: 'relative',
        paddingHorizontal: responsiveWidth(4)
    },
    img: {
        width: size.photoHeight,
        height: size.photoHeight,
        borderRadius: size.photoBorderRadius,
    },
    name: {
        fontSize: responsiveFontSize(18),
        fontFamily: appfonts.openSansSemiBold,
        color: colors.textColor
    },
    message: {
        fontSize: responsiveFontSize(14),
        fontFamily: appfonts.openSansSemiBold,
        color: '#A5A5A5',
    },
    time: {
        fontSize: responsiveFontSize(12),
        fontFamily: appfonts.openSansBold,
        color: '#A5A5A5',
        marginTop: responsiveHeight(1)
    },
    menuBtn: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#E7E7E7',
        bottom: responsiveHeight(4)
    },
    menuBox: {
        width: responsiveWidth(24),
        height: responsiveHeight(10),
        borderRadius: responsiveFontSize(10),
        backgroundColor: '#505050',
        position: 'absolute',
        marginLeft: responsiveWidth(60),
        marginTop: responsiveHeight(6),
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuBoxTxt: {
        fontSize: responsiveFontSize(12),
        fontFamily: appfonts.openSansSemiBold,
        color: colors.textColor,
        paddingHorizontal: responsiveWidth(2)
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "#0000009E",
        justifyContent: "center",
        alignItems: "center",
    },
    modalBox: {
        width: responsiveWidth(76),
        height: responsiveHeight(32),
        borderRadius: responsiveFontSize(24),
        backgroundColor: "#505050",
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalTitle: {
        fontSize: responsiveFontSize(18),
        fontFamily: appfonts.openSansBold,
        color: colors.textColor,
        marginBottom: responsiveHeight(2)
    },
    modalMsg: {
        fontSize: responsiveFontSize(12),
        fontFamily: appfonts.openSansSemiBold,
        color: "#E1E1E1",
        paddingHorizontal: responsiveWidth(9.5),
        marginBottom: responsiveHeight(3)
    },
    modalBtnContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: responsiveWidth(5)
    },
    cancelBtn: {
        width: responsiveWidth(25),
        height: responsiveHeight(5),
        borderRadius: responsiveFontSize(12),
        borderWidth: 1,
        borderColor: colors.borderColor,
        alignItems: "center",
        justifyContent: "center",
    },
    cancelTxt: {
        color: colors.buttonTxtColor,
        fontFamily: appfonts.openSansRegular,
        fontSize: responsiveFontSize(12),
    },
    blockBtn: {
        width: responsiveWidth(25),
        height: responsiveHeight(5),
        borderRadius: responsiveFontSize(12),
        backgroundColor: colors.buttonbgColor,
        borderWidth: 1,
        borderColor: colors.borderColor,
        alignItems: "center",
        justifyContent: "center",
    },
    blockTxt: {
        color: colors.buttonTxtColor,
        fontFamily: appfonts.openSansRegular,
        fontSize: responsiveFontSize(12),
    },

});

export default ChatMenuScreen;