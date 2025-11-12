import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import { ScrollViews } from "../component";
import { appfonts } from "../services/utilites/assest/fonts";

const UserScreen = ({ navigation }) => {
    return (
        <SimpleBackground>
            <ScrollViews.WithKeyboardAvoidingView>
                <View style={styles.main} >

                    <ImageBackground source={require("../assets/image/user1.jpg")} style={styles.user1Photo} >


                        <LinearGradient
                            colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0)']}
                            start={{ x: 0, y: 0 }}   // bottom-right
                            end={{ x: 0, y: 1 }}     // top-left
                            style={{
                                ...StyleSheet.absoluteFillObject,
                            }}>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingVertical: responsiveHeight(3),
                                    paddingHorizontal: responsiveWidth(3)
                                }}>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate("RecentScreen")}
                                    style={styles.back} >
                                    <Icon
                                        name='arrow-back'
                                        color={colors.arrowBackColor}
                                        size={size.arrowBackSize}
                                    />
                                </TouchableOpacity>

                                <Text style={styles.txtuser}>User</Text>


                                <Icon
                                    name='more-horiz'
                                    color={colors.moreHorizColor}
                                    size={responsiveFontSize(18)}
                                    style={styles.IconMoreHoriz}
                                />

                            </View>

                        </LinearGradient>
                    </ImageBackground>

                    <View
                        style={{
                            paddingHorizontal: responsiveWidth(5),
                            bottom: responsiveHeight(7),
                            flexDirection: 'row'
                        }}>
                        <Image source={require("../assets/image/user2.jpg")} style={styles.user2Photo} />

                        <View style={{ paddingVertical: responsiveHeight(9), paddingHorizontal: responsiveWidth(5) }}>
                            <Text style={styles.ahmad}>Ahmad Ali Hassan</Text>
                            <Text style={styles.email}>ahmad56@gmail.com</Text>
                        </View>

                    </View>

                    <View style={styles.box}>
                        <View style={styles.item}>
                            <Text style={styles.number}>23.5M</Text>
                            <Text style={styles.label}>Viewers</Text>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.item}>
                            <Text style={styles.number}>674</Text>
                            <Text style={styles.label}>Following</Text>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.item}>
                            <Text style={styles.number}>550K</Text>
                            <Text style={styles.label}>Followers</Text>
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignSelf: 'center',
                            gap: responsiveWidth(8)
                        }}>
                        <View style={styles.btnFollow}>
                            <Text style={styles.txtFollownmsg}>Follow</Text>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate("MessageScreen")} >
                            <View style={styles.btnmsg}>
                                <Text style={styles.txtFollownmsg}>Message</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.Description}>Description</Text>

                    <View style={styles.boxDescription}>
                        <Text style={styles.DescriptionBoxTxt}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. dictum est a, mattis tellus.
                            sdkjfioe Lorem ipsum dolor siconsectetur
                            adipiscing elit. dictum est a, mattis tellus.
                            sdkjfioe
                        </Text>
                    </View>

                    <Text style={styles.parties}>All Parties</Text>


                    <ImageBackground source={require("../assets/image/user3.jpg")} style={styles.partiesPhoto} imageStyle={{ borderRadius: responsiveFontSize(12), }} >

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
                                    alignItems: 'center',
                                    paddingVertical: responsiveHeight(1.5),
                                    paddingHorizontal: responsiveWidth(2)
                                }}>
                                <View style={styles.partiesPhotoiconfavoriteBtn}>
                                    <Icon name='favorite' color='#F44336' size={responsiveFontSize(18)} />
                                    <Text style={styles.partiesPhotobtnTxt}>6.9K</Text>
                                </View>

                                <View style={styles.partiesPhotoiconvisibilityBtn}>
                                    <Icon name='visibility' size={responsiveFontSize(18)} color='#FFFFFF' />
                                    <Text style={styles.partiesPhotobtnTxt}>8.1K</Text>
                                </View>

                            </View>


                            <View style={{ alignItems: 'center', justifyContent: 'center', top: responsiveHeight(3) }}>
                                <Icon name='play-arrow' size={responsiveFontSize(25)} color='white' />
                            </View>


                            <View style={{ paddingVertical: responsiveHeight(7), paddingHorizontal: responsiveWidth(7) }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require("../assets/image/Ellipse1115.jpg")} style={styles.Ellipse1115} />
                                    <Text style={styles.txtEllipse1115} >Hokey</Text>
                                </View>
                                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                    <Text style={styles.secondtxtEllipse1115} >Rohail Shanwari</Text>
                                    <View style={{ flexDirection: 'row', marginRight: responsiveWidth(23), bottom: responsiveHeight(2.5) }}>
                                        <Icon name="place" size={responsiveFontSize(20)} color='#F2F2F29E' bottom={responsiveHeight(0.5)} />
                                        <Text style={styles.thirdEllipse1115}>Main bazar, Kohat</Text>
                                    </View>
                                </View>

                            </View>
                        </LinearGradient>
                    </ImageBackground>



                    <ImageBackground source={require("../assets/image/user4.jpg")} style={styles.partiesPhoto} imageStyle={{ borderRadius: responsiveFontSize(12), }} >

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
                                    alignItems: 'center',
                                    paddingVertical: responsiveHeight(1.5),
                                    paddingHorizontal: responsiveWidth(2)
                                }}>
                                <View style={styles.partiesPhotoiconfavoriteBtn}>
                                    <Icon name='favorite' color='#F44336' size={responsiveFontSize(18)} />
                                    <Text style={styles.partiesPhotobtnTxt}>9.0K</Text>
                                </View>

                                <View style={styles.partiesPhotoiconvisibilityBtn}>
                                    <Icon name='visibility' size={responsiveFontSize(18)} color='#FFFFFF' />
                                    <Text style={styles.partiesPhotobtnTxt}>8.1K</Text>
                                </View>

                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center', top: responsiveHeight(3) }}>
                                <Icon name='play-arrow' size={responsiveFontSize(25)} color='white' />
                            </View>

                            <View style={{ paddingVertical: responsiveHeight(7), paddingHorizontal: responsiveWidth(7) }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require("../assets/image/Ellipse1115.jpg")} style={styles.Ellipse1115} />
                                    <Text style={styles.txtEllipse1115} >Cricket live match</Text>
                                </View>
                                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                    <Text style={styles.secondtxtEllipse1115} >Ratrya Chandriya</Text>
                                    <View style={{ flexDirection: 'row', marginRight: responsiveWidth(23), bottom: responsiveHeight(2.5) }}>
                                        <Icon name="place" size={responsiveFontSize(20)} color='#F2F2F29E' bottom={responsiveHeight(0.5)} />
                                        <Text style={styles.thirdEllipse1115}>Wazir Abad, Indian</Text>
                                    </View>
                                </View>

                            </View>
                        </LinearGradient>
                    </ImageBackground>

                </View>
                <View style={{ marginBottom: responsiveHeight(2) }} />
            </ScrollViews.WithKeyboardAvoidingView>

        </SimpleBackground >

    )
};


const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'flex-start',
    },
    back: {
        paddingTop: size.arrowBackPadding
    },
    txtuser: {
        fontSize: size.secondHeader,
        fontFamily: appfonts.openSansSemiBold,
        color: colors.headerTxtColor,
    },
    user1Photo: {
        height: responsiveHeight(40),
        width: responsiveWidth(100),
        alignSelf: 'center'
    },
    IconMoreHoriz: {
        width: size.morHorizwidth,
        height: size.morHorizheight,
        borderWidth: 1,
        borderBottomWidth: 1,
        borderRadius: responsiveFontSize(50),
        borderColor: '#E7E7E7',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    user2Photo: {
        width: responsiveWidth(34),
        height: responsiveHeight(18),
        borderRadius: responsiveFontSize(121),
        borderWidth: 2.46,
        borderColor: colors.borderColor,
    },
    ahmad: {
        fontSize: responsiveFontSize(18),
        fontFamily: appfonts.openSansSemiBold,
        color: colors.textColor,

    },
    email: {
        fontSize: responsiveFontSize(16),
        fontFamily: appfonts.openSansSemiBold,
        color: '#9E9E9E'
    },
    box: {
        flexDirection: "row",
        backgroundColor: "#81818126",
        borderRadius: responsiveFontSize(20),
        alignItems: "center",
        justifyContent: "space-between",
        width: responsiveWidth(90),
        height: responsiveHeight(14),
        paddingHorizontal: responsiveWidth(5),
        alignSelf: 'center',
        bottom: responsiveHeight(9.7)
    },
    item: {
        alignItems: "center",
    },
    number: {
        fontSize: responsiveFontSize(16),
        fontFamily: appfonts.openSansSemiBold,
        color: colors.textColor,
    },
    label: {
        fontSize: responsiveFontSize(16),
        fontFamily: appfonts.openSansSemiBold,
        color: "#A5A5A5",
        marginTop: responsiveHeight(0.5)

    },
    divider: {
        width: responsiveWidth(0.1),
        height: responsiveHeight(7),
        backgroundColor: "#5D5D5D",
    },
    btnFollow: {
        width: responsiveWidth(36),
        height: responsiveHeight(6.5),
        backgroundColor: '#171719',
        borderWidth: 1,
        borderRadius: size.buttonBorderRadios,
        borderColor: colors.borderColor,
        bottom: responsiveHeight(6.3),
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtFollownmsg: {
        fontSize: responsiveFontSize(16),
        fontFamily: appfonts.openSansSemiBold,
        color: colors.buttonTxtColor,
    },
    btnmsg: {
        width: responsiveWidth(36),
        height: responsiveHeight(6.5),
        backgroundColor: '#81818126',
        borderWidth: 1,
        borderRadius: size.buttonBorderRadios,
        borderColor: colors.borderColor,
        bottom: responsiveHeight(6.3),
        alignItems: 'center',
        justifyContent: 'center'
    },
    Description: {
        fontSize: responsiveFontSize(18),
        fontFamily: appfonts.openSansSemiBold,
        color: colors.headerTxtColor,
        paddingHorizontal: responsiveWidth(5),
        bottom: responsiveHeight(4)
    },
    boxDescription: {
        width: responsiveWidth(90),
        height: responsiveHeight(20),
        borderRadius: responsiveFontSize(8),
        backgroundColor: '#81818126',
        alignSelf: 'center',
        bottom: responsiveHeight(1.5),
    },
    DescriptionBoxTxt: {
        fontSize: responsiveFontSize(16),
        fontFamily: appfonts.openSansRegular,
        color: '#FFFFFF99',
        paddingHorizontal: responsiveWidth(3),
        paddingVertical: responsiveHeight(2)
    },
    parties: {
        fontSize: responsiveFontSize(18),
        fontFamily: appfonts.openSansSemiBold,
        color: colors.headerTxtColor,
        paddingVertical: responsiveHeight(0.7),
        paddingHorizontal: responsiveWidth(4),
    },
    partiesPhoto: {
        width: responsiveWidth(90),
        height: responsiveHeight(27),
        marginTop: responsiveHeight(1),
        alignSelf: 'center'
    },
    partiesPhotoiconfavoriteBtn: {
        width: responsiveWidth(15),
        height: responsiveHeight(4),
        borderRadius: responsiveFontSize(8),
        backgroundColor: '#FFFFFF4D',
        paddingVertical: responsiveHeight(0.5),
        paddingHorizontal: responsiveWidth(2),
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    partiesPhotobtnTxt: {
        fontSize: responsiveFontSize(12),
        fontFamily: appfonts.openSansSemiBold,
        color: '#FFFFFF',
    },
    partiesPhotoiconvisibilityBtn: {
        flexDirection: 'row',
        width: responsiveWidth(15),
        height: responsiveHeight(4),
        backgroundColor: '#FFFFFF33',
        marginLeft: responsiveWidth(2),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: responsiveFontSize(5),
    },
    Ellipse1115: {
        width: size.photoWidth,
        height: size.photoHeight,
        borderRadius: size.photoBorderRadius,
    },
    txtEllipse1115: {
        fontSize: responsiveFontSize(16),
        fontFamily: appfonts.openSansBold,
        color: '#F4F3FC',
        paddingHorizontal: responsiveWidth(2.5)
    },
    secondtxtEllipse1115: {
        fontSize: responsiveFontSize(12),
        fontFamily: appfonts.openSansSemiBold,
        color: '#FFFFFF',
        marginRight: responsiveWidth(20),
        bottom: responsiveHeight(3.5),
    },
    thirdEllipse1115: {
        fontSize: responsiveFontSize(10),
        fontFamily: appfonts.poppinsRegular,
        color: '#F2F2F2',
    },


})

export default UserScreen;