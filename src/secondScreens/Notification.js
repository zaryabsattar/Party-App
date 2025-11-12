import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import { appfonts } from "../services/utilites/assest/fonts";


const NotificationScreen = ({ navigation }) => {

    const [notificationOn, setNotificationOn] = useState(false);
    const [soundOn, setSoundOn] = useState(false);
    const [vibrateOn, setVibrateOn] = useState(false);
    const [activeStatusOn, setActiveStatusOn] = useState(false);

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
                    <Text style={styles.header}>Notification</Text>
                </View>

                <TouchableOpacity
                    onPress={() => setNotificationOn(!notificationOn)}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(7) }}>
                    <View style={styles.txtbg}>
                        <Text style={styles.txt}>Notification</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[styles.radio,
                                { backgroundColor: notificationOn ? '#C1C1C1' : '#FFFFFF' }
                                ]}>

                                <View style={[styles.radiobg,
                                { alignSelf: notificationOn ? 'flex-end' : 'flex-start', backgroundColor: notificationOn ? '#FFFFFF' : '#C1C1C1' },
                                ]} />

                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setSoundOn(!soundOn)}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(2) }}>
                    <View style={styles.txtbg}>
                        <Text style={styles.txt}>Sound</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[styles.radio,
                                { backgroundColor: soundOn ? '#C1C1C1' : '#FFFFFF' }
                                ]}>

                                <View style={[styles.radiobg,
                                { alignSelf: soundOn ? 'flex-end' : 'flex-start', backgroundColor: soundOn ? '#FFFFFF' : '#C1C1C1' },
                                ]} />

                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setVibrateOn(!vibrateOn)}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(2) }}>
                    <View style={styles.txtbg}>
                        <Text style={styles.txt}>Vibrate</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[styles.radio,
                                { backgroundColor: vibrateOn ? '#C1C1C1' : '#FFFFFF' }
                                ]}>

                                <View style={[styles.radiobg,
                                { alignSelf: vibrateOn ? 'flex-end' : 'flex-start', backgroundColor: vibrateOn ? '#FFFFFF' : '#C1C1C1' },
                                ]} />

                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setActiveStatusOn(!activeStatusOn)}
                    style={{ alignSelf: 'center', marginTop: responsiveHeight(2) }}>
                    <View style={styles.txtbg}>
                        <Text style={styles.txt}>Active Status</Text>
                        <View style={styles.radioWrapper}>
                            <View
                                style={[styles.radio,
                                { backgroundColor: activeStatusOn ? '#C1C1C1' : '#FFFFFF' }
                                ]}>

                                <View style={[styles.radiobg,
                                { alignSelf: activeStatusOn ? 'flex-end' : 'flex-start', backgroundColor: activeStatusOn ? '#FFFFFF' : '#C1C1C1' },
                                ]} />

                            </View>
                        </View>
                    </View>
                </TouchableOpacity>


            </View >
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
    header: {
        fontSize: size.secondHeader,
        fontFamily: appfonts.openSansSemiBold,
        color: colors.headerTxtColor,
        bottom: responsiveHeight(3)
    },
    txtbg: {
        width: responsiveWidth(90),
        height: responsiveHeight(9),
        borderRadius: responsiveFontSize(8),
        backgroundColor: '#81818126',
        paddingHorizontal: responsiveWidth(4),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    txt: {
        fontSize: responsiveFontSize(18),
        fontFamily: appfonts.openSansSemiBold,
        color: colors.textColor,
    },
    radio: {
        width: responsiveWidth(9),
        height: responsiveHeight(2.5),
        borderRadius: responsiveFontSize(45),
        backgroundColor: '#FFFFFF'

    },
    radiobg: {
        width: responsiveWidth(4),
        height: responsiveHeight(2),
        backgroundColor: '#C1C1C1',
        borderRadius: responsiveFontSize(20),
        margin: responsiveWidth(0.6)
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default NotificationScreen;