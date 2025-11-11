import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import KeyboardScrollVeiw  from "../services/utilites/assest/scrollVeiw";


const ProfileScreen = ({ navigation }) => {

    const [showBox, setShowBox] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState("Everyone");
    const [showSecondBox, setShowSecondBox] = useState(false);
    const [showThirdBox, setShowThirdBox] = useState(false);

    return (
        <SimpleBackground>
            <KeyboardScrollVeiw>
                <View style={styles.main} >

                    <ImageBackground source={require("../assets/image/1stProfilePhoto.jpg")} style={styles.firstProfilePhoto} >


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
                                    paddingVertical: responsiveHeight(2),
                                    paddingHorizontal: responsiveWidth(3)
                                }}>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate("RecentScreen")}
                                    style={styles.back} >
                                    <MaterialIcons
                                        name='arrow-back'
                                        color={colors.arrowBackColor}
                                        size={size.arrowBackSize}
                                    />
                                </TouchableOpacity>

                                <Text style={styles.txtProfile}>Profile</Text>

                                <TouchableOpacity onPress={() => setShowBox(!showBox)}>
                                    <MaterialIcons
                                        name='more-horiz'
                                        color={colors.moreHorizColor}
                                        size={responsiveFontSize(18)}
                                        style={styles.IconMoreHoriz}
                                    />
                                </TouchableOpacity>

                            </View>

                            {showBox && (
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'flex-end',
                                        marginRight: responsiveWidth(5),
                                        bottom: responsiveHeight(3)
                                    }}>
                                    <View style={styles.dropBox}>
                                        <View
                                            style={{
                                                borderBottomWidth: 1,
                                                width: responsiveWidth(17),
                                                borderBottomColor: '#696969'
                                            }}>
                                            <Text style={styles.dropBoxTxt}>Profile Visibility</Text>
                                        </View>

                                        <TouchableOpacity onPress={() => setSelectedRadio("Everyone")}>
                                            <View
                                                style={{
                                                    borderBottomWidth: 1,
                                                    width: responsiveWidth(17),
                                                    borderBottomColor: '#696969'
                                                }}>
                                                <View style={styles.radioWrapper} >
                                                    <Text style={styles.dropBoxTxt}>Everyone</Text>
                                                    <View style={styles.radio}>
                                                        {
                                                            selectedRadio === "Everyone" ? <View style={styles.radiobg} /> : null
                                                        }
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => setSelectedRadio("Only me")}>
                                            <View style={{ width: responsiveWidth(17), }}>
                                                <View style={styles.radioWrapper} >
                                                    <Text style={styles.dropBoxTxt}>Only me</Text>
                                                    <View style={styles.radio}>
                                                        {
                                                            selectedRadio === "Only me" ? <View style={styles.radiobg} /> : null
                                                        }
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                </View>

                            )}

                        </LinearGradient>
                    </ImageBackground>


                    <View style={{ alignSelf: 'center', alignItems: 'center', bottom: responsiveHeight(9) }}>
                        <Image source={require("../assets/image/2ndProfilePhoto.jpg")} style={styles.secondProfilePhoto} />

                        <TouchableOpacity onPress={() => navigation.navigate("EditProfileScreen")}>
                            <View style={styles.editBtn}>
                                <MaterialIcons name='edit' size={responsiveFontSize(15)} color='#FFFFFF' />
                                <Text style={styles.editTxt}>Edit</Text>
                            </View>
                        </TouchableOpacity>
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


                    <View style={styles.detailBox}>
                        <View
                            style={{
                                paddingHorizontal: responsiveWidth(5),
                                paddingVertical: responsiveHeight(1)
                            }}>
                            <Text style={styles.userDetail}>Your full name</Text>
                            <Text style={styles.userValue}>Rlexandra</Text>
                        </View>

                        <View
                            style={{
                                paddingHorizontal: responsiveWidth(5),
                                paddingVertical: responsiveHeight(1)
                            }}>
                            <Text style={styles.userDetail}>Your Email</Text>
                            <Text style={styles.userValue}>rlexandra678@gmail.com</Text>
                        </View>

                        <View
                            style={{
                                paddingHorizontal: responsiveWidth(5),
                                paddingVertical: responsiveHeight(1)
                            }}>
                            <Text style={styles.userDetail}>Your phone number</Text>
                            <Text style={styles.userValue}>+92 | 333-1358913</Text>
                        </View>

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


                    <Text style={styles.parties}>My Parties</Text>



                    <View style={styles.partiesBox}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                margin: responsiveWidth(3),
                                position: 'relative',
                            }}>
                            <TouchableOpacity onPress={() => setShowSecondBox(!showSecondBox)}>
                                <MaterialIcons
                                    name='more-horiz'
                                    color={colors.moreHorizColor}
                                    size={responsiveFontSize(18)}
                                    style={styles.IconMoreHoriz}
                                />
                            </TouchableOpacity>

                            {showSecondBox && (

                                <View style={styles.secondDropBoxWrapper}>
                                    <View style={styles.secondDropBox}>

                                        <View style={{ borderBottomWidth: 1, width: responsiveWidth(27), borderBottomColor: '#696969' }}>
                                            <View style={styles.radioWrapper} >
                                                <MaterialIcons name='delete' size={responsiveFontSize(20)} color='#FF5E5E' />
                                                <Text style={styles.secondDropBoxTxt}>Delete</Text>
                                            </View>
                                        </View>

                                        <View style={{ borderBottomWidth: 1, width: responsiveWidth(27), borderBottomColor: '#696969' }}>
                                            <View style={styles.radioWrapper} >
                                                <MaterialIcons name='download' size={responsiveFontSize(20)} color='#FFFFFF' />
                                                <Text style={styles.secondDropBoxTxt}>Download</Text>
                                            </View>
                                        </View>

                                        <View style={{ width: responsiveWidth(27), }}>
                                            <View style={styles.radioWrapper} >
                                                <MaterialIcons name='send' size={responsiveFontSize(20)} color='#FFFFFF' />
                                                <Text style={styles.secondDropBoxTxt}>Share</Text>
                                            </View>
                                        </View>

                                    </View>
                                </View>

                            )}

                        </View>

                        <ImageBackground
                            source={require("../assets/image/3rdProfilePhoto.jpg")}
                            style={styles.partiesPhoto}
                            imageStyle={{ borderRadius: responsiveFontSize(24), }}
                        >

                            <LinearGradient
                                colors={['#000000BF', '#00000000']}
                                start={{ x: 1, y: 1 }}   // bottom-right
                                end={{ x: 1, y: 0 }}     // top-left
                                style={{
                                    ...StyleSheet.absoluteFillObject,
                                    borderRadius: responsiveFontSize(24),
                                }}>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={styles.partiesPhotoiconBtn}>
                                        <MaterialIcons name='favorite' color='#F44336' size={responsiveFontSize(11)} />
                                        <Text style={styles.partiesPhotobtnTxt}>6.9K</Text>
                                    </View>

                                    <View style={styles.partiesPhotoiconBtn}>
                                        <MaterialIcons name='visibility' size={responsiveFontSize(11)} color='#FFFFFF' />
                                        <Text style={styles.partiesPhotobtnTxt}>8.1K</Text>
                                    </View>

                                </View>

                                <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: responsiveHeight(2) }}>
                                    <MaterialIcons name='play-arrow' size={responsiveFontSize(20)} color='white' />
                                </View>

                            </LinearGradient>
                        </ImageBackground>

                        <View style={{ alignSelf: 'flex-end', paddingHorizontal: responsiveWidth(5), position: 'absolute' }}>
                            <Text
                                style={{
                                    fontSize: responsiveFontSize(18),
                                    fontWeight: '600',
                                    color: colors.textColor
                                }}>
                                English live Speaking
                            </Text>
                            <Text
                                style={{
                                    fontSize: responsiveFontSize(15),
                                    fontWeight: '600',
                                    color: '#C0C0C0',
                                }}>
                                Ratrya Chandriya
                            </Text>
                        </View>

                    </View>



                    <View style={styles.partiesBox}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                margin: responsiveWidth(3),
                                position: 'relative'
                            }}>
                            <TouchableOpacity onPress={() => setShowThirdBox(!showThirdBox)}>
                                <MaterialIcons
                                    name='more-horiz'
                                    color={colors.moreHorizColor}
                                    size={responsiveFontSize(18)}
                                    style={styles.IconMoreHoriz}
                                />
                            </TouchableOpacity>

                            {showThirdBox && (
                                <View style={styles.secondDropBoxWrapper}>
                                    <View style={styles.secondDropBox}>

                                        <View style={{ borderBottomWidth: 1, width: responsiveWidth(27), borderBottomColor: '#696969' }}>
                                            <View style={styles.radioWrapper} >
                                                <MaterialIcons name='delete' size={responsiveFontSize(20)} color='#FF5E5E' />
                                                <Text style={styles.secondDropBoxTxt}>Delete</Text>
                                            </View>
                                        </View>

                                        <View style={{ borderBottomWidth: 1, width: responsiveWidth(27), borderBottomColor: '#696969' }}>
                                            <View style={styles.radioWrapper} >
                                                <MaterialIcons name='download' size={responsiveFontSize(20)} color='#FFFFFF' />
                                                <Text style={styles.secondDropBoxTxt}>Download</Text>
                                            </View>
                                        </View>

                                        <View style={{ width: responsiveWidth(27), }}>
                                            <View style={styles.radioWrapper} >
                                                <MaterialIcons name='send' size={responsiveFontSize(20)} color='#FFFFFF' />
                                                <Text style={styles.secondDropBoxTxt}>Share</Text>
                                            </View>
                                        </View>

                                    </View>
                                </View>

                            )}


                        </View>

                        <ImageBackground
                            source={require("../assets/image/4thProfilePhoto.jpg")}
                            style={styles.partiesPhoto}
                            imageStyle={{ borderRadius: responsiveFontSize(24), }}
                        >

                            <LinearGradient
                                colors={['#000000BF', '#00000000']}
                                start={{ x: 1, y: 1 }}   // bottom-right
                                end={{ x: 1, y: 0 }}     // top-left
                                style={{
                                    ...StyleSheet.absoluteFillObject,
                                    borderRadius: responsiveFontSize(24),
                                }}>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={styles.partiesPhotoiconBtn}>
                                        <MaterialIcons name='favorite' color='#F44336' size={responsiveFontSize(11)} />
                                        <Text style={styles.partiesPhotobtnTxt}>6.9K</Text>
                                    </View>

                                    <View style={styles.partiesPhotoiconBtn}>
                                        <MaterialIcons name='visibility' size={responsiveFontSize(11)} color='#FFFFFF' />
                                        <Text style={styles.partiesPhotobtnTxt}>8.1K</Text>
                                    </View>

                                </View>

                                <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: responsiveWidth(5) }}>
                                    <MaterialIcons name='play-arrow' size={responsiveFontSize(20)} color='white' />
                                </View>

                            </LinearGradient>
                        </ImageBackground>

                        <View style={{ alignSelf: 'flex-end', paddingHorizontal: responsiveWidth(8), position: 'absolute' }}>
                            <Text
                                style={{
                                    fontSize: responsiveFontSize(18),
                                    fontWeight: '600',
                                    color: colors.textColor
                                }}>
                                Meeting live stream
                            </Text>
                            <Text
                                style={{
                                    fontSize: responsiveFontSize(15),
                                    fontWeight: '600',
                                    color: '#C0C0C0',
                                }}>
                                Nurman Calondria
                            </Text>
                        </View>

                    </View>


                </View>

            
</KeyboardScrollVeiw>
        </SimpleBackground >

    )
};


const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    back: {
        paddingTop: responsiveHeight(3)
    },
    txtProfile: {
        fontSize: size.secondHeader,
        fontWeight: '600',
        color: colors.headerTxtColor,

    },
    firstProfilePhoto: {
        width: responsiveWidth(100),
        height: responsiveHeight(40),
        alignSelf: 'center'
    },
    IconMoreHoriz: {
        width: size.morHorizwidth,
        height: size.morHorizheight,
        borderWidth: 1,
        borderBottomWidth: 1,
        borderRadius: responsiveFontSize(20),
        borderColor: '#E7E7E7',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    secondProfilePhoto: {
        width: responsiveWidth(32.3),
        height: responsiveHeight(16.5),
        borderRadius: responsiveFontSize(121),
        borderWidth: 1.69,
        borderColor: colors.borderColor,
    },
    editBtn: {
        width: responsiveWidth(35),
        height: responsiveHeight(5.5),
        backgroundColor: '#0000001A',
        borderRadius: responsiveFontSize(6),
        borderWidth: 1,
        borderColor: '#F83094',
        flexDirection: 'row',
        margin: responsiveWidth(6),
        alignItems: 'center',
        justifyContent: 'center',
    },
    editTxt: {
        fontSize: responsiveFontSize(17),
        fontWeight: '700',
        color: '#FFFFFF',
        paddingHorizontal: responsiveWidth(2.5)
    },
    box: {
        flexDirection: "row",
        backgroundColor: "#81818126",
        borderRadius: responsiveFontSize(20),
        alignItems: 'center',
        justifyContent: "space-between",
        width: responsiveWidth(90),
        height: responsiveHeight(14),
        paddingHorizontal: responsiveWidth(5),
        alignSelf: 'center',
        bottom: responsiveHeight(7)
    },
    item: {
        alignItems: "center",
    },
    number: {
        fontSize: responsiveFontSize(16),
        fontWeight: "600",
        color: "#FFFFFF",
    },
    label: {
        fontSize: responsiveFontSize(16),
        fontWeight: '600',
        color: "#A5A5A5",
        marginTop: responsiveHeight(0.3)
    },
    divider: {
        width: responsiveWidth(0.1),
        height: responsiveHeight(7),
        backgroundColor: "#5D5D5D",
    },
    detailBox: {
        width: responsiveWidth(90),
        height: responsiveHeight(30),
        borderRadius: responsiveFontSize(12),
        backgroundColor: '#81818126',
        alignSelf: 'center',
        justifyContent: 'center',
        bottom: responsiveHeight(4)
    },
    userDetail: {
        fontSize: responsiveFontSize(16),
        fontWeight: '400',
        color: '#E3E3E399',
    },
    userValue: {
        fontSize: responsiveFontSize(18),
        fontWeight: '600',
        color: '#FFFFFF',
    },
    Description: {
        fontSize: responsiveFontSize(18),
        fontWeight: '600',
        color: '#FFFFFF',
        paddingHorizontal: responsiveWidth(5),
    },
    boxDescription: {
        width: responsiveWidth(90),
        height: responsiveHeight(20),
        borderRadius: responsiveFontSize(8),
        backgroundColor: '#81818126',
        alignSelf: 'center',
        justifyContent: 'center',
        margin: (responsiveWidth(4))
    },
    DescriptionBoxTxt: {
        fontSize: responsiveFontSize(16),
        fontWeight: '400',
        color: '#FFFFFF99',
        paddingHorizontal: responsiveWidth(3),
    },
    parties: {
        fontSize: responsiveFontSize(18),
        fontWeight: '600',
        color: '#FFFFFF',
        paddingVertical: responsiveHeight(0.5),
        paddingHorizontal: responsiveWidth(5),
    },
    partiesPhoto: {
        width: responsiveWidth(32),
        height: responsiveHeight(18),
        position: 'absolute',
        margin: responsiveWidth(2.5)
    },
    partiesPhotoiconBtn: {
        flexDirection: 'row',
        margin: responsiveWidth(2.5)

    },
    partiesPhotobtnTxt: {
        fontSize: responsiveFontSize(10),
        fontWeight: '600',
        color: '#FFFFFF',
        paddingHorizontal: responsiveWidth(0.3)
    },
    partiesBox: {
        width: responsiveWidth(90),
        height: responsiveHeight(22),
        borderRadius: responsiveFontSize(8),
        backgroundColor: '#81818126',
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: responsiveHeight(1)

    },
    dropBox: {
        position: "absolute",
        width: responsiveWidth(26),
        height: responsiveHeight(12),
        backgroundColor: "#505050",
        borderRadius: responsiveFontSize(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    dropBoxTxt: {
        fontSize: responsiveFontSize(8),
        fontWeight: '600',
        color: '#FFFFFF',
        textAlign: "center",
        paddingVertical: responsiveHeight(1.2),
    },
    radio: {
        width: responsiveWidth(4),
        height: responsiveHeight(2),
        borderColor: '#FEFEFE',
        borderWidth: 1,
        borderRadius: responsiveFontSize(20),
    },
    radiobg: {
        width: responsiveWidth(2.5),
        height: responsiveHeight(1.3),
        backgroundColor: '#FEFEFE',
        borderRadius: responsiveFontSize(20),
        margin: 1.7
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    secondDropBoxWrapper: {
        position: 'absolute',
        top: responsiveHeight(4),
        right: 0,
        zIndex: responsiveFontSize(999),
        elevation: responsiveFontSize(10)
    },
    secondDropBox: {
        width: responsiveWidth(37),
        height: responsiveHeight(18),
        backgroundColor: "#505050",
        borderRadius: responsiveFontSize(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondDropBoxTxt: {
        fontSize: responsiveFontSize(12),
        fontWeight: '600',
        color: '#FFFFFF',
        textAlign: "center",
        paddingVertical: responsiveHeight(2),
    },
})

export default ProfileScreen;