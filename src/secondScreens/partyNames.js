import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Image, Text, TextInput, ImageBackground, Modal } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import KeyboardScrollVeiw  from "../services/utilites/assest/scrollVeiw";


const PartyNamesScreen = ({ navigation }) => {

    const [showModal, setShowModal] = useState(false);
    const [showSecondModal, setShowSecondModal] = useState(false);
    const [showThirdModal, setShowThirdModal] = useState(false);

    const [text, setText] = useState("");


    return (
        <SimpleBackground>
            <KeyboardScrollVeiw>
            <View style={styles.main}>

                <TouchableOpacity
                    onPress={() => navigation.navigate("RecentScreen")}
                    style={styles.back} >
                    <MaterialIcon
                        name='arrow-back'
                        color={colors.arrowBackColor}
                        size={size.arrowBackSize}
                    />
                </TouchableOpacity>

                <Text style={styles.txtS}>Party Names</Text>


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
                            <MaterialIcon
                                name='search'
                                size={responsiveFontSize(30)}
                                color={colors.searchandTuneIcon}
                                style={styles.searchIcon} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.tuneIcon}>
                        <MaterialIcon
                            name='tune'
                            size={responsiveFontSize(30)}
                            color={colors.searchandTuneIcon}
                        />
                    </TouchableOpacity>
                </View>


                <View
                    style={{
                        width: responsiveWidth(90),
                        borderBottomWidth: 1,
                        borderBottomColor: '#888585',
                        paddingVertical: responsiveHeight(2),
                        alignSelf: 'center'
                    }}>
                    <Text style={styles.txtSearch}>Cricket live match</Text>
                    <Text style={styles.txtSearch}>Cricket highlight match</Text>
                    <Text style={styles.txtSearch}>Cricket super match</Text>
                    <Text style={styles.txtSearch}>Cricket news</Text>
                </View>


                

                    <View style={{ marginTop: responsiveHeight(5), }}>


                        <ImageBackground
                            source={require("../assets/image/Ellipse0006.jpg")}
                            style={styles.pubgPhoto}
                            imageStyle={{ borderRadius: responsiveFontSize(12) }} >

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
                                        alignItems: 'center',
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

                                    <View style={{ flexDirection: 'row', marginLeft: responsiveWidth(48) }}>
                                        <TouchableOpacity onPress={() => setShowModal(true)}>
                                            <MaterialIcon
                                                name='more-horiz'
                                                size={responsiveFontSize(18)}
                                                color={colors.searchandTuneIcon}
                                                style={styles.IconMoreHoriz}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <Modal transparent={true} visible={showModal} animationType="fade" >
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
                                                marginRight: responsiveWidth(11),
                                                alignItems: 'center',
                                                marginTop: responsiveHeight(17)
                                            }} >
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

                                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', }}
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
                                        <Image source={require("../assets/image/Ellipse1116.jpg")} style={styles.Ellipse1116} />
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
                    </View>



                    <View style={{ marginTop: responsiveHeight(2), position: 'relative' }}>
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

                                    <View style={{ flexDirection: 'row', marginLeft: responsiveWidth(48) }}>
                                        <TouchableOpacity onPress={() => setShowModal(true)}>
                                            <MaterialIcon
                                                name='more-horiz'
                                                size={responsiveFontSize(18)}
                                                color={colors.searchandTuneIcon}
                                                style={styles.IconMoreHoriz}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <Modal transparent={true} visible={showSecondModal} animationType="fade" >
                                    <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => setShowSecondModal(false)}>
                                        <View
                                            style={{
                                                flex: 1,
                                                flexDirection: 'row',
                                                justifyContent: 'flex-end',
                                                marginRight: responsiveWidth(11),
                                                alignItems: 'center',
                                                marginTop: responsiveHeight(17)
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



                    <View style={{ marginTop: responsiveHeight(2), }}>
                        <ImageBackground
                            source={require("../assets/image/Ellipse0007.jpg")}
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

                                    <View style={{ flexDirection: 'row', marginLeft: responsiveWidth(48) }}>
                                        <TouchableOpacity onPress={() => setShowThirdModal(true)}>
                                            <MaterialIcon
                                                name='more-horiz'
                                                size={responsiveFontSize(18)}
                                                color={colors.searchandTuneIcon}
                                                style={styles.IconMoreHoriz}
                                            />
                                        </TouchableOpacity>
                                    </View>

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
                                                marginBottom: responsiveHeight(12)
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


                


            </View>
            </KeyboardScrollVeiw>
        </SimpleBackground >
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    scroll: {
        paddingBottom: responsiveHeight(3)
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
    Ellipse1112: {
        width: size.photoWidth,
        height: size.photoHeight,
        borderRadius: size.photoBorderRadius,
    },
    pubgPhoto: {
        width: size.imgWidth,
        height: size.imgHeight,
        alignSelf: 'center',
    },
    txtLive: {
        fontSize: responsiveFontSize(12),
        fontWeight: '600',
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
        fontWeight: '600',
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
        marginLeft: responsiveWidth(2)
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
        fontWeight: '600',
        fontSize: responsiveFontSize(10),
        paddingHorizontal: responsiveHeight(0.7),
        paddingVertical: responsiveWidth(1.6),
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
        fontWeight: '700',
        color: '#F4F3FC',
        paddingHorizontal: responsiveWidth(3)
    },
    secondtxtEllipse1116: {
        fontSize: responsiveFontSize(12),
        fontWeight: '600',
        color: '#FFFFFF',
        marginRight: responsiveWidth(21),
        bottom: responsiveHeight(4),
    },
    thirdEllipse1116: {
        fontSize: responsiveFontSize(10),
        fontWeight: '400',
        color: '#F2F2F2',
    },
    absoluteFillObject: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },

})


export default PartyNamesScreen;