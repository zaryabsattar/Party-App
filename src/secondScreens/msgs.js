import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, } from "react-native";
import SimpleBackground from "../component/simpleBgColor";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import KeyboardScrollVeiw  from "../services/utilites/assest/scrollVeiw";

const MessageScreen = ({ navigation }) => {

    const [text, setText] = useState("");
    return (
        <SimpleBackground>
             <KeyboardScrollVeiw>
            <View style={styles.main} >

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("ChatMenuScreen")}
                        style={styles.back} >
                        <MaterialIcons
                            name='arrow-back'
                            color={colors.arrowBackColor}
                            size={size.arrowBackSize}
                        />
                    </TouchableOpacity>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>

                        <Image source={require("../assets/image/Ellipse1122.jpg")} style={styles.Photo} />

                        <View style={styles.loginOpetion} />
                        <Text style={styles.name}>Christina Pearsin</Text>
                    </View>

                </View>

                <View style={{ alignItems: 'center', marginLeft: responsiveWidth(44), bottom: responsiveHeight(3.5) }}>
                    <Text style={styles.active}>Active now</Text>
                </View>


                <View style={{ flexDirection: 'row', paddingHorizontal: responsiveWidth(5), }}>

                    <Image source={require("../assets/image/Ellipse1122.jpg")} style={styles.chatPhoto} />

                    <View style={styles.chatloginOpetion} />
                    <View style={{ marginTop: responsiveHeight(3) }}>
                        <View style={styles.chatBox}>
                            <Text style={styles.chatText}>Hi, how are you!</Text>
                        </View>
                    </View>

                </View>


                <View style={{ paddingHorizontal: responsiveWidth(17) }}>
                    <View style={styles.chatBox}>
                        <Text style={styles.chatText}>what is your name and where are you from</Text>
                    </View>
                </View>


                <View style={{ paddingHorizontal: responsiveWidth(17) }}>
                    <View style={styles.chatBox}>
                        <Text style={styles.chatText}>what is your name and where are you from</Text>
                    </View>
                </View>


                <View style={{ alignSelf: 'flex-end', flexDirection: 'row-reverse', paddingHorizontal: responsiveWidth(5) }}>
                    <Image source={require("../assets/image/msgsphoto2.jpg")} style={styles.secondchatPhoto} />
                    <View style={{ paddingHorizontal: responsiveWidth(1), paddingVertical: responsiveHeight(0.5), marginTop: responsiveHeight(3) }}>
                        <View style={styles.secondchatBox}>
                            <Text style={styles.secondchatText}>My name is Arafat Ovi and i from America</Text>
                        </View>
                    </View>
                </View>


                <View style={{ alignSelf: 'flex-end', paddingHorizontal: responsiveWidth(17), }}>
                    <View style={styles.secondchatBox}>
                        <Text style={styles.secondchatText}>My name is Arafat Ovi and i from America</Text>
                    </View>
                </View>


                <View style={styles.btnInput}>
                    <FontAwesome name='camera' size={20} color='#ACACAC' style={{ paddingHorizontal: responsiveWidth(2) }} />
                    <TextInput
                        placeholder="write something"
                        placeholderTextColor='#ACACAC'
                        value={text}
                        onChangeText={setText}
                        style={styles.txtInput}
                    />
                    <TouchableOpacity style={styles.IconBtn}>
                        <FontAwesome name='send' size={25} color='white' />
                    </TouchableOpacity>
                </View>

            </View>
            </KeyboardScrollVeiw>
        </SimpleBackground>

    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'flex-start',
    },
    back: {
        paddingTop: size.arrowBackPadding,    
    },
    name: {
        fontSize: responsiveFontSize(18),
        fontWeight: '600',
        color: colors.textColor,
    },
    Photo: {
        width: size.photoWidth,
        height: size.photoHeight,
        borderRadius: size.photoBorderRadius,
        marginTop: responsiveHeight(3.5)
    },
    loginOpetion: {
        width: responsiveWidth(3),
        height: responsiveHeight(1.5),
        borderRadius: responsiveFontSize(100),
        backgroundColor: '#21FF2A',
        right: responsiveWidth(2.5)
    },
    active: {
        fontSize: responsiveFontSize(14),
        fontWeight: '600',
        color: '#A5A5A5',
    },
    chatBox: {
        backgroundColor: '#81818126',
        padding: responsiveWidth(4),
        maxWidth: '70%',
        alignSelf: 'flex-start',
        borderTopRightRadius: responsiveFontSize(15),
        borderBottomLeftRadius: responsiveFontSize(15),
        borderBottomRightRadius: responsiveFontSize(15),
        margin: responsiveWidth(2)
    },
    chatText: {
        color: '#A5A5A5',
        fontSize: responsiveFontSize(15),
        fontWeight: '600'
    },
    chatPhoto: {
        width: size.photoWidth,
        height: size.photoHeight,
        borderRadius: size.photoBorderRadius,
    },
    chatloginOpetion: {
       width: responsiveWidth(3),
        height: responsiveHeight(1.5),
        borderRadius: responsiveFontSize(100),
        backgroundColor: '#21FF2A',
        right: responsiveWidth(2.5),
        top: responsiveHeight(0.7)
    },
    secondchatBox: {
        backgroundColor: '#F83094',
        padding: responsiveWidth(4),
        maxWidth: '70%',
        alignSelf: 'flex-end',
        borderTopLeftRadius: responsiveFontSize(15),
        borderBottomLeftRadius: responsiveFontSize(15),
        borderBottomRightRadius: responsiveFontSize(15),
        margin: responsiveWidth(1),
    },
    secondchatText: {
        color: '#FFFFFF',
        fontSize: responsiveFontSize(15.5),
        fontWeight: '600',
    },
    secondchatPhoto: {
        width: size.photoWidth,
        height: size.photoHeight,
        borderRadius: size.photoBorderRadius,
    },
    btnInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: size.TextInputWidth,
        height: size.TextInputHeight,
        borderRadius: size.buttonBorderRadios,
        backgroundColor: colors.buttonbgColor,
        borderWidth: 1,
        borderColor: colors.borderColor,
        marginTop: responsiveHeight(4),
        alignSelf: 'center'
    },
    txtInput: {
        flex: 1,
        fontSize: size.buttonText,
        fontWeight: '600',
        paddingHorizontal: responsiveWidth(2.5),
        color: colors.buttonTxtColor
    },
    IconBtn: {
        width: responsiveWidth(15),
        height: responsiveHeight(8),
        borderRadius: responsiveFontSize(10),
        backgroundColor: '#F83094',
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default MessageScreen;