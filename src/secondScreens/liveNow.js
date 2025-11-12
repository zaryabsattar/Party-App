import React from "react";
import { TouchableOpacity, StyleSheet, View, Image, Text, ScrollView, ImageBackground } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import { appfonts } from "../services/utilites/assest/fonts";

const LiveNowScreen = ({ navigation }) => {

    const users = [
        { id: 1, name: "wijaya Abadi", status: "watching now", image: require("../assets/image/Ellipse1115.jpg") },
        { id: 2, name: "Jhony Wise", status: "watching now", image: require("../assets/image/Ellipse0002.jpg") },
        { id: 3, name: "Raja Ayoub", status: "watching now", image: require("../assets/image/Ellipse0000.jpg") },
        { id: 4, name: "Rahol Safdar", status: "watching now", image: require("../assets/image/Ellipse0001.jpg") },
        { id: 5, name: "Danyal Khan", status: "watching now", image: require("../assets/image/Ellipse1124.jpg") },
    ];

    return (
        <SimpleBackground>
            <View style={styles.main}>


                <TouchableOpacity
                    onPress={() => navigation.navigate("LiveStreamScreen")}
                    style={styles.back} >
                    <Icon
                        name='arrow-back'
                        color={colors.arrowBackColor}
                        size={size.arrowBackSize}
                    />
                </TouchableOpacity>

                <Text style={styles.header}>Live Now</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate("CurrentPartyScreen")}
                    style={styles.check}>
                    <Icon name="check" size={responsiveFontSize(25)} color="#FFFFFF" />
                </TouchableOpacity>


                <ImageBackground source={require("../assets/image/Ellipse0008.jpg")} style={styles.newPartyPhoto} >

                    <LinearGradient
                        colors={['#000000BF', '#00000000']}
                        start={{ x: 0, y: 0 }}   // bottom-right
                        end={{ x: 1, y: 1 }}     // top-left
                        style={{
                            ...StyleSheet.absoluteFillObject,
                        }}>

                        <View style={{ flex: 1, flexDirection: 'row', padding: responsiveWidth(3) }}>
                            <View style={styles.redDot} />
                            <Text style={styles.live}>LIVE</Text>

                            <View style={{ flex: 1, alignItems: 'flex-end', paddingVertical: responsiveHeight(0.5) }}>
                                <Icon
                                    name='more-horiz'
                                    color={colors.moreHorizColor}
                                    size={responsiveFontSize(18)}
                                    style={styles.IconMoreHoriz}
                                />
                            </View>

                        </View>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <Icon
                                name='pause'
                                color='#FFFFFF'
                                size={responsiveFontSize(40)}
                            />
                        </View>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                padding: responsiveWidth(2),
                                gap: responsiveWidth(2),
                                alignItems: "flex-end"
                            }}>

                            <View style={styles.iconBtn}>
                                <Icon name='favorite' color='#FFFFFF' size={responsiveFontSize(28)} />
                                <Text style={styles.btnTxt}>6.9K</Text>
                            </View>

                            <View style={styles.iconBtn}>
                                <Icon name='visibility' color='#FFFFFF' size={responsiveFontSize(28)} />
                                <Text style={styles.btnTxt}>6.9K</Text>
                            </View>

                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: responsiveWidth(3), }}>
                            <Icon name="cameraswitch" color="#FFFFFF" size={responsiveFontSize(30)} />
                        </View>

                    </LinearGradient>
                </ImageBackground>


                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.container}>
                    {users.map((user) => (
                        <View key={user.id} style={styles.row}>
                            <Image source={user.image} style={styles.avatar} />
                            <View>
                                <Text style={styles.name}>{user.name}</Text>
                                <Text style={styles.status}>{user.status}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>

            </View>
        </SimpleBackground>
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
    },
    back: {
        alignSelf: 'flex-start',
        padding: size.arrowBackPadding
    },
    header: {
        fontSize: size.secondHeader,
        fontFamily: appfonts.openSansSemiBold,
        color: colors.headerTxtColor,
        bottom: responsiveHeight(6)
    },
    check: {
        alignSelf: 'flex-end',
        bottom: responsiveHeight(10),
        paddingHorizontal: responsiveWidth(3)
    },
    newPartyPhoto: {
        width: responsiveWidth(100),
        height: responsiveHeight(50),
        bottom: responsiveHeight(3)
    },
    redDot: {
        width: responsiveWidth(5),
        height: responsiveHeight(2.5),
        borderRadius: responsiveFontSize(100),
        backgroundColor: '#FF0000',
        marginTop: responsiveHeight(1)
    },
    live: {
        fontSize: responsiveFontSize(22),
        fontFamily: appfonts.openSansBold,
        color: '#F2F2F2',
        paddingHorizontal: responsiveWidth(2),
    },
    IconMoreHoriz: {
        width: size.morHorizwidth,
        height: size.morHorizheight,
        borderWidth: 1,
        borderBottomWidth: 1,
        borderRadius: responsiveFontSize(50),
        borderColor: colors.moreHorizColor,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    iconBtn: {
        width: responsiveWidth(24.3),
        height: responsiveHeight(5),
        borderRadius: responsiveFontSize(8),
        backgroundColor: '#FFFFFF4D',
        paddingVertical: responsiveHeight(0.5),
        paddingHorizontal: responsiveWidth(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: responsiveHeight(7)
    },
    btnTxt: {
        fontSize: size.buttonText,
        fontFamily: appfonts.openSansSemiBold,
        color: '#FFFFFF',
    },
    container: {
        flex: 1,
        width: responsiveWidth(100),
        padding: responsiveWidth(4),
    },
    row: {
        flexDirection: "row",
        marginBottom: responsiveHeight(2.5),
    },
    avatar: {
        width: size.photoWidth,
        height: size.photoHeight,
        borderRadius: responsiveFontSize(25),
        marginRight: responsiveWidth(3),
    },
    name: {
        fontSize: responsiveFontSize(20),
        fontFamily: appfonts.openSansBold,
        color: '#F4F3FC',
    },
    status: {
        fontSize: responsiveFontSize(14),
        fontFamily: appfonts.openSansSemiBold,
        color: '#FFFFFF80',
    },

})

export default LiveNowScreen;