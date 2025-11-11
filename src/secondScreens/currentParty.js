import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Image, Modal } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleBackground from "../component/simpleBgColor";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";

const CurrentPartyScreen = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);

    const Friends = [
        { id: 1, name: "Queenza", image: require("../assets/image/Ellipse0010.png") },
        { id: 2, name: "Roshna", image: require("../assets/image/Ellipse0011.png") },
        { id: 3, name: "Rahatba", image: require("../assets/image/Ellipse0012.png") },
        { id: 4, name: "Realin", image: require("../assets/image/Ellipse0013.png") },
    ];

    const socials = [
        { name: "Facebook", icon: "facebook", color: "#1877F2" },
        { name: "Instagram", icon: "instagram", color: "#E4405F" },
        { name: "Twitter", icon: "twitter", color: "#1D9BF0" },
        { name: "LinkedIn", icon: "linkedin", color: "#0A66C2" },
        { name: "More", icon: "dots-horizontal", color: "#7D7D7D", },
    ];


    return (
        <SimpleBackground>
            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.main}>

                    <View style={styles.headerRow}>
                        <TouchableOpacity onPress={() => navigation.navigate("RecentScreen")}>
                            <MaterialIcons
                                name='arrow-back'
                                color={colors.arrowBackColor}
                                size={size.arrowBackSize}
                            />
                        </TouchableOpacity>

                        <Text style={styles.headerText}>Current Party</Text>

                        <TouchableOpacity onPress={() => setShowModal(true)}>
                            <MaterialIcons
                                name="reply"
                                size={responsiveFontSize(30)}
                                color="#FFFFFF"
                                style={{ transform: [{ rotate: '180deg' }] }}
                            />
                        </TouchableOpacity>
                    </View>

                    <ImageBackground source={require("../assets/image/Ellipse0008.jpg")} style={styles.photo} >

                        <LinearGradient
                            colors={['#000000BF', '#00000000']}
                            start={{ x: 0, y: 0 }}   // bottom-right
                            end={{ x: 1, y: 1 }}     // top-left
                            style={{
                                ...StyleSheet.absoluteFillObject,

                            }}>

                            <View style={styles.playArrow}>
                                <MaterialIcons name="play-arrow" color="#FFFFFF" size={responsiveFontSize(50)} />
                            </View>

                        </LinearGradient>
                    </ImageBackground>

                    <Text style={styles.title}>Cricket live match</Text>

                    <View style={styles.iconRow}>
                        <MaterialIcons name="favorite" color="#F44336" size={responsiveFontSize(25)} />
                        <Text style={styles.viewerTxt}>6.9K</Text>
                        <Text style={styles.viewerTxt}>.</Text>
                        <MaterialIcons name="visibility" color="#FFFFFF" size={responsiveFontSize(25)} />
                        <Text style={styles.viewerTxt}>6.9K</Text>
                    </View>

                    <View>
                        <Text style={styles.comment} >Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. dictum est a, mattis tellus.
                            sdkjfioe Lorem ipsum dolor siconsectetur
                            adipiscing elit. dictum est a, mattis tellus.
                            sdkjfioe</Text>
                    </View>

                    <Modal visible={showModal} animationType="fade" transparent >
                        <TouchableOpacity
                            style={{ flex: 1, }}
                            activeOpacity={1}
                            onPress={() => setShowModal(false)}>

                            <View style={styles.flex}>

                                <LinearGradient
                                    colors={["#2C003E", "#000000"]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={styles.Modal}
                                >

                                    <Text style={styles.heading}>Send to Friends</Text>
                                    <View style={styles.row} >
                                        {
                                            Friends.map((item, index) => (
                                                <View key={index} style={{ paddingHorizontal: responsiveWidth(2.5), paddingVertical: responsiveHeight(2.8) }}>
                                                    <TouchableOpacity>
                                                        <Image source={item.image} style={styles.img} />
                                                        <Text style={styles.name}>{item.name}</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            ))
                                        }
                                    </View>

                                    <View
                                        style={{
                                            position: 'absolute',
                                            alignSelf: "flex-end",
                                            marginTop: responsiveHeight(12.5),
                                            marginRight: responsiveWidth(5)
                                        }}>
                                        <TouchableOpacity onPress={() => navigation.navigate("FriendsScreen")}>
                                            <MaterialIcons name="search" color="#808080" size={responsiveFontSize(30)} style={styles.iconSearch} />
                                            <Text style={styles.name}>search</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <Text style={styles.heading}>Share to</Text>
                                    <View style={styles.row}>
                                        {socials.map((item, index) => (
                                            <View key={index} style={{ paddingHorizontal: responsiveWidth(2.3), paddingVertical: responsiveHeight(2.5) }}>
                                                <TouchableOpacity
                                                    onPress={() =>
                                                        item.name === "More"
                                                            ? navigation.navigate("SocialAppScreen")
                                                            : navigation.navigate("")
                                                    }
                                                >

                                                    <View
                                                        style={[
                                                            item.name === "More" && styles.moreBox,
                                                        ]}
                                                    >
                                                        <MaterialCommunityIcons name={item.icon} size={responsiveFontSize(45)} color={item.color} />
                                                        <Text style={styles.name}>{item.name}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        ))}
                                    </View>



                                </LinearGradient>

                            </View>

                        </TouchableOpacity>
                    </Modal>

                </View>
            </ScrollView>
        </SimpleBackground>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: responsiveWidth(3),
        paddingVertical: responsiveHeight(4)
    },
    headerText: {
        color: colors.headerTxtColor,
        fontSize: size.secondHeader,
        fontWeight: "600",
    },
    photo: {
        height: responsiveHeight(50),
        width: responsiveWidth(100),
        borderRadius: responsiveFontSize(12),
    },
    playArrow: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    title: {
        fontSize: responsiveFontSize(32),
        fontWeight: '700',
        color: '#F4F3FC',
        paddingHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(1)
    },
    iconRow: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: '#8B8888',
        width: responsiveWidth(90),
        alignSelf: 'center',
        paddingHorizontal: responsiveWidth(1.5),
        paddingVertical: responsiveHeight(1)
    },
    viewerTxt: {
        fontSize: responsiveFontSize(16),
        fontWeight: '600',
        color: '#FFFFFF',
        paddingHorizontal: responsiveWidth(2)
    },
    comment: {
        fontSize: responsiveFontSize(16),
        fontWeight: '400',
        color: '#FFFFFF99',
        paddingHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(1.5)
    },
    flex: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    Modal: {
        width: responsiveWidth(100),
        height: responsiveHeight(45),
        borderTopRightRadius: responsiveFontSize(70),
        borderTopLeftRadius: responsiveFontSize(70),
        paddingHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(6.7),
        alignSelf: 'center'
    },
    heading: {
        fontSize: responsiveFontSize(18),
        fontWeight: '600',
        color: '#FFFFFF'
    },
    img: {
        height: size.photoHeight,
        width: size.photoWidth,
        borderRadius: size.photoBorderRadius,
    },
    row: {
        flexDirection: 'row',
    },
    name: {
        fontSize: responsiveFontSize(14),
        fontWeight: "600",
        color: "#A5A5A5",
        paddingVertical: responsiveHeight(1.5),
    },
    iconSearch: {
        height: size.photoHeight,
        width: size.photoWidth,
        borderRadius: size.photoBorderRadius,
        backgroundColor: "#D9D9D9",
        padding: responsiveWidth(3),
    },
    moreBox: {
        height: size.photoHeight,
        width: size.photoWidth,
        borderRadius: size.photoBorderRadius,
        backgroundColor: "#D9D9D9",
    },


});

export default CurrentPartyScreen;
