import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import SimpleBackground from "../component/simpleBgColor";
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import { appfonts } from "../services/utilites/assest/fonts";

const LiveStreamScreen = ({ navigation }) => {
  const [styleType, setStyleType] = useState("");
  const [litLevel, setLitLevel] = useState("");
  const [description, setDescription] = useState("");

  return (
    <SimpleBackground>
      <ImageBackground
        source={require("../assets/image/Ellipse0008.jpg")}
        style={styles.bgImage}
        resizeMode="cover"
      >

        <LinearGradient
          colors={[
            "rgba(0, 0, 0, 0.432)",
            "rgba(0, 0, 0, 0.54)",
            "rgba(0, 0, 0, 0.54)",
            "rgba(0, 0, 0, 0.54)",
            "rgba(0, 0, 0, 0.54)",
            "rgba(0, 0, 0, 0.54)",
            "rgba(0, 0, 0, 0)"
          ]}
          locations={[0.02, 0.12, 0.29, 0.39, 0.51, 0.66, 0.9]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={StyleSheet.absoluteFillObject}
        />

        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.main}>

            <View style={styles.headerRow}>
              <TouchableOpacity onPress={() => navigation.navigate("CreatePartyScreen")}>
                <Icon
                  name='arrow-back'
                  color={colors.arrowBackColor}
                  size={size.arrowBackSize}
                />
              </TouchableOpacity>
              <Text style={styles.headerText}>Live Stream</Text>
            </View>

            <Text style={styles.title}>Cricket Live</Text>


            <TextInput
              style={styles.input}
              placeholder="Style, Speaking"
              placeholderTextColor="#DDDDDD"
              value={styleType}
              onChangeText={setStyleType}
            />

            <TextInput
              style={styles.input}
              placeholder="Lit level"
              placeholderTextColor="#DDDDDD"
              value={litLevel}
              onChangeText={setLitLevel}
            />

            <View style={styles.locationBox}>
              <Icon name="location-on" size={responsiveFontSize(25)} color="#DDDDDD" />
              <Text style={styles.locationText}>Islamabad, Pakistan</Text>
            </View>

            <View style={styles.tagBox}>
              <Text style={styles.tagTxt}>Tag</Text>
              <View style={{ marginLeft: responsiveWidth(2) }}>
                <Image source={require("../assets/image/Ellipse0003.jpg")} style={styles.img} />
              </View>
              <View style={{ right: responsiveWidth(3.5) }}>
                <Image source={require("../assets/image/Ellipse0004.jpg")} style={styles.img} />
              </View>
              <View style={{ right: responsiveWidth(7) }}>
                <Image source={require("../assets/image/Ellipse0009.jpg")} style={styles.img} />
              </View>
              <View style={styles.imgbg}>
                <Text style={styles.imgTxt}>+9</Text>
              </View>
            </View>

            <View style={styles.descriptionbg}>
              <TextInput
                style={styles.textarea}
                placeholder="Description"
                placeholderTextColor="#DDDDDD"
                multiline
                numberOfLines={4}
                value={description}
                onChangeText={setDescription}
              />
              <Icon name="keyboard-arrow-down" size={responsiveFontSize(25)} color="#AEAEAE" />
            </View>

            <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: responsiveHeight(8) }}>
              <TouchableOpacity
                style={styles.goLiveBtn}
                onPress={() => navigation.navigate("LiveNowScreen")}
              >
                <Icon name="smart-display" color={colors.buttonTxtColor} size={responsiveFontSize(25)} />
                <Text style={styles.goLiveText}>Go Live</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </ImageBackground>
    </SimpleBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "space-between",
    width: responsiveWidth(100)
  },
  scroll: {
    flexGrow: 1,
  },
  main: {
    flex: 1,
    paddingHorizontal: responsiveWidth(3),
    paddingTop: responsiveHeight(3),
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    color: colors.headerTxtColor,
    fontSize: size.secondHeader,
    fontFamily: appfonts.openSansSemiBold,
    marginRight: responsiveWidth(26),
  },
  title: {
    color: colors.headerTxtColor,
    fontSize: responsiveFontSize(22),
    fontFamily: appfonts.openSansSemiBold,
    marginVertical: responsiveHeight(3),
  },
  input: {
    backgroundColor: "#FFFFFF4D",
    borderRadius: responsiveFontSize(8),
    width: responsiveWidth(35),
    height: responsiveHeight(5),
    color: colors.textInputColor,
    padding: responsiveWidth(3),
    fontSize: responsiveFontSize(14),
    fontFamily: appfonts.openSansSemiBold,
    marginTop: responsiveHeight(1.3),
  },
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF4D",
    borderRadius: responsiveFontSize(8),
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    paddingHorizontal: responsiveWidth(2),
    marginTop: responsiveHeight(1.3),
  },
  locationText: {
    color: "#DDDDDD",
    fontSize: responsiveFontSize(14),
    fontFamily: appfonts.openSansSemiBold,
    marginLeft: responsiveWidth(1),
  },
  tagBox: {
    backgroundColor: "#FFFFFF4D",
    borderRadius: responsiveFontSize(8),
    width: responsiveWidth(35),
    height: responsiveHeight(5.5),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: 'row',
    marginTop: responsiveHeight(1.3),
  },
  tagTxt: {
    fontSize: responsiveFontSize(14),
    fontFamily: appfonts.openSansSemiBold,
    color: '#DDDDDD',
    paddingHorizontal: responsiveWidth(3)
  },
  img: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
    borderRadius: responsiveFontSize(100),
  },
  imgbg: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
    borderRadius: responsiveFontSize(100),
    backgroundColor: '#00000066',
    right: responsiveWidth(10.5)
  },
  imgTxt: {
    fontSize: responsiveFontSize(14),
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: responsiveHeight(0.2),
  },
  descriptionbg: {
    width: responsiveWidth(35),
    height: responsiveHeight(5),
    backgroundColor: "#FFFFFF4D",
    borderRadius: responsiveFontSize(8),
    marginTop: responsiveHeight(1.3),
    textAlignVertical: "top",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(1),
    alignItems: 'center'
  },
  textarea: {
    color: colors.textInputColor,
    fontSize: responsiveFontSize(14),
    fontFamily: appfonts.openSansSemiBold,
  },
  goLiveBtn: {
    backgroundColor: colors.buttonbgColor,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: size.buttonBorderRadios,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: size.buttonHeight,
    width: size.buttonWidth,
    alignSelf: 'center',
    gap: responsiveWidth(3)
  },
  goLiveText: {
    color: colors.buttonTxtColor,
    fontSize: size.buttonText,
    fontFamily: appfonts.openSansSemiBold,
  },
});

export default LiveStreamScreen;
