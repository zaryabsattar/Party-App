import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import SimpleBackground from "../component/simpleBgColor";
import { colors } from "../services/utilites/color";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../component/responsive";
import { size } from "../services/utilites/size";
import { ScrollViews } from "../component";
import { appfonts } from "../services/utilites/assest/fonts";

const CreatePartyScreen = ({ navigation }) => {

  const [partyName, setPartyName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  return (
    <SimpleBackground>
      <ScrollViews.WithKeyboardAvoidingView>
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

          <Text style={styles.header}>Create Party</Text>

          <Text style={styles.label}>Party name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter party name"
            placeholderTextColor="#E3E3E3"
            value={partyName}
            onChangeText={setPartyName}
          />


          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your location"
            placeholderTextColor="#E3E3E3"
            value={location}
            onChangeText={setLocation}
          />


          <Text style={styles.label}>Genre</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.placeholder}>Select</Text>
            <Icon name="keyboard-arrow-down" size={responsiveFontSize(25)} color="#AEAEAE" />
          </TouchableOpacity>


          <Text style={styles.label}>Lit level</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.placeholder}>Level</Text>
            <Icon name="keyboard-arrow-down" size={responsiveFontSize(25)} color="#AEAEAE" />
          </TouchableOpacity>


          <Text style={styles.label}>Tag</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.placeholder}>Everyone</Text>
            <Icon name="keyboard-arrow-down" size={responsiveFontSize(25)} color="#AEAEAE" />
          </TouchableOpacity>


          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.textarea}
            placeholder="Write here..."
            placeholderTextColor="#E3E3E3"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />


          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => navigation.navigate("LiveStreamScreen")}
          >
            <Text style={styles.nextText}>Next</Text>
            <Icon name="chevron-right" color={colors.buttonTxtColor} size={responsiveFontSize(22)} />
          </TouchableOpacity>

        </View>
      </ScrollViews.WithKeyboardAvoidingView>
    </SimpleBackground>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: responsiveHeight(3),
    paddingHorizontal: responsiveWidth(4)
  },
  back: {
    marginTop: responsiveHeight(3),
    zIndex: responsiveFontSize(10),
    position: "absolute",
    paddingHorizontal: responsiveWidth(2)
  },
  header: {
    color: colors.headerTxtColor,
    fontSize: responsiveFontSize(24),
    fontFamily: appfonts.openSansSemiBold,
    marginBottom: responsiveHeight(2),
    textAlign: 'center',
  },
  label: {
    color: colors.headerTxtColor,
    fontSize: responsiveFontSize(16),
    fontFamily: appfonts.openSansSemiBold,
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(1)
  },
  input: {
    backgroundColor: "#8B8B8B26",
    borderRadius: responsiveFontSize(8),
    paddingHorizontal: responsiveWidth(4),
    width: size.TextInputWidth,
    height: size.TextInputHeight,
    color: colors.textInputColor,
    fontSize: responsiveFontSize(14),
    fontFamily: appfonts.openSansRegular,
    alignSelf: 'center'
  },
  dropdown: {
    backgroundColor: "#8B8B8B26",
    borderRadius: responsiveFontSize(8),
    width: size.TextInputWidth,
    height: size.TextInputHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: responsiveWidth(4),
    alignSelf: 'center'
  },
  placeholder: {
    color: "#E3E3E3",
    fontSize: responsiveFontSize(14),
    fontFamily: appfonts.openSansRegular,
  },
  textarea: {
    backgroundColor: "#8B8B8B26",
    color: colors.textInputColor,
    borderRadius: responsiveFontSize(8),
    padding: responsiveWidth(5),
    textAlignVertical: "top",
    fontSize: responsiveFontSize(14),
    fontFamily: appfonts.openSansRegular,
  },
  nextBtn: {
    backgroundColor: colors.buttonbgColor,
    borderRadius: size.buttonBorderRadios,
    marginTop: responsiveHeight(5),
    width: size.buttonWidth,
    height: size.buttonHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#F83094",
    paddingHorizontal: responsiveWidth(3),
    alignSelf: 'center'
  },
  nextText: {
    color: colors.buttonTxtColor,
    fontSize: size.buttonText,
    fontFamily: appfonts.openSansSemiBold,
  },
});

export default CreatePartyScreen;
