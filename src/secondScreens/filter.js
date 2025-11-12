import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import SimpleBackground from "../component/simpleBgColor";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import { appfonts } from "../services/utilites/assest/fonts";

const FilterScreen = ({ navigation }) => {

  const [selectedGame, setSelectedGame] = useState(null);

  const Data = [
    { id: 1, games: "Cricket" },
    { id: 2, games: "Football" },
    { id: 3, games: "Hokey" },
    { id: 4, games: "Volleyball" },
    { id: 5, games: "Dance" },
    { id: 6, games: "PUBG" },
  ];

  return (
    <SimpleBackground>
      <View style={styles.main}>


        <TouchableOpacity
          onPress={() => navigation.navigate("RecentScreen")}
          style={styles.back}
        >
          <Icon
            name='arrow-back'
            color={colors.arrowBackColor}
            size={size.arrowBackSize}
          />
        </TouchableOpacity>


        <Text style={styles.header}>Filter</Text>

        <Text style={styles.label}>Location</Text>

        <View style={styles.btmWidth}>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.placeholder}>Country</Text>
            <Icon name="keyboard-arrow-down" size={responsiveFontSize(25)} color="#AEAEAE" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.placeholder}>City</Text>
            <Icon name="keyboard-arrow-down" size={responsiveFontSize(25)} color="#AEAEAE" />
          </TouchableOpacity>
        </View>


        <Text style={styles.label}>Party Names</Text>

        <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={{ alignItems: 'center' }}
          columnWrapperStyle={{ justifyContent: 'center' }}
          renderItem={({ item }) => <View style={{ paddingHorizontal: responsiveWidth(2), marginTop: responsiveHeight(2) }}>
            <TouchableOpacity
              onPress={() => setSelectedGame(item.id)}
              style={[styles.gamesbg,
              {
                backgroundColor:
                  selectedGame === item.id ? "#000000" : "#81818126",
                borderColor:
                  selectedGame === item.id ? "#F83094" : "transparent",
                borderWidth: selectedGame === item.id ? 1 : 0,
              }
              ]}>
              <Text style={styles.gamesTxt}>{item.games}</Text>
            </TouchableOpacity>
          </View>}
        />


        <View style={styles.topWidth} >
          <Text style={styles.label}>Level</Text>
        </View>


        <View style={styles.levelWidth}>
          <View style={styles.levelWidthbg}>
            <View style={styles.levelWidthLeft}>
              <View style={styles.levelWidthRight}>

              </View>
            </View>
          </View>
        </View>

        <View style={styles.levelTxt}>
          <Text style={styles.Txt}>0</Text>
          <Text style={styles.Txt}>9</Text>
        </View>

        <TouchableOpacity
          style={styles.nextBtn}
        >
          <Text style={styles.nextText}>Apply</Text>
        </TouchableOpacity>

      </View>
    </SimpleBackground>
  );
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
    color: colors.headerTxtColor,
    fontSize: size.secondHeader,
    fontFamily: appfonts.openSansSemiBold,
    textAlign: 'center',
    bottom: responsiveHeight(3)
  },
  label: {
    color: colors.textColor,
    fontSize: responsiveFontSize(18),
    fontFamily: appfonts.openSansSemiBold,
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(4)
  },
  dropdown: {
    backgroundColor: "#81818126",
    borderRadius: responsiveFontSize(8),
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: responsiveWidth(4),
    alignSelf: 'center'
  },
  placeholder: {
    color: colors.textColor,
    fontSize: responsiveFontSize(18),
    fontFamily: appfonts.openSansSemiBold,
  },
  btmWidth: {
    borderBottomWidth: 1,
    borderColor: '#676767',
    paddingVertical: responsiveHeight(2),
    gap: responsiveHeight(1.5),
    alignSelf: 'center'
  },
  gamesbg: {
    width: responsiveWidth(28),
    height: responsiveHeight(6),
    borderRadius: responsiveFontSize(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  gamesTxt: {
    fontSize: responsiveFontSize(18),
    fontFamily: appfonts.openSansSemiBold,
    color: colors.textColor,
  },
  topWidth: {
    flex: 1,
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderTopWidth: 1,
    borderColor: '#676767',
    bottom: responsiveHeight(9)
  },
  levelWidth: {
    height: responsiveHeight(1),
    width: responsiveWidth(90),
    borderRadius: responsiveFontSize(27),
    backgroundColor: "#81818126",
    bottom: responsiveHeight(15),
    alignSelf: 'center'
  },
  levelWidthbg: {
    width: responsiveWidth(38),
    height: responsiveHeight(1.3),
    borderRadius: responsiveFontSize(27),
    backgroundColor: '#F83094',
    alignSelf: 'center',
    marginRight: responsiveWidth(13),
    flexDirection: 'row',
  },
  levelWidthLeft: {
    height: responsiveHeight(3.5),
    width: responsiveWidth(3),
    borderRadius: responsiveFontSize(12),
    backgroundColor: '#F83094',
    bottom: responsiveHeight(1.2),
  },
  levelWidthRight: {
    height: responsiveHeight(3.5),
    width: responsiveWidth(3),
    borderRadius: responsiveFontSize(12),
    backgroundColor: '#F83094',
    left: responsiveWidth(36),
  },
  levelTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: responsiveHeight(15),
  },
  Txt: {
    fontSize: responsiveFontSize(18),
    fontFamily: appfonts.openSansBold,
    color: '#FFFFFF',
    paddingHorizontal: responsiveWidth(7),
    marginTop: responsiveHeight(1)
  },
  nextBtn: {
    backgroundColor: colors.buttonbgColor,
    borderRadius: size.buttonBorderRadios,
    width: size.buttonWidth,
    height: size.buttonHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#F83094",
    bottom: responsiveHeight(8),
    alignSelf: 'center'
  },
  nextText: {
    color: colors.buttonTxtColor,
    fontSize: size.buttonText,
    fontFamily: appfonts.openSansSemiBold,
  },
});

export default FilterScreen;
