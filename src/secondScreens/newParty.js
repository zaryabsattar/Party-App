import React from "react";
import { TouchableOpacity, StyleSheet, View, Image, Text, ScrollView, ImageBackground } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";



const NewPartyScreen = ({ navigation }) => {

    const users = [
        { id: 1, name: "wijaya Abadi", status: "watch now", image: require("../assets/image/Ellipse1115.jpg") },
        { id: 2, name: "Jhony Wise", status: "watch now", image: require("../assets/image/Ellipse0002.jpg") },
        { id: 3, name: "Raja Ayoub", status: "watch now", image: require("../assets/image/Ellipse0000.jpg") },
        { id: 4, name: "Rahol Safdar", status: "watch now", image: require("../assets/image/Ellipse0001.jpg") },
        { id: 5, name: "Danyal Khan", status: "watch now", image: require("../assets/image/Ellipse1124.jpg") },
    ];

    return (
        <SimpleBackground>
            <View style={styles.main}>

                <TouchableOpacity
                    onPress={() => navigation.navigate("ProfileScreen")}
                    style={styles.back} >
                    <Icon
                        name='arrow-back'
                        color={colors.arrowBackColor}
                        size={size.arrowBackSize}
                    />
                </TouchableOpacity>

                <Text style={styles.txtS}>New Party</Text>

                <ImageBackground source={require("../assets/image/newparty.jpg")} style={styles.newPartyPhoto} >

                    <LinearGradient
                        colors={['#000000BF', '#00000000']}
                        start={{ x: 0, y: 0 }}   // bottom-right
                        end={{ x: 1, y: 1 }}     // top-left
                        style={{
                            ...StyleSheet.absoluteFillObject,
                        }}>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                paddingHorizontal: responsiveWidth(4),
                                paddingVertical: responsiveHeight(2),
                            }}>
                            <View style={styles.redDot} />
                            <Text style={styles.live}>LIVE</Text>

                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'flex-end',
                                    paddingVertical: responsiveHeight(1)
                                }}>
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
                                style={{ bottom: responsiveHeight(5) }}
                            />
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', }}>

                            <View style={styles.iconBtn}>
                                <Icon name='favorite' color='#F44336' size={responsiveFontSize(28)} />
                                <Text style={styles.btnTxt}>6.9K</Text>
                            </View>

                            <View style={{ marginLeft: responsiveWidth(20) }}>

                                <View style={styles.iconBtn}>
                                    <Icon name='visibility' color='#FFFFFF' size={responsiveFontSize(28)} />
                                    <Text style={styles.btnTxt}>6.9K</Text>
                                </View>

                            </View>

                        </View>

                    </LinearGradient>
                </ImageBackground>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>

                    <TouchableOpacity onPress={() => navigation.navigate("UserScreen")}>
                        <Image source={require("../assets/image/Ellipse1115.jpg")} style={styles.Ellipse1115} />
                    </TouchableOpacity>

                    <View
                        style={{
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            right: responsiveWidth(2.5),
                            top: responsiveHeight(1.7)
                        }}>
                        <Text style={styles.txtCricket}>Cricket live match</Text>
                        <Text style={styles.txtRatrya}>Ratrya Chandriya</Text>
                        <Text style={styles.txtfollowers}>506.2k Followers</Text>
                    </View>

                    <View style={styles.btnFollow}>
                        <Text style={styles.txtFollow}>Follow</Text>
                    </View>

                </View>

                <View style={styles.Line} />

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

        paddingTop: size.arrowBackPadding,
        alignSelf: 'flex-start',
        paddingLeft: responsiveWidth(2)
    },
    txtS: {
        fontSize: size.secondHeader,
        fontWeight: '600',
        color: colors.headerTxtColor,
        bottom: responsiveHeight(3)
    },
    newPartyPhoto: {
        width: responsiveWidth(100),
        height: responsiveHeight(40),
        alignSelf: 'center'
    },
    redDot: {
        width: responsiveWidth(5),
        height: responsiveHeight(2.5),
        borderRadius: responsiveFontSize(100),
        backgroundColor: '#FF0000',
        marginTop: responsiveHeight(0.8)
    },
    live: {
        fontSize: responsiveFontSize(23),
        fontWeight: '700',
        color: '#F2F2F2',
        paddingHorizontal: responsiveWidth(2),
        letterSpacing: responsiveFontSize(1),
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
        width: responsiveWidth(26),
        height: responsiveHeight(5.5),
        borderRadius: responsiveFontSize(8),
        backgroundColor: '#FFFFFF4D',
        paddingVertical: responsiveHeight(0.8),
        paddingHorizontal: responsiveWidth(2),
        margin: responsiveWidth(7)
    },
    btnTxt: {
        fontSize: responsiveFontSize(20),
        fontWeight: '600',
        color: colors.textColor,
        bottom: responsiveHeight(4),
        marginLeft: responsiveWidth(9)
    },
    Ellipse1115: {
        width: size.photoWidth,
        height: size.photoHeight,
        borderRadius: size.photoBorderRadius,
        marginRight: responsiveWidth(5),
        marginTop: responsiveHeight(3)
    },
    txtCricket: {
        fontSize: responsiveFontSize(20),
        fontWeight: '700',
        color: '#F4F3FC',
    },
    txtRatrya: {
        fontSize: responsiveFontSize(15),
        fontWeight: '600',
        color: colors.textColor,
    },
    txtfollowers: {
        fontSize: 14,
        fontWeight: '600',
        color: '#B7B7B7',
    },
    btnFollow: {
        width: responsiveWidth(25),
        height: responsiveHeight(5.5),
        borderRadius: responsiveFontSize(8),
        backgroundColor: '#FFFFFF4D',
        top: responsiveHeight(4),
        right: responsiveWidth(1),
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtFollow: {
        fontSize: responsiveFontSize(18),
        fontWeight: '600',
        color: colors.buttonTxtColor,
    },
    Line: {
        borderBottomWidth: 1,
        width: responsiveWidth(100),
        marginTop: responsiveHeight(4),
        borderBottomColor: '#676767',
        alignSelf: 'center'
    },
    container: {

        width: responsiveWidth(94),
        padding: responsiveWidth(4),

    },
    row: {
        flexDirection: "row",
        marginBottom: responsiveHeight(2.5),

    },
    avatar: {
        width: size.photoWidth,
        height: size.photoHeight,
        borderRadius: size.photoBorderRadius,
        marginRight: responsiveWidth(3),
    },
    name: {
        fontSize: responsiveFontSize(20),
        fontWeight: "700",
        color: '#F4F3FC',
    },
    status: {
        fontSize: responsiveFontSize(15),
        fontWeight: '600',
        color: '#FFFFFF80',
    },

})

export default NewPartyScreen;