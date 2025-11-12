import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import { appfonts } from "../services/utilites/assest/fonts";


const SubscriptionScreen = ({ navigation }) => {

    const [selectedCard, setSelectedCard] = useState("CardOne")
    return (
        <SimpleBackground>
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
                    <Text style={styles.txtChoosePlane}>Choose a plan</Text>
                </View>

                <TouchableOpacity
                    onPress={() => setSelectedCard("CardOne")}
                    style={{ alignSelf: 'center' }}
                >

                    <View style={[
                        styles.cardone,
                        selectedCard === "CardOne" && styles.SelectedCard
                    ]}>

                        <View style={{ flex: 1, paddingHorizontal: responsiveWidth(4) }}>
                            <Text style={styles.name}>Free</Text>
                            <Text style={styles.message}>3 days trail</Text>
                            <Text style={styles.time}>After trail you activate for 1Month</Text>
                        </View>

                        <Text style={styles.price}>$0.00</Text>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setSelectedCard("CardTwo")}
                    style={{ alignSelf: 'center' }}
                >

                    <View style={[
                        styles.cardTwo,
                        selectedCard === "CardTwo" && styles.SelectedCard
                    ]}>

                        <View style={{ flex: 1, paddingHorizontal: responsiveWidth(4) }}>
                            <Text style={styles.name}>Premium</Text>
                            <Text style={styles.message}>One Month</Text>
                            <Text style={styles.time}>After 1Month you can re-activate .</Text>
                        </View>

                        <Text style={styles.price}>2,99 euro</Text>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setSelectedCard("CardThree")}
                    style={{ alignSelf: 'center' }}
                >

                    <View style={[
                        styles.cardThree,
                        selectedCard === "CardThree" && styles.SelectedCard
                    ]}>

                        <View style={{ flex: 1, paddingHorizontal: responsiveWidth(4) }}>
                            <Text style={styles.name}>Premium</Text>
                            <Text style={styles.message}>One Month</Text>
                            <Text style={styles.time}>After one year you can re-activate for 2 ,3 years</Text>
                        </View>

                        <Text style={styles.price}>29,99 euro</Text>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
                    <View style={styles.Btn}>
                        <Text style={styles.btnTxt}>Get Started</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </SimpleBackground >

    )
};


const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    back: {
        paddingTop: size.arrowBackPadding,
        paddingHorizontal: responsiveWidth(3)
    },
    txtChoosePlane: {
        fontSize: size.secondHeader,
        fontFamily: appfonts.openSansSemiBold,
        color: colors.headerTxtColor,
        bottom: responsiveHeight(3)
    },
    cardone: {
        width: responsiveWidth(90),
        height: responsiveHeight(20),
        borderRadius: responsiveFontSize(16),
        backgroundColor: '#899CFF',
        marginTop: responsiveHeight(3),
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
        paddingHorizontal: responsiveWidth(1),
        alignSelf: 'center'
    },
    name: {
        fontSize: responsiveFontSize(20),
        fontFamily: appfonts.openSansBold,
        color: colors.textColor
    },
    message: {
        fontSize: responsiveFontSize(15),
        fontFamily: appfonts.openSansSemiBold,
        color: '#ECECEC',
    },
    time: {
        fontSize: responsiveFontSize(12),
        fontFamily: appfonts.openSansRegular,
        color: '#ECECEC',
        marginTop: responsiveHeight(0.5)
    },
    price: {
        fontSize: responsiveFontSize(20),
        ffontFamily: appfonts.openSansSemiBold,
        color: '#FFFFFF',
        paddingHorizontal: responsiveWidth(1)
    },
    cardTwo: {
        width: responsiveWidth(90),
        height: responsiveHeight(20),
        borderRadius: responsiveFontSize(16),
        backgroundColor: '#F35892',
        marginTop: responsiveHeight(1.5),
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
        paddingHorizontal: responsiveWidth(1),
        alignSelf: 'center'
    },
    cardThree: {
        width: responsiveWidth(90),
        height: responsiveHeight(20),
        borderRadius: responsiveFontSize(16),
        backgroundColor: '#FBBC05D6',
        marginTop: responsiveHeight(1.5),
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
        paddingHorizontal: responsiveWidth(1),
        alignSelf: 'center'
    },
    Btn: {
        width: size.buttonWidth,
        height: size.buttonHeight,
        borderRadius: size.buttonBorderRadios,
        backgroundColor: colors.buttonbgColor,
        borderWidth: 1,
        borderColor: colors.borderColor,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btnTxt: {
        fontSize: size.buttonText,
        fontFamily: appfonts.openSansSemiBold,
        color: colors.buttonTxtColor,
    },
    SelectedCard: {
        borderWidth: 2,
        borderColor: '#FFFFFF'
    }


});

export default SubscriptionScreen;