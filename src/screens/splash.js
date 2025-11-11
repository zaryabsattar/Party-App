import React, { useEffect } from "react";
import { Image, Dimensions } from "react-native";
import PartyBackground from "../component/bgColor";  // ✅ Correct import
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window"); // 📱 Screen size nikalna

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("WelcomeScreen");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // 🔹 Responsive size (sab mobile par proportion same rahega)
  const imageHeight = height * 0.35; // screen height ka 25%
  const imageWidth = width * 1.70;   // screen width ka 45%

  return (
    <PartyBackground>
      <Image
        source={require("../assets/image/2Lit.png")}
        style={{
          height: imageHeight,
          width: imageWidth,
          bottom: 30,
          resizeMode: "contain",
        }}
      />
    </PartyBackground>
  );
};

export default SplashScreen;
