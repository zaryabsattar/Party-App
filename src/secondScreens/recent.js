import React, { useState } from "react";
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, TextInput, Modal, ScrollView } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import { ScrollViews } from "../component";
import { appfonts } from "../services/utilites/assest/fonts";

const RecentScreen = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
    const [showSecondModal, setShowSecondModal] = useState(false);
    const [showThirdModal, setShowThirdModal] = useState(false);

    const [text, setText] = useState("");

    const [showSideMenu, setShowSideMenu] = useState(false);

    return (

        <SimpleBackground>
            <ScrollViews.WithKeyboardAvoidingView>

                <View style={{ flex: 1, marginHorizontal: responsiveWidth(3.5) }}>
                    <TouchableOpacity
                        onPress={() => setShowSideMenu(true)}
                        style={{ position: 'relative', }}>
                        <Image source={require("../assets/image/menu.png")} style={styles.img} />
                    </TouchableOpacity>

                    <Modal visible={showSideMenu} animationType="fade" transparent={true}>
                        <TouchableOpacity
                            style={{ flex: 1, flexDirection: 'row', width: responsiveWidth(150), }}
                            activeOpacity={1}
                            onPress={() => setShowSideMenu(false)}
                        >
                            <View style={styles.sideMenu}>
                                <View style={{ alignItems: 'center', paddingVertical: responsiveHeight(7) }}>
                                    <Image source={require("../assets/image/2ndProfilePhoto.jpg")} style={styles.secondProfilePhoto} />
                                    <Text style={styles.userName}>Rlexandra</Text>
                                    <Text style={styles.userEmail}>rlexandra678@gmail.com</Text>
                                </View>


                                <TouchableOpacity
                                    style={{ marginLeft: responsiveWidth(4.5) }}
                                    onPress={() => {
                                        setShowSideMenu(false);
                                        navigation.navigate("ProfileScreen");

                                    }}>
                                    <View style={styles.btnBg}>
                                        <MaterialIcon name='person' color='#FFFFFF' size={responsiveFontSize(25)} />
                                        <Text style={styles.logoutBtnTxt}>Profile</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    setShowSideMenu(false);
                                    navigation.navigate("ChatMenuScreen");
                                }}>
                                    <View style={{ flexDirection: 'row', paddingHorizontal: responsiveWidth(6.5), marginTop: responsiveHeight(1) }}>
                                        <MaterialIcon name='message' color='#AEAEAE' size={responsiveFontSize(25)} />
                                        <Text style={styles.menuItem}>Chat</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    setShowSideMenu(false);
                                    navigation.navigate("NotificationScreen");;
                                }}>
                                    <View style={{ flexDirection: 'row', paddingHorizontal: responsiveWidth(6.5), marginTop: responsiveHeight(3) }}>
                                        <MaterialIcon name='notifications' color='#AEAEAE' size={responsiveFontSize(25)} />
                                        <Text style={styles.menuItem}>Notification</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    setShowSideMenu(false);
                                    navigation.navigate("NewPartyScreen");;
                                }}>
                                    <View style={{ flexDirection: 'row', paddingHorizontal: responsiveWidth(6.5), marginTop: responsiveHeight(3) }}>
                                        <MaterialIcon name="podcasts" color='#AEAEAE' size={responsiveFontSize(25)} />
                                        <Text style={styles.menuItem}>Live Stream</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    setShowSideMenu(false);
                                    navigation.navigate("LanguageScreen");;
                                }}>
                                    <View style={{ flexDirection: 'row', paddingHorizontal: responsiveWidth(6.5), marginTop: responsiveHeight(3) }}>
                                        <MaterialIcon name="language" color='#AEAEAE' size={responsiveFontSize(25)} />
                                        <Text style={styles.menuItem}>Language</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    setShowSideMenu(false);
                                    navigation.navigate("BlockedPeopleScreen");;
                                }}>
                                    <View style={{ flexDirection: 'row', paddingHorizontal: responsiveWidth(6.5), marginTop: responsiveHeight(3) }}>
                                        <MaterialIcon name="block" color='#AEAEAE' size={responsiveFontSize(25)} />
                                        <Text style={styles.menuItem}>Block</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    setShowSideMenu(false);
                                    navigation.navigate("SubscriptionScreen");;
                                }}>
                                    <View style={{ flexDirection: 'row', paddingHorizontal: responsiveWidth(6.5), marginTop: responsiveHeight(3) }}>
                                        <MaterialIcon name="subscriptions" color='#AEAEAE' size={responsiveFontSize(25)} />
                                        <Text style={styles.menuItem}>Subscription</Text>
                                    </View>
                                </TouchableOpacity>

                                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                    <TouchableOpacity onPress={() => {
                                        setShowSideMenu(false);
                                        navigation.navigate("LoginScreen");;
                                    }}>
                                        <View style={styles.logoutBtn}>
                                            <MaterialIcon name="logout" color='#FFFFFF' size={responsiveFontSize(25)} />
                                            <Text style={styles.logoutBtnTxt}>Log out</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                            </View>


                            <View style={{ flex: 1 }} />
                        </TouchableOpacity>

                    </Modal>

                    <TouchableOpacity onPress={() => navigation.navigate("RecentActivityScreen")}>
                        <Text style={styles.txtR}>Recent Activities</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("ProfileScreen")}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            position: 'absolute',
                            alignSelf: 'flex-end',
                            paddingVertical: responsiveHeight(2)
                        }} >
                        <Image source={require("../assets/image/Recentprofile.jpg")} style={styles.RecentPhoto} />
                    </TouchableOpacity>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: responsiveHeight(5)
                        }}>
                        <View style={styles.txtInputbg}>
                            <TextInput
                                onFocus={() => navigation.navigate("PartyNamesScreen")}
                                placeholder="Search for username, party"
                                placeholderTextColor='#ABABAB'
                                value={text}
                                onChangeText={setText}
                                style={styles.txtInput}
                            />

                            <TouchableOpacity
                                onPress={() => navigation.navigate("SearchScreen")}
                            >
                                <MaterialIcon
                                    name='search'
                                    size={responsiveFontSize(30)}
                                    color={colors.searchandTuneIcon}
                                    style={styles.searchIcon}
                                />
                            </TouchableOpacity>
                        </View>


                        <TouchableOpacity
                            onPress={() => navigation.navigate("FilterScreen")}
                            style={styles.tuneIcon}
                        >
                            <MaterialIcon
                                name='tune'
                                size={responsiveFontSize(30)}
                                color={colors.searchandTuneIcon}
                            />
                        </TouchableOpacity>
                    </View>


                    <View
                        style={{
                            paddingVertical: responsiveHeight(2)
                        }}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("NewPartyScreen")}
                        >
                            <ImageBackground
                                source={require("../assets/image/pubg.png")}
                                style={styles.pubgPhoto}
                                imageStyle={{ borderRadius: responsiveFontSize(12) }}
                            >

                                <LinearGradient
                                    colors={['#000000BF', '#00000000']}
                                    start={{ x: 1, y: 1 }}   // bottom-right
                                    end={{ x: 1, y: 0 }}     // top-left
                                    style={{
                                        ...StyleSheet.absoluteFillObject,
                                        borderRadius: responsiveFontSize(12),
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            paddingHorizontal: responsiveWidth(4),
                                            paddingVertical: responsiveHeight(1.5)
                                        }}>
                                        <Text style={styles.txtLive}>LIVE</Text>

                                        <View style={styles.visibiity}>
                                            <MaterialIcon
                                                name='visibility'
                                                size={responsiveFontSize(18)}
                                                color={colors.searchandTuneIcon}
                                            />
                                            <Text style={styles.txtIcon}>8.1K</Text>
                                        </View>


                                        <TouchableOpacity
                                            onPress={() => setShowModal(true)}
                                        >
                                            <MaterialIcon
                                                name='more-horiz'
                                                size={responsiveFontSize(18)}
                                                color={colors.moreHorizColor}
                                                style={styles.IconMoreHoriz}
                                            />
                                        </TouchableOpacity>


                                    </View>

                                    <Modal
                                        transparent={true}
                                        visible={showModal}
                                        animationType="fade"
                                    >
                                        <TouchableOpacity
                                            style={{ flex: 1 }}
                                            activeOpacity={1}
                                            onPress={() => setShowModal(false)}
                                        >
                                            <View
                                                style={{
                                                    flex: 1,
                                                    flexDirection: 'row',
                                                    justifyContent: 'flex-end',
                                                    marginRight: responsiveWidth(10),
                                                    marginTop: responsiveHeight(28)
                                                }}
                                            >
                                                <View style={styles.Modal}>
                                                    <TouchableOpacity style={styles.modalUnder}
                                                        onPress={() => { setShowModal(false); alert("Report Pressed") }}
                                                    >
                                                        <MaterialIcon
                                                            name='report'
                                                            size={responsiveFontSize(8)}
                                                            color={colors.searchandTuneIcon}
                                                            paddingVertical={responsiveHeight(1.3)}
                                                        />
                                                        <Text style={styles.txtModal}>Report</Text>
                                                    </TouchableOpacity>

                                                    <TouchableOpacity style={styles.modalUnder}
                                                        onPress={() => { setShowModal(false); alert("Share Pressed") }} >
                                                        <FontAwesome5
                                                            name='telegram'
                                                            size={responsiveFontSize(8)}
                                                            color={colors.searchandTuneIcon}
                                                            paddingVertical={responsiveHeight(1.3)}
                                                        />
                                                        <Text style={styles.txtModal}>Share</Text>
                                                    </TouchableOpacity>

                                                    <TouchableOpacity
                                                        style={{
                                                            flexDirection: 'row',
                                                            justifyContent: 'center',
                                                        }}
                                                        onPress={() => setShowModal(false)}
                                                    >
                                                        <MaterialIcon
                                                            name='warning'
                                                            size={responsiveFontSize(8)}
                                                            color={colors.searchandTuneIcon}
                                                            paddingVertical={responsiveHeight(1.3)}
                                                        />
                                                        <Text style={styles.txtModal}>No interest</Text>
                                                    </TouchableOpacity>

                                                </View>
                                            </View>

                                        </TouchableOpacity>
                                    </Modal>

                                    <View
                                        style={{
                                            paddingVertical: responsiveHeight(10),
                                            paddingHorizontal: responsiveWidth(6)
                                        }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image
                                                source={require("../assets/image/Ellipse1116.jpg")}
                                                style={styles.Ellipse1116}
                                            />
                                            <Text style={styles.txtEllipse1116} >Pubg Live Stream</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                            <Text style={styles.secondtxtEllipse1116} >Ratrya Chandriya</Text>
                                            <View style={{ flexDirection: 'row', marginRight: responsiveWidth(30), bottom: responsiveHeight(3) }}>
                                                <MaterialIcon name="place" size={responsiveFontSize(25)} color='#F2F2F29E' bottom={responsiveHeight(0.7)} />
                                                <Text style={styles.thirdEllipse1116}>Sharja , Dubai</Text>
                                            </View>
                                        </View>

                                    </View>
                                </LinearGradient>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>



                    <View style={{ position: 'relative' }}>
                        <ImageBackground
                            source={require("../assets/image/Cricket.jpg")}
                            style={styles.pubgPhoto}
                            imageStyle={{ borderRadius: responsiveFontSize(12), }}
                        >

                            <LinearGradient
                                colors={['#000000BF', '#00000000']}
                                start={{ x: 1, y: 1 }}   // bottom-right
                                end={{ x: 1, y: 0 }}     // top-left
                                style={{
                                    ...StyleSheet.absoluteFillObject,
                                    borderRadius: responsiveFontSize(12),
                                }}>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        paddingHorizontal: responsiveWidth(4),
                                        paddingVertical: responsiveHeight(1.5)
                                    }} >
                                    <Text style={styles.txtLive}>LIVE</Text>

                                    <View style={styles.visibiity}>
                                        <MaterialIcon
                                            name='visibility'
                                            size={responsiveFontSize(18)}
                                            color={colors.searchandTuneIcon}
                                        />
                                        <Text style={styles.txtIcon}>8.1K</Text>
                                    </View>

                                    <TouchableOpacity onPress={() => setShowSecondModal(true)}>
                                        <MaterialIcon
                                            name='more-horiz'
                                            size={responsiveFontSize(18)}
                                            color={colors.moreHorizColor}
                                            style={styles.IconMoreHoriz}
                                        />
                                    </TouchableOpacity>

                                </View>

                                <Modal transparent={true} visible={showSecondModal} animationType="fade" >
                                    <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => setShowSecondModal(false)}>
                                        <View
                                            style={{
                                                flex: 1,
                                                flexDirection: 'row',
                                                justifyContent: 'flex-end',
                                                marginRight: responsiveWidth(10),
                                                marginTop: responsiveHeight(28),
                                                alignItems: 'center',
                                            }} >
                                            <View style={styles.Modal}>
                                                <TouchableOpacity style={styles.modalUnder}
                                                    onPress={() => { setShowSecondModal(false); alert("Report Pressed") }}
                                                >
                                                    <MaterialIcon
                                                        name='report'
                                                        size={responsiveFontSize(8)}
                                                        color={colors.searchandTuneIcon}
                                                        paddingVertical={responsiveHeight(1.3)}
                                                    />
                                                    <Text style={styles.txtModal}>Report</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={styles.modalUnder}
                                                    onPress={() => { setShowSecondModal(false); alert("Share Pressed") }} >
                                                    <FontAwesome5
                                                        name='telegram'
                                                        size={responsiveFontSize(8)}
                                                        color={colors.searchandTuneIcon}
                                                        paddingVertical={responsiveHeight(1.3)}
                                                    />
                                                    <Text style={styles.txtModal}>Share</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', }}
                                                    onPress={() => setShowSecondModal(false)}
                                                >
                                                    <MaterialIcon
                                                        name='warning'
                                                        size={responsiveFontSize(8)}
                                                        color={colors.searchandTuneIcon}
                                                        paddingVertical={responsiveHeight(1.3)}
                                                    />
                                                    <Text style={styles.txtModal}>No interest</Text>
                                                </TouchableOpacity>

                                            </View>
                                        </View>

                                    </TouchableOpacity>
                                </Modal>

                                <View
                                    style={{
                                        paddingVertical: responsiveHeight(10),
                                        paddingHorizontal: responsiveWidth(6)
                                    }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require("../assets/image/Ellipse1115.jpg")} style={styles.Ellipse1116} />
                                        <Text style={styles.txtEllipse1116} >Cricket live match</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                        <Text style={styles.secondtxtEllipse1116} >Rohail Shanwari</Text>
                                        <View style={{ flexDirection: 'row', marginRight: responsiveWidth(24), bottom: responsiveHeight(3) }}>
                                            <MaterialIcon name="place" size={responsiveFontSize(25)} color='#F2F2F29E' bottom={responsiveHeight(0.7)} />
                                            <Text style={styles.thirdEllipse1116}>Wazir Abad, Indian</Text>
                                        </View>
                                    </View>

                                </View>
                            </LinearGradient>
                        </ImageBackground>
                    </View>



                    <View style={{ paddingVertical: responsiveHeight(2) }}>
                        <ImageBackground source={require("../assets/image/football.jpg")} style={styles.pubgPhoto} imageStyle={{ borderRadius: responsiveFontSize(12), }} >

                            <LinearGradient
                                colors={['#000000BF', '#00000000']}
                                start={{ x: 1, y: 1 }}   // bottom-right
                                end={{ x: 1, y: 0 }}     // top-left
                                style={{
                                    ...StyleSheet.absoluteFillObject,
                                    borderRadius: responsiveFontSize(12), // pubg image ke sath match karega
                                }}>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        paddingHorizontal: responsiveWidth(4),
                                        paddingVertical: responsiveHeight(1.5)
                                    }} >
                                    <Text style={styles.txtLive}>LIVE</Text>

                                    <View style={styles.visibiity}>
                                        <MaterialIcon
                                            name='visibility'
                                            size={responsiveFontSize(18)}
                                            color={colors.searchandTuneIcon}
                                        />
                                        <Text style={styles.txtIcon}>8.1K</Text>
                                    </View>

                                    <TouchableOpacity onPress={() => setShowThirdModal(true)}>
                                        <MaterialIcon
                                            name='more-horiz'
                                            size={responsiveFontSize(18)}
                                            color={colors.searchandTuneIcon}
                                            style={styles.IconMoreHoriz}
                                        />
                                    </TouchableOpacity>

                                </View>

                                <Modal transparent={true} visible={showThirdModal} animationType="fade" >
                                    <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => setShowThirdModal(false)}>
                                        <View
                                            style={{
                                                flex: 1,
                                                flexDirection: 'row',
                                                justifyContent: 'flex-end',
                                                marginRight: responsiveWidth(10),
                                                alignItems: 'flex-end',
                                                marginBottom: responsiveHeight(15)
                                            }} >
                                            <View style={styles.Modal}>
                                                <TouchableOpacity style={styles.modalUnder}
                                                    onPress={() => { setShowThirdModal(false); alert("Report Pressed") }}
                                                >
                                                    <MaterialIcon
                                                        name='report'
                                                        size={responsiveFontSize(8)}
                                                        color={colors.searchandTuneIcon}
                                                        paddingVertical={responsiveHeight(1.3)}
                                                    />
                                                    <Text style={styles.txtModal}>Report</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={styles.modalUnder}
                                                    onPress={() => { setShowThirdModal(false); alert("Share Pressed") }} >
                                                    <FontAwesome5
                                                        name='telegram'
                                                        size={responsiveFontSize(8)}
                                                        color={colors.searchandTuneIcon}
                                                        paddingVertical={responsiveHeight(1.3)}
                                                    />
                                                    <Text style={styles.txtModal}>Share</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', }}
                                                    onPress={() => setShowThirdModal(false)}
                                                >
                                                    <MaterialIcon
                                                        name='warning'
                                                        size={responsiveFontSize(8)}
                                                        color={colors.searchandTuneIcon}
                                                        paddingVertical={responsiveHeight(1.3)}
                                                    />
                                                    <Text style={styles.txtModal}>No interest</Text>
                                                </TouchableOpacity>

                                            </View>
                                        </View>

                                    </TouchableOpacity>
                                </Modal>

                                <View
                                    style={{
                                        paddingVertical: responsiveHeight(10),
                                        paddingHorizontal: responsiveWidth(6)
                                    }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require("../assets/image/Ellipse1117.jpg")} style={styles.Ellipse1116} />
                                        <Text style={styles.txtEllipse1116} >Football live stream</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                        <Text style={styles.secondtxtEllipse1116} >Babar Azam</Text>
                                        <View style={{ flexDirection: 'row', marginRight: responsiveWidth(24), bottom: responsiveHeight(3) }}>
                                            <MaterialIcon name="place" size={responsiveFontSize(25)} color='#F2F2F29E' bottom={responsiveHeight(0.7)} />
                                            <Text style={styles.thirdEllipse1116}>Lahore, Pakistan</Text>
                                        </View>
                                    </View>

                                </View>
                            </LinearGradient>
                        </ImageBackground>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => navigation.navigate("CreateScreen")} >
                            <LinearGradient
                                colors={['#E399BE80', '#F83094']}
                                start={{ x: 0, y: 0 }}   // bottom-right
                                end={{ x: 0, y: 0 }}     // top-left
                                style={styles.circle}
                            >
                                <Text style={styles.txtadd}>+</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>


                </View>

            </ScrollViews.WithKeyboardAvoidingView>
        </SimpleBackground>

    )
};

const styles = StyleSheet.create({
    img: {
        marginTop: responsiveHeight(2.7),
        height: responsiveHeight(3.5),
        width: responsiveWidth(7),
    },
    txtR: {
        fontSize: size.header,
        fontFamily: appfonts.openSansSemiBold,
        color: colors.headerTxtColor,
        paddingVertical: responsiveHeight(1)
    },
    RecentPhoto: {
        width: responsiveWidth(12),
        height: responsiveHeight(6),
        borderRadius: responsiveFontSize(12),
    },
    txtInput: {
        fontSize: responsiveFontSize(12),
        fontFamily: appfonts.openSansRegular,
        paddingHorizontal: responsiveWidth(3),
        color: colors.textInputColor,
    },
    txtInputbg: {
        width: responsiveWidth(75),
        height: responsiveHeight(7),
        borderRadius: size.buttonBorderRadios,
        backgroundColor: colors.textInputbgColor,
        bottom: responsiveHeight(3.5),
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
        bottom: responsiveHeight(3.5),
        borderRadius: responsiveFontSize(6),
        alignItems: 'center',
        justifyContent: 'center'
    },
    pubgPhoto: {
        width: size.imgWidth,
        height: size.imgHeight,
        bottom: responsiveHeight(2.5),
        alignSelf: 'center',
    },
    txtLive: {
        fontSize: responsiveFontSize(12),
        fontFamily: appfonts.openSansSemiBold,
        color: '#F2F2F2',
        width: responsiveWidth(12),
        height: responsiveHeight(3.8),
        backgroundColor: '#EB5757',
        borderRadius: responsiveFontSize(5),
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    txtIcon: {
        fontSize: responsiveFontSize(12),
        fontFamily: appfonts.openSansSemiBold,
        color: colors.textColor,
    },
    visibiity: {
        flexDirection: 'row',
        width: responsiveWidth(15),
        height: responsiveHeight(3.8),
        backgroundColor: '#FFFFFF33',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: responsiveFontSize(5),
        right: responsiveWidth(23)
    },
    IconMoreHoriz: {
        width: size.morHorizwidth,
        height: size.morHorizheight,
        borderWidth: 1,
        borderBottomWidth: 1,
        borderRadius: responsiveFontSize(50),
        borderColor: '#E7E7E7',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    Modal: {
        width: size.modalWidth,
        height: size.modalHeight,
        backgroundColor: colors.modalbgColor,
        borderRadius: size.buttonBorderRadios,
    },
    txtModal: {
        color: colors.textColor,
        fontFamily: appfonts.openSansSemiBold,
        fontSize: responsiveFontSize(10),
        paddingHorizontal: responsiveHeight(0.7),
        paddingVertical: responsiveWidth(1.5),
    },
    modalUnder: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#696969',
    },
    Ellipse1116: {
        width: size.photoWidth,
        height: size.photoHeight,
        borderRadius: size.photoBorderRadius,
    },
    txtEllipse1116: {
        fontSize: responsiveFontSize(16),
        fontFamily: appfonts.openSansBold,
        color: '#F4F3FC',
        paddingHorizontal: responsiveWidth(3)
    },
    secondtxtEllipse1116: {
        fontSize: responsiveFontSize(12),
        fontFamily: appfonts.openSansSemiBold,
        color: '#FFFFFF',
        marginRight: responsiveWidth(21),
        bottom: responsiveHeight(4),
    },
    thirdEllipse1116: {
        fontSize: responsiveFontSize(10),
        fontFamily: appfonts.poppinsRegular,
        color: '#F2F2F2',
    },
    absoluteFillObject: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    circle: {
        width: responsiveWidth(20),
        height: responsiveHeight(10),
        borderRadius: responsiveFontSize(59),
        marginRight: responsiveWidth(4),
    },
    txtadd: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: responsiveFontSize(50),
        color: '#FFFFFF'
    },
    sideMenu: {
        flex: 1,
        backgroundColor: '#2B2B2B',
    },
    menuItem: {
        color: '#AEAEAE',
        fontSize: responsiveFontSize(20),
        fontFamily: appfonts.openSansSemiBold,
        paddingHorizontal: responsiveWidth(3),
    },
    secondProfilePhoto: {
        width: responsiveHeight(14),
        height: responsiveHeight(14),
        borderWidth: 1.34,
        borderRadius: responsiveFontSize(81),
        borderColor: colors.borderColor,
    },
    userName: {
        fontSize: responsiveFontSize(28),
        fontFamily: appfonts.openSansBold,
        color: colors.headerTxtColor
    },
    userEmail: {
        fontSize: responsiveFontSize(14),
        fontFamily: appfonts.openSansSemiBold,
        color: '#D7D7D7'
    },
    logoutBtn: {
        width: responsiveWidth(60),
        height: size.buttonHeight,
        borderRadius: size.buttonBorderRadios,
        backgroundColor: '#0000001A',
        borderWidth: 1,
        borderColor: '#F83094',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: responsiveHeight(4)
    },
    logoutBtnTxt: {
        color: colors.buttonTxtColor,
        fontSize: size.buttonText,
        fontFamily: appfonts.openSansSemiBold,
        paddingHorizontal: 10,
    },
    btnBg: {
        width: responsiveWidth(55),
        height: size.buttonHeight,
        borderRadius: size.buttonBorderRadios,
        backgroundColor: '#FFFFFF1A',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(3)
    },

})

export default RecentScreen;