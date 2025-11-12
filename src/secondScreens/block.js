import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import SimpleBackground from "../component/simpleBgColor";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import { ScrollViews } from "../component";
import { appfonts } from "../services/utilites/assest/fonts";


const BlockedPeopleScreen = ({ navigation }) => {

    const users = [
        { id: 1, name: "Christina Pearsin", image: require("../assets/image/Ellipse1122.jpg") },
        { id: 2, name: "Christina Pearsin", image: require("../assets/image/Ellipse0003.jpg") },
        { id: 3, name: "Christina Pearsin", image: require("../assets/image/Ellipse0004.jpg") },
        { id: 4, name: "Christina Pearsin", image: require("../assets/image/Ellipse1124.jpg") },
        { id: 5, name: "Christina Pearsin", image: require("../assets/image/Ellipse0005.jpg") },
        { id: 6, name: "Christina Pearsin", image: require("../assets/image/Ellipse1122.jpg") },
    ];

    return (
        <SimpleBackground>
            <ScrollViews.WithKeyboardAvoidingView>
                <View style={styles.main}>

                    <View style={styles.back}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("RecentScreen")}
                        >
                            <Icon
                                name='arrow-back'
                                color={colors.arrowBackColor}
                                size={size.arrowBackSize}
                            />
                        </TouchableOpacity>

                        <Text style={styles.header}>Blocked People</Text>
                    </View>

                    {users.map((item) => (
                        <View key={item.id} style={styles.bg}>
                            <Image source={item.image} style={styles.img} />
                            <Text style={styles.name}>{item.name}</Text>
                            <TouchableOpacity>
                                <Text style={styles.unblock}>Unblock</Text>
                            </TouchableOpacity>
                        </View>
                    ))}


                </View>
            </ScrollViews.WithKeyboardAvoidingView>
        </SimpleBackground>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    back: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: responsiveHeight(4),
        paddingHorizontal: responsiveWidth(3)
    },
    header: {
        color: colors.headerTxtColor,
        fontSize: size.secondHeader,
        fontFamily: appfonts.openSansSemiBold,
        marginRight: responsiveWidth(23)
    },
    bg: {
        width: responsiveWidth(90),
        height: responsiveHeight(12),
        borderRadius: responsiveFontSize(10),
        backgroundColor: '#81818126',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(3),
    },
    img: {
        width: size.photoWidth,
        height: size.photoHeight,
        borderRadius: size.photoBorderRadius
    },
    name: {
        color: colors.textColor,
        fontSize: responsiveFontSize(18),
        fontFamily: appfonts.openSansSemiBold,
    },
    unblock: {
        color: colors.buttonTxtColor,
        fontSize: responsiveFontSize(12),
        fontFamily: appfonts.openSansSemiBold,
        width: responsiveWidth(23),
        height: responsiveHeight(5),
        borderRadius: responsiveFontSize(12),
        backgroundColor: colors.buttonbgColor,
        borderWidth: 1,
        borderColor: colors.borderColor,
        textAlign: 'center',
        textAlignVertical: 'center'
    },


});

export default BlockedPeopleScreen;
