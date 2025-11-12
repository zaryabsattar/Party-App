import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image, } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import { appfonts } from "../services/utilites/assest/fonts";


const RecentActivityScreen = ({ navigation }) => {

    const [showMenu, setShowMenu] = useState(null);

    const Users = [
        { id: 1, name: "Dwayen Jack", country: "U.S.A", image: require("../assets/image/Ellipse0021.jpg"), imageBackground: require("../assets/image/Ellipse0017.jpg") },
        { id: 2, name: "Dwayen Jack", country: "U.S.A", image: require("../assets/image/Ellipse0021.jpg"), imageBackground: require("../assets/image/Ellipse0018.jpg") },
        { id: 3, name: "Rackel James", country: "U.S.A", image: require("../assets/image/Ellipse0021.jpg"), imageBackground: require("../assets/image//Cricket.jpg") },
        { id: 4, name: "Jenny Styler", country: "Spain", image: require("../assets/image/Ellipse0021.jpg"), imageBackground: require("../assets/image/Ellipse0019.jpg") },
        { id: 5, name: "Jhony Wise", country: "India", image: require("../assets/image/Ellipse0021.jpg"), imageBackground: require("../assets/image/Ellipse0008.jpg") },
        { id: 6, name: "Dwayen Jack", country: "U.S.A", image: require("../assets/image/Ellipse0021.jpg"), imageBackground: require("../assets/image/Ellipse0020.jpg") },
        { id: 7, name: "Jenny Styler", country: "Spain", image: require("../assets/image/Ellipse0021.jpg"), imageBackground: require("../assets/image/Ellipse0019.jpg") },
        { id: 8, name: "Wajaya Ababi", country: "India", image: require("../assets/image/Ellipse0021.jpg"), imageBackground: require("../assets/image/Ellipse0018.jpg") },

    ];

    return (
        <SimpleBackground>
            <View style={styles.main} >

                <View style={styles.headerRow}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("RecentScreen")} >
                        <Icon
                            name='arrow-back'
                            color={colors.arrowBackColor}
                            size={size.arrowBackSize}
                        />
                    </TouchableOpacity>

                    <Text style={styles.header}>Recent activity</Text>

                </View>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Users}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    contentContainerStyle={{ alignItems: 'center' }}
                    columnWrapperStyle={{ justifyContent: 'center' }}
                    renderItem={({ item }) => <View style={styles.box}>
                        <ImageBackground
                            source={item.imageBackground}
                            style={styles.imgbg}
                            imageStyle={{ borderTopRightRadius: responsiveFontSize(22), borderTopLeftRadius: responsiveFontSize(22) }}
                        >
                            <View style={styles.row}>
                                <Icon name="favorite" color="#F44336" size={responsiveFontSize(15)} />
                                <Text style={styles.iconTxt}>6.9K</Text>
                                <Icon name="visibility" color="#FFFFFF" size={responsiveFontSize(15)} style={{ marginLeft: responsiveWidth(1) }} />
                                <Text style={styles.iconTxt}>9.0K</Text>
                            </View>

                            <View style={styles.moreIcon}>
                                <TouchableOpacity onPress={() => setShowMenu(showMenu === item.id ? null : item.id)}>
                                    <Icon name="more-horiz" color={colors.moreHorizColor} />
                                </TouchableOpacity>
                            </View>

                        </ImageBackground>

                        <View style={styles.info}>
                            <Image source={item.image} style={styles.img} />
                            <View style={{ flexDirection: "column" }}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.country}>{item.country}</Text>
                            </View>
                        </View>

                        {showMenu === item.id && (
                            <View style={styles.menu}>
                                <TouchableOpacity style={styles.menuRow}>
                                    <Icon name="delete" color="#FF5E5E" size={responsiveFontSize(15)} />
                                    <Text style={styles.menuTxt}>Delete</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.menuRow}>
                                    <Icon name="download" color="#FFFFFF" size={responsiveFontSize(15)} />
                                    <Text style={styles.menuTxt}>Download</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.menuRow}>
                                    <Icon name="send" color="#FFFFFF" size={responsiveFontSize(15)} />
                                    <Text style={styles.menuTxt}>Share</Text>
                                </TouchableOpacity>
                            </View>
                        )}

                    </View>}
                />



            </View >
        </SimpleBackground >

    )
};


const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        padding: responsiveWidth(3),
        paddingVertical: responsiveHeight(4)
    },
    header: {
        fontSize: size.secondHeader,
        fontFamily: appfonts.openSansSemiBold,
        color: colors.headerTxtColor,
        paddingHorizontal: responsiveWidth(20)
    },
    box: {
        width: responsiveWidth(44),
        height: responsiveHeight(22),
        borderRadius: responsiveFontSize(22),
        backgroundColor: "#81818126",
        margin: responsiveWidth(2),
        alignSelf: 'center',
    },
    imgbg: {
        width: responsiveWidth(44),
        height: responsiveHeight(14),
    },
    row: {
        flexDirection: "row",
        paddingHorizontal: responsiveWidth(2.5),
        paddingVertical: responsiveHeight(1)
    },
    iconTxt: {
        fontSize: responsiveFontSize(10),
        fontFamily: appfonts.openSansSemiBold,
        color: colors.textColor,
        paddingHorizontal: responsiveWidth(1),
    },
    moreIcon: {
        width: responsiveWidth(4),
        height: responsiveHeight(2),
        borderRadius: responsiveFontSize(50),
        borderWidth: 1,
        borderColor: colors.moreHorizColor,
        position: 'absolute',
        alignSelf: "flex-end",
        margin: responsiveWidth(2.5),
    },
    img: {
        width: responsiveWidth(8),
        height: responsiveHeight(4),
        borderRadius: size.photoBorderRadius,
    },
    info: {
        flexDirection: "row",
        padding: responsiveWidth(3),
    },
    name: {
        fontSize: responsiveFontSize(12),
        fontFamily: appfonts.openSansSemiBold,
        color: colors.textColor,
        paddingHorizontal: responsiveWidth(1.7),
    },
    country: {
        fontSize: responsiveFontSize(10),
        fontFamily: appfonts.openSansSemiBold,
        color: "#FFFFFFB2",
        paddingHorizontal: responsiveWidth(1.7),
    },
    menu: {
        width: responsiveWidth(34),
        height: responsiveHeight(17),
        borderRadius: responsiveFontSize(10),
        backgroundColor: "#505050",
        position: 'absolute',
        alignSelf: 'center',
        marginTop: responsiveHeight(4),
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: responsiveHeight(2),
    },
    menuTxt: {
        fontSize: responsiveFontSize(12),
        fontFamily: appfonts.openSansSemiBold,
        color: colors.textColor,
        paddingHorizontal: responsiveWidth(2.5),
    },
    menuRow: {
        flexDirection: "row",
        borderBottomWidth: responsiveWidth(0.1),
        paddingVertical: responsiveHeight(1.3),
        width: responsiveWidth(28),
        borderColor: '#696969',
        paddingHorizontal: responsiveWidth(3),
    },

});

export default RecentActivityScreen;